import fs from 'fs';
import { createHash } from 'crypto';
import path from 'path';

fs.readdir('./dist/assets', function (err, files) {
  try {
    if (err) {
      throw err;
    }
    const css_hashes = [];
    const js_hashes = [];
    
    files.forEach(file => {
      const buff = fs.readFileSync(`./dist/assets/${file}`);
      const hash = createHash("sha256").update(buff).digest("hex");

      if (file.slice(-3) === '.js') {
        js_hashes.push(`'sha256-${hash}'`);
      } else {
        css_hashes.push(`'sha256-${hash}'`);
      }
    });

    const headerString = `"default-src https://metamindworks.com;media-src https://metamindworks.com;style-src ${css_hashes.join(' ')};img-src *;frame-src 'none';script-src https://netlify-rum.netlify.app ${js_hashes.join(' ')}"`;

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
    fs.writeFileSync('./netlify.toml', netlify_toml);
  } catch (err) {
    console.log(err);
  }
})