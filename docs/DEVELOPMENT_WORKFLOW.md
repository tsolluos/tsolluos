# tsolluos Development Workflow

## Purpose

This document describes the normal development workflow for tsolluos.

The goal is to make changes deliberately, understand what Git is recording, preserve meaningful project history, and allow the automated deployment pipeline to do its job.

The basic rhythm is:

> **Build → Test → Inspect → Commit → Continue**

For production changes, add one final step:

> **Build → Test → Inspect → Commit → Push → Verify**

## Start a Work Session

Move to the repository:

```bash id="of6hnz"
cd ~/projects/tsolluos
```

Check the current Git state:

```bash id="wptu62"
git status
```

The preferred starting condition is:

```text id="70nxee"
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

This establishes a known-good starting point before making changes.

## Choose the Correct Work Area

Before creating or editing files, decide whether the work belongs in the workshop or production.

### Workshop Work

Unfinished, experimental, or educational work belongs under:

```text id="hjdzv4"
workshop/
```

Graphics are developed under:

```text id="os3vne"
workshop/graphics/
```

Workshop files may be committed and pushed to GitHub without becoming live website content.

### Production Work

Files intended for the live website belong under:

```text id="zph2dx"
public/
```

Changes under `public/` should be treated as production-affecting changes.

A push to `main` may automatically deploy them to the live website.

## Make One Understandable Change

Prefer small changes that can be understood and tested independently.

Avoid combining unrelated work merely because it happened during the same editing session.

A useful development pattern is:

```text id="nt7e0p"
known-good state
      ↓
one small change
      ↓
test
      ↓
inspect
      ↓
commit
```

If something breaks, the cause is easier to find because the previous state was known to work.

## Test Locally

Test work before committing whenever practical.

For a simple static graphic or webpage, a local Python web server may be used.

From the appropriate source directory:

```bash id="xxy8gq"
python3 -m http.server 8000
```

Then open the local site in a browser.

Testing should answer a simple question:

> **Does the change do what we intended without breaking what already worked?**

Stop the local server with:

```text id="ys7zlx"
Ctrl+C
```

when finished.

## Inspect with Git

After making changes:

```bash id="yr4v1m"
git status
```

This shows which files Git sees as modified, deleted, staged, or untracked.

Then inspect the actual changes:

```bash id="fxm9nc"
git diff
```

Do not treat `git diff` as ceremonial paperwork.

Read it.

The goal is to understand what will eventually become part of the project's history.

## Stage Deliberately

Stage the specific files that belong together.

For example:

```bash id="wxv43d"
git add workshop/graphics/example/src/index.html
```

Multiple related files may be staged together:

```bash id="qybzw7"
git add file1 file2 file3
```

When every current change belongs to the same logical commit, this may also be appropriate:

```bash id="pru8am"
git add .
```

Use `git add .` deliberately rather than automatically.

## Verify the Staging Area

After staging:

```bash id="w4m6zr"
git status
```

Then inspect exactly what is staged:

```bash id="ez8j8f"
git diff --cached
```

This is the final inspection before creating the commit.

The question is:

> **Is this exactly the change I want Git to remember?**

## Commit

Create a commit with a short message describing the completed change.

For example:

```bash id="y6f77f"
git commit -m "Add initial example graphic"
```

Commit messages should describe meaningful project changes rather than editing mechanics.

Prefer:

```text id="0gy0o1"
Add Earth Heart orbit guide
```

over:

```text id="c9uqsi"
Changed some SVG stuff
```

A commit should read like a small chapter title in the history of the project.

## Verify After the Commit

Run:

```bash id="0z1b6j"
git status
```

A clean local commit that has not yet been pushed may show:

```text id="m2xf8v"
Your branch is ahead of 'origin/main' by 1 commit.

nothing to commit, working tree clean
```

This means Git has safely recorded the work locally, but GitHub does not have that commit yet.

## Push to GitHub

When the commit has been reviewed and is ready to become part of the remote project history:

```bash id="sxvzbw"
git push
```

Then verify:

```bash id="gzdkaw"
git status
```

The desired result is:

```text id="exl5st"
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

