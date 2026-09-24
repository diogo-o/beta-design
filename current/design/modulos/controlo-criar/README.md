# Módulo de acesso: Controlo Criar

Destino visível partilhado: **Controlo**. Concede o percurso de criação, Peso, Pegamentos e a visualização do Resumo da produção com a mesma procura por referência e seletor de produções disponível em Controlo Aprovar. O Resumo é uma função dentro do Controlo e lê o contexto originado no Job On; não é um módulo atribuível autónomo.

Percurso demonstrativo: Job On associa CM, MF e BQ → cria `jobon_id` e os contextos `cm_id`, `mf_id` e `bq_id` → Resumo apresenta o contexto → Peso herda do `cm_id` a ferramenta `tool_id`, referência, lote, processo e máquina → operador introduz medições e submete. Pegamentos herda os três contextos da produção. Ferramenta em falta é criada no fluxo contextual e devolvida à seleção no Job On.

Páginas atuais: `dist/resumo.html`, `dist/22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html`, `dist/24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html`. Os IDs usados na versão estática são temporários para testar a navegação.
