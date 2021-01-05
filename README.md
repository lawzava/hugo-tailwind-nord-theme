# Hugo Tailwind Nord Theme

## Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. 
This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

Make sure to use a minimum Hugo version of v0.80.0 and above.

## Usage directly within a Hugo repo as a theme package

- start a new Hugo site

```bash
hugo new site mysite
```

- switch into the theme folder and clone this repo

```bash
cd mysite/themes
git clone https://github.com/lawzava/hugo-tailwind-nord-theme
```

- switch into the newly created theme folder and install the node packages

```bash
cd hugo-tailwind-nord-theme
rm -rf .git
npm install
```

- edit the `config.toml` file in `mysite/` to reflect the hugo-tailwind-nord-theme

```toml
# in config.toml
theme = "hugo-tailwind-nord-theme" 
```

- switch to the root of the new-site repo and start a server to view the index site

```bash
cd mysite
hugo server --disableFastRender
```

Your content should go into `mysite/content`, the development of the site layout is done within `mysite/themes/hugo-tailwind-nord-theme/layout`.

## Reference

Documentation for Hugo's [PostCSS setup](https://gohugo.io/hugo-pipes/postprocess/).

Documentation for [Tailwind CSS setup of calling PurgeCSS manually](https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss-manually).

Color scheme for [Nord Theme](https://nordtheme.com).

Theme was inspired by [https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter)
