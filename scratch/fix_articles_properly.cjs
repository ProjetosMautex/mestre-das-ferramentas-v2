const fs = require('fs');
let code = fs.readFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', 'utf8');

const replacements = {
  'Ǹ': 'é',
  'ǜ': 'ã',
  'Ǧ': 'ê',
  'ǭ': 'á',
  'ǧ': 'ú',
  'ǽ': 'â'
};

for (const [bad, good] of Object.entries(replacements)) {
  code = code.split(bad).join(good);
}

const wordFixes = {
  'custo-benefcio': 'custo-benefício',
  'mǜo': 'mão',
  '': 'à', // '' before ' frustra' is 'à'
  'frustraǜo': 'frustração',
  'opes': 'opções',
  'potǦncia': 'potência', // already handled by Ǧ
  'mveis': 'móveis',
  'Mveis': 'Móveis',
  'precisǜo': 'precisão',
  'segurana': 'segurança',
  'fceis': 'fáceis',
  'VocǦ': 'Você',
  'prtica': 'prática',
  'rpida': 'rápida',
  'ps-venda': 'pós-venda',
  'manutenǜo': 'manutenção',
  'nico': 'único',
  'tcnicas': 'técnicas',
  'pr-furo': 'pré-furo',
  'slida': 'sólida',
  'padrǜo': 'padrão',
  'durvel': 'durável',
  'lderes': 'líderes',
  'concludas': 'concluídas',
  'construǜo': 'construção',
  'solues': 'soluções',
  'timo': 'ótimo',
  'projet-las': 'projetá-las',
  'us-la': 'usá-la',
  'manutencǜo': 'manutenção',
  'vocǦ': 'você',
  'painǸis': 'painéis',
  'tcnico': 'técnico',
  'eltricas': 'elétricas',
  'oramento': 'orçamento',
  'informaes': 'informações',
  'gil': 'ágil',
  'furaǜo': 'furação',
  'vrios': 'vários',
  'necessrias': 'necessárias',
  'prtico': 'prático',
  'fora': 'força',
  'bsicos': 'básicos',
  'bsicas': 'básicas',
  'p': 'pó',
  'condies': 'condições',
  'avaliaes': 'avaliações',
  'mquina': 'máquina',
  'mximas': 'máximas',
  'fcil': 'fácil',
  'No': 'Não',
  'no': 'não',
  'Nquel': 'Níquel',
  'on': 'Íon',
  'Ltio': 'Lítio',
  'fsico': 'físico',
  'sade': 'saúde',
  'clulas': 'células',
  'til': 'útil',
  'retraǜo': 'retração',
  'resistncia': 'resistência',
  'vlido': 'válido',
  'metlicas': 'metálicas',
  'marcenrio': 'marcenário',
  'atravs': 'através',
  'atuaǜo': 'atuação',
  'perfeiǜo': 'perfeição',
  'dvidas': 'dúvidas',
  'mnimo': 'mínimo',
  'mnima': 'mínima',
  'mximos': 'máximos',
  'fbrica': 'fábrica',
  'experincia': 'experiência',
  'tcnica': 'técnica',
  'metlicos': 'metálicos',
  'perfuraes': 'perfurações',
  's': 'só',
  'at': 'até',
  'informaǜo': 'informação',
  'situaes': 'situações',
  'opǜo': 'opção',
  'prprios': 'próprios',
  'frias': 'férias',
  'pblico': 'público',
  'portteis': 'portáteis',
  'domsticos': 'domésticos',
  'eltrica': 'elétrica',
  'necessrio': 'necessário',
  'mecnicos': 'mecânicos',
  'mecnica': 'mecânica',
  'hidrulica': 'hidráulica',
  'hidrulico': 'hidráulico',
  'dvida': 'dúvida',
  'alm': 'além',
  'mximo': 'máximo',
  'so': 'são',
  'est': 'está',
  'esto': 'estão',
  'nvel': 'nível',
  'nveis': 'níveis',
  'lquido': 'líquido',
  'ttulo': 'título',
  'complicaes': 'complicações',
  'ideal para seus projetos e diga adeus  frustraǜo!': 'ideal para seus projetos e diga adeus à frustração!'
};

for (const [bad, good] of Object.entries(wordFixes)) {
  code = code.split(bad).join(good);
}

// Any remaining '' characters might be 'á', 'é', 'í', 'ó', 'ú', 'ç'. It's safer to just run this regex.
code = code.replace(/(.)/g, (match, p1) => {
    // Basic heuristic: if it's before 'o', it might be 'ç'
    if (p1 === 'o' || p1 === 'a' || p1 === 'u') return 'ç' + p1;
    return '' + p1; // leave it for manual if heuristic is not clear, but mostly handled by words.
});

fs.writeFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/data/articles.ts', code, 'utf8');
