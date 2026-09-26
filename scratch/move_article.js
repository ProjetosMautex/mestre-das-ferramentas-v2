const fs = require('fs');
let content = fs.readFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', 'utf8');

const regex = /\{\s*title:\s*["']5 Melhores Parafusadeiras para Montar.*?\},/s;
const match = content.match(regex);

if (match) {
    const articleStr = match[0];
    let newContent = content.replace(articleStr, '');
    
    // Sometimes there are multiple spaces, so we replace carefully.
    const endBracketIndex = newContent.lastIndexOf('];');
    if (endBracketIndex !== -1) {
        newContent = newContent.slice(0, endBracketIndex) + '  ' + articleStr.trim() + '\n' + newContent.slice(endBracketIndex);
        fs.writeFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', newContent, 'utf8');
        console.log('Moved successfully!');
    } else {
        console.log('Failed to find end bracket');
    }
} else {
    console.log('Not found by regex');
}
