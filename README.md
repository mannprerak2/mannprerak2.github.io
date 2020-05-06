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

### Deploying (on user gh-pages, master branch) -
```bash
./deploy.sh
git add .
git commit -m "built"
git push
```

### Updating Info
- Resume - [./project/static/files/Resume.pdf](./project/static/files/Resume.pdf)

- Avatar - [./project/content/author/mannprerak2/avatar.png](./project/content/author/mannprerak2/avatar.png)

- Navigation Menu - [./project/config/_default/menus.toml](./project/config/_default/menus.toml)

### Turn on/off widgets
Set `active=false/true` in widgets (in project/content/home folder)
