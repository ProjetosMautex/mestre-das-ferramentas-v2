const fs = require('fs');
let code = fs.readFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', 'utf8');

const replacements = {
  'Ǹ': 'é',
  'ǜ': 'ã',
  'Ǧ': 'ê',
  'ǭ': 'á',
  'ǧ': 'ú',
  'ǽ': 'â',
  '': 'ó',
};

for (const [bad, good] of Object.entries(replacements)) {
  code = code.split(bad).join(good);
}

const wordFixes = {
  'mveis': 'móveis',
  'mvel': 'móvel',
  'opes': 'opções',
  'timo': 'ótimo',
  'fora': 'força',
  'brao': 'braço',
  'braos': 'braços',
  'faa': 'faça',
  'pea': 'peça',
  'peas': 'peças',
  'Aǜo': 'Ação',
  'Aǜ': 'Açã',
  'Custo-Benefcio': 'Custo-Benefício',
  'Domstico': 'Doméstico',
  'Preciso': 'Precisão',
  'rpida': 'rápida',
  'Voc': 'Você',
  'voc': 'você',
  'No': 'Não',
  'no': 'não',
  'tcnica': 'técnica',
  'tcnicos': 'técnicos',
  'Tcnico': 'Técnico',
  'nico': 'único',
  'nicos': 'únicos',
  'ltimo': 'último',
  'ltimos': 'últimos',
  'Mquinas': 'Máquinas',
  'mquina': 'máquina',
  'mquinas': 'máquinas',
  'mecnica': 'mecânica',
  'mecnicos': 'mecânicos',
  'irreversveis': 'irreversíveis',
  'necessria': 'necessária',
  'mantm': 'mantém',
  'gil': 'ágil',
  'perfuraes': 'perfurações',
  'metlicos': 'metálicos',
  'us-las': 'usá-las',
  'funo': 'função',
  'resistncia': 'resistência',
  'moblia': 'mobília',
  'impecvel': 'impecável',
  'carvo': 'carvão',
  'contnuo': 'contínuo',
  'domstico': 'doméstico',
  'manutenes': 'manutenções',
  'espordicas': 'esporádicas',
  'desnecessrio': 'desnecessário',
  'atender': 'atenderá',
  'mo': 'mão',
  'substitu': 'substitui',
  'rotaes': 'rotações',
  'destri': 'destrói',
  'rene': 'reúne',
  'superfcies': 'superfícies',
  'Concluso': 'Conclusão',
  'fsico': 'físico',
  'prprios': 'próprios',
  'prtica': 'prática',
  'fbrica': 'fábrica',
  'qumica': 'química',
  'sade': 'saúde',
  'exps': 'expôs',
  'preo': 'preço',
  'reteno': 'retenção',
  'clulas': 'células',
  'esforo': 'esforço',
  'eltricas': 'elétricas',
  'prejuzos': 'prejuízos',
  'alm': 'além'
};

for (const [bad, good] of Object.entries(wordFixes)) {
  code = code.split(bad).join(good);
}

// Just in case I missed a missing comma from the replace script
code = code.replace(/}\s*{/g, '},\n  {');

fs.writeFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', code, 'utf8');
