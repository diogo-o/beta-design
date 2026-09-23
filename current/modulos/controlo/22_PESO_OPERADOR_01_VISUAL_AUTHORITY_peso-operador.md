# Peso — criar e submeter

**Página:** [`dist/22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html`](../../dist/22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html)

- O operador seleciona a referência e o CM, regista capacidade e massa de água e recebe de imediato os cálculos de peso para esse CM. Pode inserir medições, consultar comparação e histórico e submeter para aprovação.
- O CM selecionado aponta para a identidade `tool_id` e para a associação congelada no Job On. A produção é obtida por essa associação; não pedir novo identificador de produção no Peso.
- Quando a procura não encontra a ferramenta, oferecer criação contextual e regressar ao formulário sem perder os campos. Não criar outra ferramenta quando o CM já existe.
- O fluxo de criação não concede aprovação. Na app, cálculos, arredondamento, validações, estado de submissão e PDF devem usar os dados autorizados e persistidos no servidor; avisos não aprovam automaticamente.

## Definições do módulo
O separador Definições em Controlo abre as definições operacionais disponíveis em Controlo Criar. A ligação do Resumo do Controlo abre esta vista diretamente com `?view=settings`.
