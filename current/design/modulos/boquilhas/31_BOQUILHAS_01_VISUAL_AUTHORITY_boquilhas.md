# Boquilhas

**Página:** [`dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html`](../../../dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html)

- O registo pesquisa uma boquilha/lote existente. Se não houver resultado, apresenta o estado vazio e orienta para o Job On, único ponto de criação/associação da Tool e do lote no percurso da produção.
- Entradas, saídas e reparações registam quantidade, destino/reparador, linha, operador e data do movimento. Uma discrepância pertence ao movimento que a criou e alimenta o total correspondente.
- **Histórico:** calendário à esquerda, tabela de movimentos à direita. Escolher um dia filtra a tabela por data; os filtros de referência, tipo, reparador e estado combinam-se com esse dia. «Mostrar todos os dias» limpa a data. Sem registos, mostrar estado vazio e desativar correção/eliminação.
- O Site mostra quatro movimentos demonstrativos de 14/08/2026. Na app, os dias assinalados e a tabela vêm do histórico real, com correções auditáveis.

- Na lista de Boquilhas, um clique seleciona a ficha; duplo clique ou «Abrir ficha», fora da lista, abre a ficha da identidade BQ. A ficha apresenta os dados da Tool existente em leitura; não cria nem altera o `tool_id`.
