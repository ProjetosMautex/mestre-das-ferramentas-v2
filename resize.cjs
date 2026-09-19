
const sharp = require('sharp');
sharp('public/images/blog/1/o-que-e-broca-escalonada.webp')
  .resize({ width: 800 })
  .webp({ quality: 80 })
  .toFile('public/images/blog/1/o-que-e-broca-escalonada-medium.webp')
  .then(info => console.log('Created medium image:', info))
  .catch(err => console.error(err));

