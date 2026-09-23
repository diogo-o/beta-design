# Criação contextual de ferramenta

**Página:** [`dist/tool-create.html`](../../dist/tool-create.html)

- Aceder apenas a partir de uma procura sem resultados em Job On, Controlo ou Boquilhas. Receber contexto de origem, tipo CM/MF/BQ e referência pesquisada; permitir confirmar os atributos da nova identidade e regressar ao ponto de origem.
- Primeiro verificar novamente no servidor se já existe ferramenta compatível para evitar duplicação. A criação do `tool_id` não é a mesma operação que associar uma ferramenta ao Job On nem criar um lote de Boquilhas.
- No Site, a navegação e os campos são simulados com parâmetros e `sessionStorage`; na app, preservar o rascunho e devolver a identidade criada com autorização e validação no servidor.

- A ficha de BQ existente pode ser aberta a partir de Boquilhas com a referência, o lote, a quantidade e a linha já preenchidos. Ação de guardar a ficha não cria outra identidade.
