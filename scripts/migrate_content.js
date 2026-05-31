import fs from 'fs';
import path from 'path';

const projectSrcDir = './content/project';
const projectDestDir = './src/content/projects';

const postSrcDir = './content/post';
const postDestDir = './src/content/posts';

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Parse YAML frontmatter simply and cleanly without mangling urls/formatting
function processFile(srcPath, destPath, imagePath = null) {
  let content = fs.readFileSync(srcPath, 'utf8');

  // Find the frontmatter boundary
  const parts = content.split(/^---$/m);
  if (parts.length >= 3) {
    let frontmatter = parts[1];
    const body = parts.slice(2).join('---');

    // Remove any TOML indicators if any, but since these are YAML delimited by ---, they should be fine.
    // Parse key-value strings simply, but we can also just prepend the image path to frontmatter directly as text
    if (imagePath) {
      frontmatter = `featured: "${imagePath}"\n` + frontmatter.trim() + '\n';
    }

    fs.writeFileSync(destPath, `---\n${frontmatter}---\n${body}`);
  } else {
    // If no frontmatter delimit, try TOML delimiters +++
    const tomlParts = content.split(/^\+\+\+$/m);
    if (tomlParts.length >= 3) {
      let frontmatter = tomlParts[1];
      const body = tomlParts.slice(2).join('+++');
      
      // Let's convert to YAML format
      // Replace single line key = value with key: value
      let lines = frontmatter.split('\n').map(line => {
        const eqIdx = line.indexOf('=');
        if (eqIdx !== -1 && !line.includes(':')) {
          const key = line.substring(0, eqIdx).trim();
          const val = line.substring(eqIdx + 1).trim();
          return `${key}: ${val}`;
        }
        return line;
      });

      if (imagePath) {
        lines.unshift(`featured: "${imagePath}"`);
      }

      fs.writeFileSync(destPath, `---\n${lines.join('\n')}\n---\n${body}`);
    } else {
      // Just copy as is
      fs.writeFileSync(destPath, content);
    }
  }
}

function migrateProjects() {
  if (!fs.existsSync(projectSrcDir)) return;
  ensureDir(projectDestDir);

  const projects = fs.readdirSync(projectSrcDir).filter(f => {
    return fs.statSync(path.join(projectSrcDir, f)).isDirectory();
  });

  projects.forEach(project => {
    const srcFolder = path.join(projectSrcDir, project);
    const slug = project.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const destFolder = path.join(projectDestDir, slug);
    ensureDir(destFolder);

    const srcMdPath = path.join(srcFolder, 'index.md');
    const destMdPath = path.join(destFolder, 'index.md');

    if (fs.existsSync(srcMdPath)) {
      // Check if image exists
      const hasFeaturedPng = fs.existsSync(path.join(srcFolder, 'featured.png'));
      const hasFeaturedJpg = fs.existsSync(path.join(srcFolder, 'featured.jpg'));
      let imagePath = null;

      if (hasFeaturedPng || hasFeaturedJpg) {
        const ext = hasFeaturedPng ? 'png' : 'jpg';
        fs.copyFileSync(
          path.join(srcFolder, `featured.${ext}`),
          path.join(destFolder, `featured.${ext}`)
        );
        imagePath = `./featured.${ext}`;
      }

      processFile(srcMdPath, destMdPath, imagePath);
      console.log(`Migrated project: ${project} -> ${slug}`);
    }
  });
}

function migratePosts() {
  if (!fs.existsSync(postSrcDir)) return;
  ensureDir(postDestDir);

  const posts = fs.readdirSync(postSrcDir).filter(f => {
    return fs.statSync(path.join(postSrcDir, f)).isDirectory();
  });

  posts.forEach(post => {
    const srcFolder = path.join(postSrcDir, post);
    const slug = post.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const destFolder = path.join(postDestDir, slug);
    ensureDir(destFolder);

    const srcMdPath = path.join(srcFolder, 'index.md');
    const destMdPath = path.join(destFolder, 'index.md');

    if (fs.existsSync(srcMdPath)) {
      // Copy all assets
      const files = fs.readdirSync(srcFolder);
      files.forEach(file => {
        if (file !== 'index.md' && fs.statSync(path.join(srcFolder, file)).isFile()) {
          fs.copyFileSync(path.join(srcFolder, file), path.join(destFolder, file));
        }
      });

      processFile(srcMdPath, destMdPath);
      console.log(`Migrated post: ${post} -> ${slug}`);
    }
  });
}

migrateProjects();
migratePosts();
console.log('Migration successfully completed!');
