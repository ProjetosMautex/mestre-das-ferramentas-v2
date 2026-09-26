const fs = require('fs');
let content = fs.readFileSync('src/data/articles.ts', 'utf8');
content = content.replace(
  '    title: "Parafusadeira Bosch GSR 1000 Smart é boa? Testei e digo se vale a pena",\r\n    url: "/parafusadeira-bosch-gsr-1000-smart-e-boa/",\r\n    image: "/images/blog/melhor-parafusadeira-custo-beneficio/parafusadeira-bosch-gsr-1000-smart-e-boa.webp",\r\n    excerpt: "A Bosch GSR 1000 Smart se apresenta como uma opção prática e acessível, mas será que realmente cumpre o que promete? Confira nosso teste."',
  '    title: "Parafusadeira Bosch GSR 1000 Smart é Boa? Veja Nosso Teste na Prática",\r\n    url: "/parafusadeira-bosch-gsr-1000-smart-e-boa/",\r\n    image: "/images/blog/1/parafusadeira-bosch-gsr-1000-smart-e-boa.webp",\r\n    excerpt: "A Bosch GSR 1000 Smart é a escolha ideal para o seu dia a dia? Descubra se ela entrega a precisão e a ergonomia necessárias para seus reparos domésticos."'
);
content = content.replace(
  '    title: "Parafusadeira Bosch GSR 1000 Smart é boa? Testei e digo se vale a pena",\n    url: "/parafusadeira-bosch-gsr-1000-smart-e-boa/",\n    image: "/images/blog/melhor-parafusadeira-custo-beneficio/parafusadeira-bosch-gsr-1000-smart-e-boa.webp",\n    excerpt: "A Bosch GSR 1000 Smart se apresenta como uma opção prática e acessível, mas será que realmente cumpre o que promete? Confira nosso teste."',
  '    title: "Parafusadeira Bosch GSR 1000 Smart é Boa? Veja Nosso Teste na Prática",\n    url: "/parafusadeira-bosch-gsr-1000-smart-e-boa/",\n    image: "/images/blog/1/parafusadeira-bosch-gsr-1000-smart-e-boa.webp",\n    excerpt: "A Bosch GSR 1000 Smart é a escolha ideal para o seu dia a dia? Descubra se ela entrega a precisão e a ergonomia necessárias para seus reparos domésticos."'
);

fs.writeFileSync('src/data/articles.ts', content);
