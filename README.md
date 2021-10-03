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
- Resume - [File on drive](https://drive.google.com/file/d/1edmxnXqdmr_JUAWxiZZzL3xmv004IRp2/view?usp=sharing)

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


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
