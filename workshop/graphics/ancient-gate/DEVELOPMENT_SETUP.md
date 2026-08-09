# Ancient Gate Development Setup

This document explains how to open and run the **Ancient Gate** development environment locally.

The goal is to make it possible to return to this project later without needing the original ChatGPT conversation to remember how the development environment works.

---

## Project Location

The Ancient Gate project lives at:

```text
~/projects/tsolluos/workshop/graphics/ancient-gate
```

Its browser-ready source files live in:

```text
~/projects/tsolluos/workshop/graphics/ancient-gate/src
```

---

## Open the TSOLLUOS Project in VS Code

From a terminal:

```bash
cd ~/projects/tsolluos
code .
```

Opening VS Code from the main `tsolluos` directory makes the complete project structure available while working.

---

## Terminal 1: Git

Keep one terminal available for Git work.

From the main repository:

```bash
cd ~/projects/tsolluos
```

Useful commands include:

```bash
git status
git diff
git diff --check
git add <files>
git commit -m "Describe the accomplishment"
git log --oneline
```

The normal workflow is:

```text
Build
  ↓
Test
  ↓
Inspect
  ↓
Commit
  ↓
Continue
```

Inspect changes before committing them.

---

## Terminal 2: Local Development Server

Use a second terminal for the Ancient Gate web server.

Run:

```bash
cd ~/projects/tsolluos/workshop/graphics/ancient-gate/src
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

in a web browser.

Keep this terminal running while developing.

To stop the server:

```text
Ctrl+C
```

---

## Production Safety

Ancient Gate is developed inside:

```text
workshop/graphics/ancient-gate/
```

Workshop files are separate from the live production website.

The production website is served from:

```text
~/projects/tsolluos/public/
```

Changes made only inside the Workshop do not become part of the live website.

A Workshop graphic must be deliberately promoted or integrated into `public/` before it becomes production code.

Before promoting anything to production, inspect exactly which files are changing.

---

## GitHub

The `tsolluos` repository uses the `main` branch.

Before beginning work:

```bash
git status
```

A clean synchronized starting point should normally report:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Workshop commits may be pushed to GitHub for backup and version history without changing the live website, provided no production files under `public/` were changed.

---

## Development Principle

Make one meaningful change at a time.

Start from a known-good version.

Then:

```text
Known Good
    ↓
Small Change
    ↓
Test
    ↓
PASS ────── FAIL
 ↓            ↓
Commit      Roll Back
```

The source code and documentation should remain understandable without requiring the original development conversation.
