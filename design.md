# Design: Final Faaja

## Brief

- **Subject.** A front door to three revision sites for Stage's last semester at ARU: MOD002647 PICS, MOD002643 Image Processing and MOD004553 Artificial Intelligence. Each site already has its own look.
- **The name.** Stage's word, spelled "faaja" (confirmed 19 Nov 2026). His gloss: pulling until it breaks. The final lap, worth doing to the maximum. His `Stage-Vault/projects/faja.md` adds two more layers: fa + ja as pull and snap (an archer drawing the bow to its limit before release), and fascia, the band that holds a structure together.
- **Audience.** Stage, and the classmates he shares links with, mostly on a phone.
- **The one job.** Pick a module and open its site in one tap. Second job: see which test comes first.
- **Material.** Module names and codes, site types and counts (READMEs, PICS bank), test formats (READMEs, handoffs), dates (PICS 4 Dec 2026 from Stage; IP and AI 7 Dec 2026 from Canvas via the handoffs), and phone screenshots of the three live home pages.
- **Absent.** No logo, no photos, no PICS weighting, no test times.

## Concept

The final lap. The three modules are three lanes in the order their tests come, and each lane's finish line is its test date. Across the top runs a string, which is both the drawn bowstring and the band holding the three together.

Signature: pull and snap. Drag across the name and it stretches toward 150% width; let go and it springs back. Grab the string and pull it; let go and it twangs straight. Both are extras.

Under the string sits one folder, "Faaja Modules" (React Bits Folder), with a paper for each module. Hover, focus or tap opens it; a paper opens that module's site. Below it, a list gives each module's facts, test date and a link, one tap from the page.

## How it got here

1. Round 1 (`comps/index.html`): A timetable, B three covers, C countdown. Stage chose B. It was built and shipped locally with real screenshots as covers.
2. Stage asked for the name's meaning to shape the page. Round 2 (`comps/round2.html`): D final lap, E drawn bow, F the band. All three have the pull-and-snap name.
3. Stage asked for the libraries to be checked properly. Three Sonnet agents surveyed Fancy Components, React Bits and Aceternity: `Faajaa-Vault/projects/final-faaja/component-survey-2026-11-19.md`. Stage chose D with the name and Fancy's Elastic Line, rebuilt in plain JS.
4. Stage picked React Bits Folder. Comps in `comps/`: `folder.html` (book, glass), `folder-flap.html` (three folders) and `folder-one.html` (one folder). On 20 Nov he chose one "Faaja Modules" folder in the docs demo's look. It replaced the lanes and their screenshots.

## References

- **The three sites,** captured 19 Nov 2026 with hallmark's `capture.mjs` at 390 × 844, 2x, cropped to the top 780 × 975 px. IP in its dark mode.
- **Fancy Components, Elastic Line** (/docs/components/physics/elastic-line): the grab-and-spring curve. Rebuilt as about 25 lines with a damped spring that settles in about 0.6 s. React Bits **Text Pressure** and Fancy **Variable Font Cursor Proximity** gave the variable-width idea. The page uses a drag, not hover proximity, so it works on touch and does not reflow on every mouse move.
- **Champions4Good** (vault inspiration list): sports-club energy, heavy display type on a dark ground.
- **MENSCH** (`awwwards-references-2026-11.md`): one signature interaction tied to the concept, not a pile of effects.
- Rejected from the survey: Macbook Scroll (a drawn device frame), Gravity and the matter-js pieces (they eat link clicks), WebGL backgrounds, cursor trails, scramble text, glow effects.

## Tokens

```css
:root {
  --ground: #1b1d20; --lane: #222428; --line: #f3f1ea; --ink: #f3f1ea; --ink-2: #c3c0b7; --rule: #45484e;
  --gold: #ebc66b; --focus: #ebc66b;
  --font: "Anybody", system-ui, sans-serif;
  --t-s: .9375rem; --t-m: 1.0625rem; --t-l: 1.375rem; --t-date: 1.75rem; --t-num: 2.5rem (4rem from 900px);
  --lane-w: 3px;
}
```

