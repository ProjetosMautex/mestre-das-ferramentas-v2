import re
import sys

files = [
    r"c:\Users\Murilo vieira\Documents\projetos\mestre-ferramentas - V2\src\components\MelhorParafusadeiraCustoBeneficio.tsx",
    r"c:\Users\Murilo vieira\Documents\projetos\mestre-ferramentas - V2\src\components\MelhorFuradeiraParafusadeira.tsx"
]

patterns_to_remove = [
    r"Em meus testes( práticos)?, ?(notei|percebi) que ",
    r"Em minhas experiências( com modelos similares)?, ?(ela se mostrou|notei que) ",
    r"Durante meus testes, percebi que ",
    r"Já utilizei modelos similares( e a)?",
    r"Já utilizei parafusadeiras de entrada similares em montagem de móveis e pequenos reparos e a",
    r"Já trabalhei em projetos.*onde (precisei|a robustez) ",
    r"Já trabalhei com modelos similares e essa",
    r"Já trabalhei em linhas de produção onde a demanda por parafusamento é incessante, e a",
    r"No meu trabalho com instalações, frequentemente me deparo com a necessidade de uma parafusadeira leve e com boa autonomia para pequenos serviços. ",
    r"O que realmente (acontece|aimporta|importa) é que ",
    r"Na prática, (o que muitos ignoram é que )?",
    r"Muitos ignoram(, mas )?",
    r"O ponto central( aqui) (é|está no detalhe|é que) ",
    r"Vale ressaltar(:| que) ",
    r"Um ponto (de atenção|crucial) é( que)? ",
    r"O segredo está no( detalhe| mecanismo)?",
    r"Para (quem busca|o profissional que busca|quem vai encarar) "
]

def clean_text(text):
    for p in patterns_to_remove:
        # Match case insensitive
        text = re.sub(p, "", text, flags=re.IGNORECASE)
    
    # Capitalize the first letter of sentences if the pattern removal left a lowercase word
    def cap_match(match):
        return match.group(1) + match.group(2).upper()
    text = re.sub(r'([.!?]\s+|^)([a-z])', cap_match, text)
    
    # Fix awkward starts of paragraphs left behind like "A " or ", a"
    text = re.sub(r'<p>(a|o)\s+([a-z])', lambda m: "<p>" + m.group(1).upper() + " " + m.group(2), text)
    text = re.sub(r'<p>, ', '<p>', text)
    text = re.sub(r'<p>e a ', '<p>A ', text)
    text = re.sub(r'<p>Essa ', '<p>A ', text)

    return text

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = clean_text(content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Processed {filepath}")
