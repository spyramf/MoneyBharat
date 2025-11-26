const fs = require('fs');
const path = require('path');

const publicNextDir = path.join(__dirname, '..', 'public', '_next');

try {
  if (fs.existsSync(publicNextDir)) {
    fs.rmSync(publicNextDir, { recursive: true, force: true });
    console.log(`Removed ${publicNextDir}`);
  } else {
    console.log(`No _next directory to remove at ${publicNextDir}`);
  }
} catch (error) {
  console.error('Failed to clean public/_next directory:', error);
  process.exit(1);
}