- Lane lines are 3px solid, like track paint.
- Gold means one thing: days left. Radius 0 for the page's own shapes. Spacing is on a 4px base.
- The folder is `#3d8bff`, the React Bits default, chosen by Stage from the docs demo. It is the only blue, and only the folder uses it.

## Type

- **Anybody** (Etcetera Type Co, SIL OFL, Google Fonts), variable width 50–150 and weight 400–900.
- The name rests at 125% width and weight 900, and can be pulled to 150%. Lane numbers are at 150%, dates at 125%, everything else at 92 to 100%.
- Weights in use: 400, 700 and 900.
- None of the three sites' faces (Lato, Atkinson Hyperlegible Next, Archivo) is used.

## Assets

- No images on the page now. `images/{ip,ai,pics}.webp` stay for the comps and for a later link-preview image.
- The folder: `folder/src/Folder.jsx` and `Folder.css` from https://reactbits.dev/r/Folder-JS-CSS.json, bundled with React 18.3.1 into `folder/folder.js` (177 KB, 61 KB gzipped). How to rebuild is in the README.

## Motion

- **The name.** Follows the drag, then snaps back with a 0.55 s overshoot (`cubic-bezier(.3,1.8,.5,1)` on `font-stretch`).
- **The string.** Follows the pointer, then a requestAnimationFrame spring runs only until it settles.
- **The folder.** React Bits' own spring engine: the flap drops, papers rise (stacked on phones, spread from 900px), a short intro when it scrolls into view. It runs only while something moves.
- **Reduced motion.** Both jump straight back and nothing springs.
- **Without JS.** No folder: a plain row of the three module links shows in its place. The rest is complete except for "in N days".
- None of the effects is needed to use the page. The string is `aria-hidden` and the name stays plain text. The folder is a labelled control, and Enter opens it.

## Refused

- Three cards with a stretched name (round 1 B, built and replaced): it carried only the "pull" layer.
- A countdown hero (C). The date in each lane's finish does that job.
- Moving or mirroring the three sites into this repo for now. Shared links would break, and progress saved in the browser stays with the old address.
- Every component the survey rejected (see References).

## Overrides

- **hallmark 20 (stamp):** skipped. It is optional, and the page carries no tool metadata.
- **hallmark 58 (about 80 words a screen):** 108 at 1440. Each lane needs its site type and test format.
- **hallmark 79 and 77:** the linter reads the header as the hero, but the lanes fill the first screen. This is a one-screen launcher.
- **hallmark § Expressive pages:** a pointer-driven effect is lifted for the name and the string, because pull and snap is the concept. Both pause when idle, honour reduced motion and never block a link.
- **One colour scheme (dark).** It is a track at night, so the page commits to it. It passes axe on its own.
- **While the name is pulled at 320px wide,** it runs past the edge and is clipped. It snaps back on release.
- **On a touch screen,** a vertical swipe that starts on the 72px string pulls the string instead of scrolling (`touch-action: pan-x`).
- **hallmark Floor 1 (48, tokens) and 24b (4px scale):** fail inside `folder/src/Folder.css` only. Stage asked for the CSS as published. The page's own CSS passes.
- **One change to the React Bits source** (`Folder.jsx` lines 1847–1849). While open, the folder is `role="group"` rather than a button, because its papers are buttons and axe flagged buttons nested in a button. Closed, it is still a button with `aria-expanded="false"`.
- **React on a one-page launcher.** The folder needs it, so the page now loads 61 KB gzipped. Rewriting its 1,932-line engine by hand was judged riskier than bundling it unchanged.

## Stack

Hosted on GitHub Pages at https://faaja.space (DNS at Vercel; Stage may change the domain after the semester). Canonical and og:url point there. An og:image is still missing.

One static `index.html`, no build at page load. Anybody comes from Google Fonts. The folder is a prebuilt script, `folder/folder.js`. Its source and the build script sit in `folder/src/`.
