const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const nextStaticDir = path.join(rootDir, '.next', 'static');
const publicNextDir = path.join(rootDir, 'public', '_next');
const destinationStaticDir = path.join(publicNextDir, 'static');

const copyRecursive = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

const main = () => {
  if (!fs.existsSync(nextStaticDir)) {
    console.warn(
      `Skipping _next static copy: directory not found at ${nextStaticDir}. ` +
        'Run "next build" before executing this script.'
    );
    return;
  }

  fs.rmSync(publicNextDir, { recursive: true, force: true });
  fs.mkdirSync(destinationStaticDir, { recursive: true });

  copyRecursive(nextStaticDir, destinationStaticDir);
  console.log(`Copied Next.js static assets to ${destinationStaticDir}`);
};

main();
