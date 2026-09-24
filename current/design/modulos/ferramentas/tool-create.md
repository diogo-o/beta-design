# Criação contextual de ferramenta

**Página:** [`dist/tool-create.html`](../../../dist/tool-create.html)

- Aceder à criação apenas a partir de uma procura sem resultados no Job On. Receber contexto de origem, tipo CM/MF/BQ e referência pesquisada; permitir confirmar os atributos da nova identidade e regressar ao rascunho do Job On com a Tool escolhida.
- Primeiro verificar novamente no servidor se já existe ferramenta compatível para evitar duplicação. A criação do `tool_id` não é a mesma operação que associar uma ferramenta ao Job On nem criar um lote de Boquilhas.
- No Site, a navegação e os campos são simulados com parâmetros e `sessionStorage`; na app, preservar o rascunho e devolver a identidade criada com autorização e validação no servidor.

- A ficha de BQ existente pode ser aberta a partir de Boquilhas para consulta, em leitura, com referência, lote, quantidade e linha já preenchidos.
