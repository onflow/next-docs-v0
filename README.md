# NextJS Docs Site Testbed

Experimenting with NextJS as a simpler alternative to Gatsby.

### Rationale
The current Gatsby site was bulit on top of an existing Gatsby theme and has inhereted much that is now hard to refactor or reconfigure. This rework is an attempt to acheve greater customizability, and faster iteration cycles, less code and an overall simpler design for the site, without sacrificing any features obtained by the previous Gatsby-based site. 

**✅ Less code/config**
- Current (Gatsby) site configuration is spread between the main site config and the 'theme config', with no clear seperation. 

**✅ Faster Builds**
- Current (Gatsby) build/refresh takes ~45 seconds when config is changed. The config file specifies the menus and content structure so is changed often, resulting in very slow iteration. This site build.refres/ cycle completes in ~2 seconds.

**✅ Better CSS**
- Current (Gatsby) theme css is difficult to customize and uses outdatet 'BEM' styles css. This site uses the powerful Tailwind CSS utilities.


### Gatsby Feature-Partity Checklist
- [x] Render Markdown/MDX
- [x] Import Markdown MDX content from Github
- [x] Auto-link headers
- [x] Static site generation
- [ ] Breadcrumbs
- [ ] Dynamic menus
- [ ] Algolia
- [ ] Analytics
- [ ] GraphQL API (Not needed)

### Additional Features
- [x] Dark Mode
- [x] Next Images (optimized images)
- [x] Responsive typography
- [x] Customizable theme
- [x] Mobile-first PWA 
- [ ] Prism syntax highlighting for Cadence
- [ ] Offline support
