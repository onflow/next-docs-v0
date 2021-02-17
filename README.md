# NextJS Docs Site Testbed

Experimenting with NextJS as a simpler alternative to Gatsby.

## Up And Running

1) Install deps: `yarn`
2) `export GITHUB_ACCESS_TOKEN=[your token]`
3) `yarn get-content:cadence`
4) `yarn dev`

You can now visit a page from the Cadence Github repo, try: `http://localhost:3000/cadence/language/accounts`

### Rationale
The current Gatsby site was bulit on top of an existing Gatsby theme and has inhereted much that is now hard to refactor or reconfigure. This rework is an attempt to achieve greater customizability, and faster iteration cycles, less code and an overall simpler design for the site, without sacrificing any features obtained by the previous Gatsby-based site. 

**Less code/config**
- Current (Gatsby) site configuration is spread between the main site config and the 'theme config', with no clear seperation. 

**Faster Builds**
- Current (Gatsby) build/refresh takes ~45 seconds when config is changed. The config file specifies the menus and content structure so is changed often, resulting in very slow iteration. This site build.refres/ cycle completes in ~2 seconds.

**Better CSS**
- Current (Gatsby) theme css is difficult to customize and uses outdatet 'BEM' styles css. This site uses the powerful Tailwind CSS utilities.


### Gatsby Feature-Partity Checklist
- [x] Render Markdown/MDX
- [x] Import Markdown/MDX content from Github
- [x] Auto-link headers
- [x] Static site generation
- [ ] Breadcrumbs
- [ ] Dynamic menus
- [ ] Algolia
- [ ] Analytics
- [ ] GraphQL API (Not needed)

### Additional Features
- [ ] Docs versioning
- [ ] Bi-Directional Github updates
- [ ] Dynamic SEO images
- [x] Dark Mode
- [x] Next Images (optimized images)
- [x] Responsive typography
- [x] Customizable theme
- [x] Mobile-first PWA 
- [ ] Prism syntax highlighting for Cadence
- [ ] Offline support

## Prism development
This repo contains a link to PrismJS (Temporarily while we develop a syntax highlighter).

To develop using Prism: 
1) `git submodule update --init --recursive`
2) Add the following to `components.json` in `lib/prismjs` under `"languages"`: 
```
"cadence": {
  "title": "Cadence",
  "option": "default",
  "owner": "onflow"
},
```
3) Add `lib/prism-cadence.js` to `lib/prismjs/components`
4) `cd lib/prismjs && npm i && npm build`
5) `npm run start`

The syntax highlighting definition can be found here: `lib/prismjs/components/prism-cadence.js`

Load `http://localhost:5000/test.html` and select `Cadence` as the highlighting option. 

Update the definition file and refresh the browser to see the result.
