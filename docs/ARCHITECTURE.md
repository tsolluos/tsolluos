# tsolluos Architecture

## Purpose

This document describes the high-level technical architecture of tsolluos.

The goal is to keep the project modular, understandable, durable, and simple enough to build gradually.

The architecture should support experimentation without accidentally publishing unfinished work, while preserving a clear path from local development to the live website.

## Core Architecture

The production path is:

```text id="u0f2h1"
Serval
  ↓
Git
  ↓
GitHub
  ↓
Cloudflare
  ↓
www.tsolluos.com
```

Each layer has one primary responsibility.

### Serval

The local development machine.

This is where files are created, edited, tested, and reviewed.

### Git

The local history of the project.

Git records meaningful changes and allows the project to preserve its development history over time.

### GitHub

The remote repository and shared source of project history.

The `tsolluos` GitHub organization owns the main `tsolluos` repository.

### Cloudflare

The deployment and delivery layer.

Cloudflare watches the GitHub repository and automatically deploys production content after changes are pushed to the `main` branch.

### [www.tsolluos.com](http://www.tsolluos.com)

The public production address.

This is the live expression of content that has been deliberately promoted into the production area of the repository.

## Repository Structure

The repository is intentionally divided into areas with different responsibilities.

```text id="ovqwep"
tsolluos/
├── docs/
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

## `workshop/`

The `workshop/` directory is the construction zone.

Work here may be:

* incomplete
* experimental
* educational
* temporary
* frequently changed
* committed to Git
* pushed to GitHub

Being stored in GitHub does not make workshop content part of the live website.

Graphics currently live under:

```text id="oo2b2p"
workshop/graphics/
```

Each graphic should have its own directory.

For example:

```text id="sht61t"
workshop/
└── graphics/
    ├── earth-heart/
    ├── another-graphic/
    └── future-graphic/
```

Workshop code should remain organized around the specific thing being built rather than around temporary experiments or arbitrary file types.

> **Workshop builds it.**

## `public/`

The `public/` directory is the production boundary.

Cloudflare is configured to serve files from:

```text id="6dzy4n"
./public
```

Therefore, content belongs under `public/` only when it is intended to become part of the live website.

This creates a deliberate boundary:

```text id="90quj0"
workshop/
    ↓
review and promotion
    ↓
public/
    ↓
production
```

Moving or recreating finished work under `public/` is a publishing decision, not merely a filesystem operation.

> **Public publishes it.**

## One Repository

tsolluos uses one Git repository.

The repository root is:

```text id="qx6bz9"
~/projects/tsolluos
```

The Git metadata lives at:

```text id="lh9iyo"
~/projects/tsolluos/.git/
```

Directories below the repository root do not create their own Git repositories.

In particular, individual graphics should not use:

```text id="3lav48"
git init
```

inside their own directories.

Git already tracks files throughout the entire `tsolluos` directory tree.

The rule is:

> **One repository. Many components. One history.**

Nested Git repositories should be avoided unless a future architectural requirement clearly justifies them.

## Graphics Architecture

Graphics are developed under:

```text id="do9jv5"
workshop/graphics/
```

Each graphic should have one primary home.

A graphic may contain its own:

* source files
* styles
* JavaScript
* images
* documentation
* learning notes

For example:

```text id="5pxwkp"
workshop/
└── graphics/
    └── earth-heart/
        ├── README.md
        ├── LEARNING_NOTES.md
        └── src/
            ├── index.html
            ├── css/
            │   └── style.css
            └── js/
                └── main.js
```

This structure keeps the graphic self-contained while allowing the main repository to manage its history.

## Promotion to Production

A workshop graphic does not become public simply because it has been committed or pushed.

Publishing requires a deliberate promotion into `public/`.

For example:

```text id="983hqk"
workshop/graphics/earth-heart/
            ↓
      deliberate review
            ↓
public/graphics/earth-heart/
```

The exact production structure may evolve as the site grows, but the boundary should remain clear.

The important architectural rule is:

> **Git tracks the project. `public/` defines the website.**

## Deployment

Cloudflare is configured using:

```text id="2ozb5h"
wrangler.jsonc
```

The important production setting is that static website assets are served from:

```text id="66jjg8"
./public
```

A normal push to the GitHub `main` branch triggers Cloudflare's deployment process automatically.

Workshop-only changes may therefore trigger a deployment process, but if `public/` has not changed, the live website content remains unchanged.

This behavior has been tested and verified.

## Development Boundary

The normal workflow is:

```text id="m2s3fe"
build in workshop
      ↓
inspect
      ↓
commit
      ↓
push
      ↓
GitHub preserves history
```

When something is ready for publication:

```text id="g9x7cb"
review
   ↓
promote into public
   ↓
inspect
   ↓
commit
   ↓
push
   ↓
Cloudflare deploys
   ↓
www.tsolluos.com
```

This separation allows experimentation without turning every experiment into production content.

## Architectural Principles

The architecture should continue to favor:

* one clear home for each file
* one primary responsibility per file or directory
* simple standards before additional frameworks
* explicit boundaries
* small blast radius
* understandable configuration
* meaningful Git history
* reproducible deployment
* minimal hidden dashboard configuration
* documentation stored with the project
* infrastructure that can be understood again after long periods away

## Security Boundaries

Services should receive only the access they need.

Examples include:

* Cloudflare access limited to the required GitHub repository
* DNS and registrar responsibilities kept distinct
* secrets and passwords kept outside Git
* account security such as two-factor authentication handled separately from source code
* production changes inspected before pushing

The repository should never contain passwords, recovery codes, private API tokens, or other secrets.

## Backup Philosophy

GitHub provides an important remote copy of project history, but it should not be treated as the only backup.

The local project directory may also be backed up independently.

This gives the project multiple layers:

```text id="v44cpl"
local working copy
      ↓
Git history
      ↓
GitHub remote
      ↓
independent backup
```

Each layer solves a different problem.

## Long-Term Goal

The architecture should remain boring enough to understand.

New tools, frameworks, services, databases, or deployment layers should be added only when the project has a real need for them.

The preferred direction is:

> **Simple first. Modular always. Complexity only when earned.**
