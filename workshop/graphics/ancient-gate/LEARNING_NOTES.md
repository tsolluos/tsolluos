# Ancient Gate Learning Notes

This file records lessons discovered while building **Ancient Gate**.

These notes are based on actual development experience rather than plans for future features.

The purpose is to preserve not only what worked, but what we learned while making it work.

---

## Start With a Version That Cannot Fail

Ancient Gate began with the simplest possible browser test:

> A completely black screen.

Before adding fog, eyes, animation, interaction, or artwork, we first proved that the HTML and CSS loaded correctly.

This created a known-good starting point.

The development pattern is:

```text
Known Good
    ↓
Small Change
    ↓
Test
    ↓
Commit
```

When something later breaks, the problem is easier to locate because only one meaningful idea changed.

---

## CSS Can Create Atmosphere Without Images

The first fog experiment used CSS `radial-gradient()` rather than an image.

The initial gradient produced something that looked too much like a flashlight shining from the center of the screen.

Instead of replacing the technique, we changed the gradient.

Using multiple overlapping radial gradients spread the light across the stage and produced a softer, less uniform fog effect.

Lesson:

> A technique can be correct even when its first visual result is wrong.

Adjust the smallest thing first.

---

## Visual Judgment Matters

The original fog opacity was stronger than desired.

The values were manually reduced until the effect became softer.

Later, the fog movement was deliberately exaggerated to prove that the CSS animation was actually working.

Once the movement was obvious, it was reduced to a visually appropriate amount.

This established a useful testing method:

> When a subtle effect is difficult to verify, temporarily exaggerate it.

Prove that the mechanism works first.

Then tune the appearance.

---

## CSS Keyframes Describe Important Moments

The fog introduced CSS `@keyframes`.

Rather than describing every frame of movement, we define important positions and allow the browser to calculate the frames between them.

For the fog, `transform: translate()` moves the entire fog layer.

Negative and positive values move it across horizontal and vertical directions.

The same `@keyframes` idea was later reused for blinking eyes.

Lesson:

> The same animation mechanism can produce very different behaviors depending on which property changes.

---

## SVG Coordinates

The eyes introduced basic SVG coordinate concepts.

An ellipse uses:

```text
cx → horizontal center
cy → vertical center
rx → horizontal radius
ry → vertical radius
```

Changing `cx` moves an ellipse left or right.

Changing `cy` moves it up or down.

Changing `rx` changes its width.

Changing `ry` changes its height.

A circle only needs one radius:

```text
r → radius
```

because its horizontal and vertical radii are equal.

---

## Complex Graphics Can Begin With Simple Shapes

The first eyes were nothing more than two white SVG ellipses.

They looked more like sideways eggs than eyes.

Adding one black SVG circle inside each ellipse immediately made the shapes recognizable as eyes.

Lesson:

> Do not draw detail before proving the basic shapes.

Simple geometry can create surprisingly recognizable graphics.

---

## SVG and CSS Work Together

SVG defines the drawing.

CSS controls how that drawing looks and behaves.

For the current eyes:

```text
SVG ellipse → eye shape
SVG circle  → pupil shape

CSS         → color
CSS         → position
CSS         → animation
```

This separation allows the SVG to remain understandable while CSS handles appearance and movement.

---

## Blinking Without JavaScript

The first blinking animation required no JavaScript.

CSS `@keyframes` changes the vertical scale of each eye using `scaleY()`.

Most of the animation cycle leaves the eye fully open.

For a brief moment, the vertical scale becomes very small and then returns to normal.

Visually, this creates a blink.

Lesson:

> Do not introduce JavaScript until JavaScript has a problem to solve.

HTML, SVG, and CSS are currently sufficient for the behaviors we have built.

---

## The Screen Gets the Vote

Several design decisions were made by testing the actual result in the browser rather than assuming numerical values were correct.

Examples include:

* reducing fog opacity,
* spreading the fog with multiple gradients,
* exaggerating fog movement to verify the animation,
* reducing that movement after verification,
* accepting the current blink because it looks natural even though the pupils themselves are not animated.

Lesson:

> Code can tell us whether something works technically. Looking at the result tells us whether it works visually.

For graphics work, both tests matter.

---

## Current Learning Checkpoint

Ancient Gate currently demonstrates:

```text
HTML
    ↓
page structure

SVG
    ↓
simple vector shapes

CSS
    ↓
appearance
positioning
gradients
transforms
animation

Git
    ↓
known-good checkpoints
```

JavaScript has not yet been required.

That is not a missing feature.

It is evidence that the current problems have been solved with simpler tools.
