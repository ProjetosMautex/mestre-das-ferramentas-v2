const fs = require('fs');
let code = fs.readFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', 'utf8');

// Find the target article
const startSearch = 'title: "Melhor Parafusadeira para Montar Mveis';
const startIndex = code.indexOf(startSearch);
if (startIndex !== -1) {
    const articleStart = code.lastIndexOf('{', startIndex);
    const articleEnd = code.indexOf('},', startIndex) + 1; // get the '}'
    const articleStr = code.substring(articleStart, articleEnd);

    // Remove it from original place (and trailing comma/spaces if possible, but keep it simple)
    let newCode = code.substring(0, articleStart) + code.substring(articleEnd + 2);

    // Prepare the new article string
    const newArticle = \{
    title: "5 Melhores Parafusadeiras para Montar Móveis (\\\"Sem Espanar\\\")",
    url: "/melhor-parafusadeira-para-montar-moveis/",
    image: "/images/blog/1/melhor-parafusadeira-para-montar-moveis.webp",
    excerpt: "Cansado de parafusos espanados ou móveis danificados? Descubra como escolher a parafusadeira ideal para montar seus móveis com precisão, agilidade e segurança."
  }\;

    // Find the end bracket of the array
    const endBracket = newCode.lastIndexOf('];');
    if (endBracket !== -1) {
        newCode = newCode.substring(0, endBracket) + '  ' + newArticle + '\\n' + newCode.substring(endBracket);
        fs.writeFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', newCode, 'utf8');
        console.log('Successfully updated and moved the article!');
    } else {
        console.log('Could not find end bracket.');
    }
} else {
    console.log('Could not find the target article string. Trying with other encoding?');
}
