# Ancient Gate

**Ancient Gate** is the opening visual experience for **tsolluos**.

It begins in darkness and gradually invites the visitor to discover the environment through observation and interaction.

The guiding principle is:

> **Wonder before explanation.**

The experience should not tell the visitor what to think or immediately explain what to do.

Instead, the visitor discovers the interaction language by looking, moving, and eventually using their own hands.

---

## Experience

The planned progression is:

```text
Darkness
    ↓
Fog
    ↓
Eyes
    ↓
Look Around
    ↓
Discover Feet
    ↓
Discover Hands
    ↓
Eyes Disappear
    ↓
Fog Lifts
    ↓
Ancient Gate Appears
    ↓
Approach Gate
    ↓
Discover tsolluos
    ↓
Discover the "ll" Handles
    ↓
Open Gate
    ↓
Reveal "lost soul"
    ↓
Pass Through
```

Version 1 ends after the visitor successfully opens and passes through the gate.

---

## Interaction Language

Ancient Gate introduces a simple interaction vocabulary:

```text
Eyes   → observe
Feet   → move
Hands  → interact
```

The visitor does not control a separate character.

The experience eventually becomes first person:

> **The visitor is the character.**

---

## Development Approach

Ancient Gate is built progressively from the smallest working version.

The current technologies are intentionally simple:

```text
HTML  → structure
SVG   → drawing
CSS   → appearance and animation
```

JavaScript exists in the project structure but should only be introduced when an interaction requires behavior that is better handled by JavaScript.

Do not add technology merely because it may be useful later.

---

## Development Rule

Every new visual or behavior begins with a version that cannot fail:

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

One meaningful change at a time.

---

## Current State

The current working version includes:

* a black full-screen stage,
* layered atmospheric fog,
* slow CSS fog movement,
* two SVG eyes,
* pupils,
* CSS blinking animation.

The eyes are currently centered and looking forward.

Movement of the pupils and the larger **LOOK AROUND** sequence have not yet been implemented.

---

## Project Structure

```text
ancient-gate/
├── DEVELOPMENT_SETUP.md
├── LEARNING_NOTES.md
├── README.md
├── docs/
└── src/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── images/
    └── js/
        └── main.js
```

---

## Workshop Principle

Ancient Gate is not intended to explain philosophy, religion, or hidden meanings.

It is an experience built around discovery.

The graphic should remain:

* simple,
* understandable,
* visually clear,
* progressively developed,
* well documented,
* reversible through Git.

When several implementations are possible, return to the governing question:

> **What is the simplest truthful way to show this concept or lesson?**
