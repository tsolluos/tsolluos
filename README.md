# tsolluos

**A personal creative and technical project for learning, remembering, and exploring.**

tsolluos is a long-term personal project combining study, software development, visual design, animation, and experimentation.

The project is primarily a personal breadcrumb trail: a place to preserve learning, explore ideas, and turn complex concepts into simple, memorable experiences.

The guiding question is:

> **What is the simplest truthful way to show this concept or lesson?**

tsolluos is not intended to replace teachers, scripture, established commentary, or other primary sources. Where traditional teachings are explored, the project should point toward qualified sources and clearly distinguish those teachings from personal interpretation and reflection.

## Project Structure

```text
tsolluos/
├── docs/
│   ├── PROJECT_CHARTER.md
│   ├── ARCHITECTURE.md
│   └── DEVELOPMENT_WORKFLOW.md
│
├── public/
│   └── index.html
│
├── workshop/
│   └── graphics/
│
├── .gitignore
├── README.md
└── wrangler.jsonc
```

### `docs/`

Project-level documentation.

* `PROJECT_CHARTER.md` defines the purpose, principles, and boundaries of tsolluos.
* `ARCHITECTURE.md` documents how the project is organized and deployed.
* `DEVELOPMENT_WORKFLOW.md` documents the normal Git and development workflow.

### `workshop/`

The construction zone.

Ideas that have already been explored conceptually can be implemented, tested, changed, broken, rebuilt, and documented here without making them part of the production website.

Graphics development currently lives under:

```text
workshop/graphics/
```

Individual graphics should maintain their own documentation where appropriate.

### `public/`

The production boundary.

Files under `public/` are the files intended to be served by the live website.

Workshop work does **not** become production content merely because it is committed to Git or pushed to GitHub. Promotion into `public/` is a deliberate step.

> **Workshop builds it. Public publishes it.**

## Development Model

tsolluos uses one Git repository for the entire project.

Individual graphics and other project components do not create their own nested Git repositories. Git history is maintained from the main `tsolluos` repository.

The normal development path is:

```text
Local development
       ↓
Git
       ↓
GitHub
       ↓
Cloudflare
       ↓
www.tsolluos.com
```

Only production content under `public/` is served by the website.

For the complete working process, see:

`docs/DEVELOPMENT_WORKFLOW.md`

## Project Principles

The project favors:

* simplicity over unnecessary complexity
* standards over unnecessary frameworks
* small, understandable steps
* source code that teaches
* clear documentation
* Git-friendly project organization
* strong visual communication
* gradual understanding
* faithful treatment of source material
* deliberate separation between experimentation and production

The project should remain understandable after weeks, months, or years away from the code.

For the complete purpose and guiding principles, see:

`docs/PROJECT_CHARTER.md`

## Architecture

The project architecture intentionally separates development work from production content.

For the architectural model, repository boundaries, and deployment design, see:

`docs/ARCHITECTURE.md`

---

**The path begins here.**
