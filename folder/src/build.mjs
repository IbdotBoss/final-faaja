// One-off build: node build.mjs <dir containing node_modules with react@18.3.1, react-dom@18.3.1, esbuild>
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const here = path.dirname(fileURLToPath(import.meta.url));
const mods = path.join(process.argv[2], 'node_modules');
const esbuild = createRequire(path.join(mods, 'x.js'))('esbuild');
await esbuild.build({
  entryPoints: [path.join(here, 'entry.jsx')],
  bundle: true, minify: true, format: 'iife', jsx: 'automatic', target: 'es2020',
  nodePaths: [mods], define: { 'process.env.NODE_ENV': '"production"' },
  outfile: path.join(here, '..', 'folder.js'),
  legalComments: 'none', logLevel: 'info'
});
