# Andy Jeffries personal website

This is v3 of my personal website. Version 1 was in Ruby on Rails, waaaaay back in the day. Since then recently (2020) I rewrote it to use Hugo and a theme I found online. But I was never really happy with the theme. I made a design I liked ready to use Tailwind CSS 3.0, but found that getting Tailwind 3 to work with Hugo is surprisingly non-trivial. So seeing how the Tailwind developers really like JS stuff, I decided to give Nuxt.js a go for it. So here is v3 of my site...

## Theory

* A [NuxtJS](https://nuxtjs.org) website (which is a Static Site Generator - SSG - engine for Vue.js)
* Using the [NuxtJS Content module)(https://content.nuxtjs.org) to automatically parse Markdown files for the content
* Styled using [TailwindCSS 3](https://tailwindcss.com/docs/guides/nuxtjs)
* Deployed to [Netlify](https://nuxtjs.org/deployments/netlify/) for free static site hosting
* Good article on building a [Static Nuxt blog using Content](https://gilberttanner.com/blog/creating-a-blog-with-nuxt-content)

## Steps used in building

### Nuxt.js

```bash
$ npx create-nuxt-app andyjeffries
> Project name: andyjeffries
> Programming language: JavaScript
> Package manager: Npm
> UI framework: none
> Nuxt.js modules: Content
> Linting tools: none
> Testing framework: none
> Rendering mode: Universal (SSR/SSG)
> Deployment target: Server
> Development tools: jsconfig.json
> GitHub username: andyjeffries
> Version control system: Git
```

###

## Running it locally

```bash
$ npm install
$ npm run dev
```

## Deploying to servers

Just committing it and pushing it back will automatically deploy it to Netlify, but if you want to build and serve in a production-like mode you can do:

```bash
$ npm install
$ npm run build # Create static files
$ npm run start # Start a simple webserver serving them
```
