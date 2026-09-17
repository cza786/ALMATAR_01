import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src');
const extensions = new Set(['.js', '.jsx', '.css']);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (extensions.has(path.extname(entry.name))) files.push(fullPath);
  }
  return files;
}

const files = await walk(root);
let changed = 0;

for (const file of files) {
  const before = await fs.readFile(file, 'utf8');
  const after = before.replace(/\.(png|jpe?g)(?=[?#'"`),\s]|$)/gi, '.webp');
  if (after !== before) {
    await fs.writeFile(file, after);
    changed += 1;
  }
}

console.log(`Updated WebP references in ${changed} source files.`);
