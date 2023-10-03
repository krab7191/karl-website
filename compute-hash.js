import { createReadStream, readdir, writeFileSync } from 'fs';
import { createHash } from 'crypto';

async function checksumFile(path) {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(path);
    stream.on('error', err => reject(err));
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('base64')));
  });
}

function write_toml (css, js) {
  const headerString = `"default-src https://metamindworks.com;media-src https://metamindworks.com;style-src 'unsafe-inline' ${css.join(' ')};img-src *;frame-src 'none';script-src 'unsafe-hashes' 'https://netlify-rum.netlify.app' ${js.join(' ')}"`;

  const netlify_toml = `
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = ${headerString}

    `;
writeFileSync('./netlify.toml', netlify_toml);
};

readdir('./dist/assets', async function (err, files) {
  const len = files.length;
  try {
    if (err) {
      throw err;
    }
    const css_hashes = [];
    const js_hashes = [];
    
    await files.forEach(async (file, idx) => {
      const hash = await checksumFile(`./dist/assets/${file}`);

      if (file.slice(-3) === '.js') {
        js_hashes.push(`'sha256-${hash}'`);
      } else {
        css_hashes.push(`'sha256-${hash}'`);
      }
      if (idx === len - 1) {
        write_toml(css_hashes, js_hashes);
      }
    });
  } catch (err) {
    console.log(err);
  }
})