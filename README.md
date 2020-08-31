# mannprerak2.github.io

My Portfolio Website

The [source](https://github.com/mannprerak2/mannprerak2.github.io/tree/source) branch contains all the project source code.
The [master](https://github.com/mannprerak2/mannprerak2.github.io/tree/master) branch contains generated code for deploying.

This website is built using Hugo (Academic Theme). Deployment is handled by github actions.
Simply make the changes in source branch and github actions will deploy website on master branch.

## HELP (Quick tips for later, considering you are on `source` branch) -

### Init Repo (setup after cloning)
```bash
git submodule update --init --recursive
```

### Running locally
```bash
hugo server
```

### Deploying (on user gh-pages, master branch) -
Automatically deployed on master branch using github actions.

### Updating Info
- Resume - [.static/files/Resume.pdf](./static/files/Resume.pdf)

- Avatar - [./content/author/mannprerak2/avatar.png](./content/author/mannprerak2/avatar.png)

- Navigation Menu - [./config/_default/menus.toml](./config/_default/menus.toml)

### Change overview
See [./content/home](./content/home) folder.
### Turn on/off widgets
Set `active=false/true` in widgets (in project/content/home folder)

### Adding Posts to blog
Just add a folder with `index.md` and `featured.png` to [./content/post](./content/post)

### Adding Project
Just add a folder with `index.md` and `featured.png` to [./content/project](./content/project)
