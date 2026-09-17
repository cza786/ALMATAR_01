import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public');
const extensions = new Set(['.png', '.jpg', '.jpeg']);

async function getFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await getFiles(fullPath));
    else if (extensions.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }

  return files;
}

const files = await getFiles(root);
let originalBytes = 0;
let webpBytes = 0;

for (const input of files) {
  const output = `${input.slice(0, -path.extname(input).length)}.webp`;
  const [source, result] = await Promise.all([
    fs.stat(input),
    sharp(input)
      .webp({ quality: 80, effort: 5, smartSubsample: true })
      .toFile(output),
  ]);

  originalBytes += source.size;
  webpBytes += result.size;
  console.log(`${path.relative(root, input)} -> ${path.relative(root, output)} (${source.size} -> ${result.size})`);
}

const saved = originalBytes ? ((1 - webpBytes / originalBytes) * 100).toFixed(1) : '0.0';
console.log(`Converted ${files.length} images: ${(originalBytes / 1024 / 1024).toFixed(1)} MB -> ${(webpBytes / 1024 / 1024).toFixed(1)} MB (${saved}% smaller)`);
