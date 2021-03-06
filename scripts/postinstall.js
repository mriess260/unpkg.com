const path = require('path');
const execSync = require('child_process').execSync;

function exec(cmd) {
  execSync(cmd, { stdio: 'inherit', env: process.env });
}

process.chdir(path.resolve(__dirname, '../functions'));

if (process.env.CI) {
  exec('npm ci');
} else {
  exec('npm install');
}
