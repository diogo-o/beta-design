# Boquilhas

**Página:** [`dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html`](../../dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html)

- O registo pesquisa uma boquilha/lote existente. Criar **novo lote** difere de criar um `tool_id`; a criação da ferramenta só surge quando a procura não encontra nenhuma e regressa ao contexto inicial.
- Entradas, saídas e reparações registam quantidade, destino/reparador, linha, operador e data do movimento. Uma discrepância pertence ao movimento que a criou e alimenta o total correspondente.
- **Histórico:** calendário à esquerda, tabela de movimentos à direita. Escolher um dia filtra a tabela por data; os filtros de referência, tipo, reparador e estado combinam-se com esse dia. «Mostrar todos os dias» limpa a data. Sem registos, mostrar estado vazio e desativar correção/eliminação.
- O Site mostra quatro movimentos demonstrativos de 14/08/2026. Na app, os dias assinalados e a tabela vêm do histórico real, com correções auditáveis.

- Na lista de Boquilhas, um clique seleciona a ficha; duplo clique ou «Abrir ficha», fora da lista, abre a ficha da identidade BQ. A ficha usa os campos da criação de `tool_id`, preenchidos com os dados existentes. Guardar uma ficha existente não cria outro `tool_id`.
