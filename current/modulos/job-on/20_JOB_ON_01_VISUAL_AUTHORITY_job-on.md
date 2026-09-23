# Planeamento / Job On light

**Página:** [`dist/20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html`](../../dist/20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html)

- O módulo Planeamento abre o Job On light: escolher dia, linha e produção; um clique seleciona a produção e dois cliques abrem a folha. «Criar Job On» abre uma folha vazia.
- A folha contém apenas referência, número de produção, linha, datas e as associações CM, MF e BQ. Cada tipo pesquisa ferramentas próprias; «Criar ferramenta» só aparece quando a pesquisa não encontra correspondência.
- As ferramentas têm `tool_id` próprios. A associação a uma produção guarda uma fotografia do estado da ferramenta naquela revisão, sem confundir CM, MF e BQ. O Controlo e o Resumo estão no módulo Controlo.
- «Duplicar anterior» deve copiar a última produção da mesma referência e exigir confirmação dos dados antes de guardar. Histórico consulta produções já existentes.
- O Site usa dados e mensagens de demonstração. A app precisa guardar Job Ons e revisões no servidor. Esta versão light foi reduzida às regras esclarecidas na conversa; confirmar campos e decisões adicionais com o beta master antes da integração definitiva.
