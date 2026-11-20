# Final Faaja

Live at https://faaja.space (GitHub Pages; the `CNAME` file sets the domain, so keep it). The three module sites stay on github.io, because saved progress is tied to their address.

One static page that links to three revision sites for the December in-class tests at ARU:

- MOD002647 PICS test practice: https://ibdotboss.github.io/pics-quiz/ (test 4 Dec 2026)
- MOD002643 Image Processing cheatsheet: https://ibdotboss.github.io/ip-quiz/ (test 7 Dec 2026)
- MOD004553 AI test practice: https://ibdotboss.github.io/ai-quiz/ (test 7 Dec 2026)

No build at page load. Open `index.html`, or serve the folder. `design.md` has the design and the reasons for it.

## The folder

The "Faaja Modules" folder is React Bits' Folder (https://reactbits.dev/r/Folder-JS-CSS.json), prebuilt into `folder/folder.js` with React 18.3.1. `folder/src/Folder.jsx` and `Folder.css` are the published files with one change, recorded in design.md under Overrides. `entry.jsx` mounts it from the JSON in `index.html`. To rebuild after editing `folder/src/`:

```bash
mkdir -p /tmp/fbuild && cd /tmp/fbuild && npm init -y && npm i react@18.3.1 react-dom@18.3.1 esbuild@0.24.0
cd -; node folder/src/build.mjs /tmp/fbuild && rm -f folder/folder.css
```

Add `?open` to the URL to start the folder open, or `?shot` to skip its intro, for screenshots.

## Re-capture the covers

The covers (used by the comps, not the main page now) are phone screenshots of each site's home page. When a home page changes:

```bash
node ~/.claude/skills/hallmark/scripts/capture.mjs https://ibdotboss.github.io/ip-quiz/ --sizes phone --dark --name ip --out images/raw --wait 1500
node ~/.claude/skills/hallmark/scripts/capture.mjs https://ibdotboss.github.io/ai-quiz/ --sizes phone --name ai --out images/raw --wait 1500
node ~/.claude/skills/hallmark/scripts/capture.mjs https://ibdotboss.github.io/pics-quiz/ --sizes phone --name pics --out images/raw --wait 1500
python -c "from PIL import Image
for n in ['ip','ai','pics']:
    im=Image.open(f'images/raw/{n}-home-phone.png').convert('RGB').crop((0,0,780,975)); im.save(f'images/{n}.webp',quality=80,method=6)
    im.resize((390,488),Image.LANCZOS).save(f'images/{n}-1x.webp',quality=82,method=6)"
```
