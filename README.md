# mannprerak2.github.io

My Portfolio Website

The [Project](./project) folder contains all the revelant source code.

This website is built using Hugo (Academic Theme)


## HELP (Quick tips for later) -

### Init Repo (setup after cloning)
```bash
cd project
git submodule update --init --recursive
```

### Running locally
```bash
cd project
hugo server
```

### Deploying (on user gh-pages, master branch) -
```bash
# Hugo must be installed and on Path
./deploy.sh
git add .
git commit -m "built"
git push
```

### Updating Info
- Resume - [./project/static/files/Resume.pdf](./project/static/files/Resume.pdf)

- Avatar - [./project/content/author/mannprerak2/avatar.png](./project/content/author/mannprerak2/avatar.png)

- Navigation Menu - [./project/config/_default/menus.toml](./project/config/_default/menus.toml)

### Change overview
See [./project/content/home](./project/content/home) folder.
### Turn on/off widgets
Set `active=false/true` in widgets (in project/content/home folder)

### Adding Posts to blog
Just add a folder with `index.md` and `featured.png` to [./project/content/post](./project/content/post)

### Adding Project
Just add a folder with `index.md` and `featured.png` to [./project/content/project](./project/content/project)
