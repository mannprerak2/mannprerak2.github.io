# Prerak Mann | Portfolio & CV

A modern, fast, responsive developer portfolio and CV website built with **Astro** and **Tailwind CSS**. 

Originally migrated from Hugo (Academic Theme) to Astro, it features a single source of truth for resume listings, markdown-driven content collections for blog posts/projects, a unified timeline viewer, and dynamic client-side filtering.

---

## 🚀 Key Features

* **Single Source of Truth**: All profile info, education, work experience, technical arsenal, and achievements are configured in a single file ([src/data/cv.yaml](file:///Users/prerakmann/repos/mannprerak2.github.io/src/data/cv.yaml)).
* **Astro Content Collections**: Projects ([src/content/projects/](file:///Users/prerakmann/repos/mannprerak2.github.io/src/content/projects)) and blog posts ([src/content/posts/](file:///Users/prerakmann/repos/mannprerak2.github.io/src/content/posts)) are managed as schema-validated Markdown files.
* **Unified Timeline Component**: Automatically groups experience, education, and achievements by organization, calculates durations in years and months dynamically, and displays split colors for dates vs. duration badges.
* **Homepage Projects Integration**: Interactive project list integrated directly on the home page (`#projects` anchor) with real-time text search and category filter tabs (**Featured**, **All**, **Android**, **Web**, **Other**), displaying **Featured** projects by default.
* **Modern Styling & Dark Mode**: Built with Tailwind CSS, utilizing a premium dark-mode-first aesthetic, clean typography, custom scrollbars, and smooth interactive transitions.
* **Image Optimization**: Astro's optimized image components are used for automatic format conversion (WebP), responsive sizing, caching, and full support for animated GIFs.
* **GitHub Actions Deployment**: Automatically builds and deploys static assets to your GitHub Pages branch.

---

## 🛠️ Local Development & Operations

### 1. Prerequisites
Ensure you have **Node.js** (v18+) installed.

### 2. Setup
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Running Locally
Launch the dev server to edit code and see changes reload in real time:
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Compiling a Production Build
Compile optimized, production-ready static assets into the `dist/` directory:
```bash
npm run build
```

---

## 📝 How to Manage Content

### Updating CV / Profile Details
Simply edit the core data file:
* File location: [src/data/cv.yaml](file:///Users/prerakmann/repos/mannprerak2.github.io/src/data/cv.yaml)
* Modify technical skills, education timelines, work descriptions, and links directly. Markdown formatting is supported inside description fields.

### Adding or Modifying Projects
Projects are located under the `src/content/projects/` directory.
1. Create a folder named after your project (e.g. `my-awesome-app/`).
2. Add an `index.md` file inside that folder.
3. Configure the frontmatter at the top:
   ```yaml
   ---
   title: "My Awesome App"
   summary: "A short, descriptive summary of the project."
   tags:
     - Android
     - Web
   date: "2026-05-31"
   featured: "./featured.png"       # Cover image (Optional)
   featuredProject: true             # Set to true to highlight in the Featured filter
   external_link: "https://github.com/username/project" # External link (Optional)
   ---
   ```

### Adding Blog Posts
Blog posts are located under the `src/content/posts/` directory.
1. Create a folder (e.g. `new-blog-post/`) containing an `index.md` file.
2. Configure the frontmatter at the top:
   ```yaml
   ---
   title: "My Blog Post Title"
   date: "2026-05-31"
   summary: "Short summary of the article."
   tags:
     - GSoC
     - Dart
   ---
   ```
3. Write your article content in Markdown below the frontmatter header.