## Understand What a Push Means

A push performs two important jobs.

First, it sends the new Git history to GitHub.

Second, because the repository is connected to Cloudflare, a push to `main` may trigger the automated deployment pipeline.

The pipeline is:

```text id="g93e30"
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

However, GitHub repository content and live website content are not the same thing.

Cloudflare serves the production assets under:

```text id="6lcm7n"
public/
```

Therefore:

```text id="c1mbwy"
workshop change
      ↓
git push
      ↓
GitHub updated
      ↓
public unchanged
      ↓
live content unchanged
```

A production change follows:

```text id="7r28gd"
public change
      ↓
git push
      ↓
GitHub updated
      ↓
Cloudflare deploys
      ↓
live website updated
```

## Verify Production Changes

When `public/` changes, verify the deployed result after pushing.

Open:

```text id="svnyh6"
https://www.tsolluos.com/
```

Confirm that the intended change appears and that existing functionality still works.

If an already-open browser tab displays old content immediately after deployment, refresh it or open the site in a new tab before assuming deployment failed.

Do not manually redeploy through the Cloudflare dashboard as part of the normal workflow.

> **Develop locally. Let the pipeline deploy.**

## Creating a New Graphic

Create each new graphic under:

```text id="z95pku"
workshop/graphics/
```

For example:

```text id="c0vtdj"
workshop/
└── graphics/
    └── example-graphic/
        ├── README.md
        ├── LEARNING_NOTES.md
        └── src/
            ├── index.html
            ├── css/
            │   └── style.css
            └── js/
                └── main.js
```

The exact files may vary according to what the graphic needs.

Do not create another Git repository inside the graphic.

In particular, do not run:

```bash id="2pce4s"
git init
```

inside individual graphic directories.

The existing `tsolluos` repository already tracks files throughout the project.

> **One repository. Many graphics. One history.**

## Publishing Workshop Work

Workshop content should become production content only through a deliberate publishing decision.

Conceptually:

```text id="sx5ryu"
workshop/graphics/example-graphic/
              ↓
         test and review
              ↓
      deliberate promotion
              ↓
public/graphics/example-graphic/
```

Publishing should be its own understandable project change.

After promotion:

1. test the production structure
2. inspect with `git status`
3. inspect with `git diff`
4. stage deliberately
5. inspect with `git diff --cached`
6. commit
7. push
8. verify the live website

## Git and Empty Directories

Git tracks files and their paths, not empty directories by themselves.

Creating:

```text id="znzizn"
workshop/graphics/new-graphic/
```

does not cause Git to track that directory while it remains empty.

Once files exist inside it, Git can track those files and their directory paths.

This is normal Git behavior.

## Moving or Migrating Work

When moving important work into the repository:

1. preserve the known-good original
2. copy rather than delete first
3. compare the source and destination
4. inspect the new files
5. stage them
6. inspect the staged change
7. commit
8. push
9. verify
10. retire the old copy only after the migration is proven

For directory comparisons, standard Unix tools such as `diff` can help verify that copies are identical.

Silence from a successful `diff` comparison means no differences were found.

## Secrets

Never commit:

* passwords
* account recovery codes
* API secrets
* private tokens
* authentication credentials
* other sensitive account information

Credentials belong in an appropriate secure system outside the Git repository.

## Normal Working Checklist

For most work, the practical workflow is:

```text id="vbtt9j"
1. git status
2. make one understandable change
3. test
4. git status
5. git diff
6. git add <files>
7. git status
8. git diff --cached
9. git commit -m "Describe the change"
10. git status
11. git push
12. git status
13. verify production if public/ changed
```

Not every tiny task requires blindly typing every command.

The purpose of the sequence is to maintain awareness of:

* what changed
* what is staged
* what Git will remember
* what has reached GitHub
* what may reach production

## Guiding Rules

> **Build → Test → Inspect → Commit → Continue**

> **Workshop builds it. Public publishes it.**

> **Develop locally. Let the pipeline deploy.**

> **One repository. Many components. One history.**

And when uncertain:

> **`git status` is our friend.**
