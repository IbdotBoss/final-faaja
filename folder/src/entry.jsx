// Mounts React Bits' Folder (Folder.jsx and Folder.css, unchanged from https://reactbits.dev/r/Folder-JS-CSS.json)
// into each [data-folder] slot on index.html (and the comps). Built once with build.mjs into ../folder.js.
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Folder from './Folder.jsx';

const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const shot = /[?&](open|shot)/.test(location.search); // screenshots: skip the scroll-triggered intro

function Slot({ card, room, url, phoneSize, label, items, color, mode = 'book', variant = 'glass', size = 0.9, paperColor = '#f3f1ea', layout = 'auto' }) {
  // 'spread' fans papers to about 2.3x the folder's width, too wide for a phone; 'stack' keeps them inside it
  // never wider than the space it sits in (the folder is 224px wide at size 1, 180px in book mode)
  const want = phoneSize && window.innerWidth < 900 ? phoneSize : size; // smaller on phones so the links stay near the top
  const scale = Math.min(want, room / (mode === 'book' ? 180 : 224));
  const fit = layout === 'auto' ? (window.innerWidth < 900 ? 'stack' : 'spread') : layout;
  const [open, setOpen] = useState(/[?&]open/.test(location.search)); // ?open starts them open, for screenshots
  // Open on hover or keyboard focus anywhere in the card, so the folder never stands between you and the link.
  // On touch, a tap on the folder opens it (the source's own toggle); the link below is always one tap.
  card.onpointerenter = e => { if (e.pointerType === 'mouse') setOpen(true); };
  card.onpointerleave = e => { if (e.pointerType === 'mouse') setOpen(false); };
  card.onfocusin = () => setOpen(true);
  card.onfocusout = e => { if (!card.contains(e.relatedTarget)) setOpen(false); };
  return (
    <Folder
      items={items}
      label={label}
      mode={mode}
      variant={variant}
      theme="dark"
      color={color}
      paperColor={paperColor}
      size={scale}
      layout={fit}
      open={open}
      onOpenChange={setOpen}
      onItemClick={item => window.location.assign((item && item.url) || url)}
      zoomOnClick={false}
      draggable={false}
      intro={!still && !shot}
      closeOnOutsideClick
    />
  );
}

// A paper with "lines" shows its title and an outline of what the site holds.
const outline = item =>
  item.lines
    ? { ...item, content: (
        <div className="ff-paper">
          <span className="ff-paper-title">{item.title}</span>
          <ul>{item.lines.map(line => <li key={line}>{line}</li>)}</ul>
        </div>
      ) }
    : item;

document.querySelectorAll('[data-folder]').forEach(slot => {
  const data = JSON.parse(slot.querySelector('script[type="application/json"]').textContent);
  data.items = data.items.map(outline);
  const card = slot.closest('.card') || slot;
  createRoot(slot).render(<Slot card={card} room={slot.clientWidth || 9999} {...data} />);
});
