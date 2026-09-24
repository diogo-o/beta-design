# Job On — Planeamento

Página: `dist/20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html`.

Seleciona CM, MF e BQ pelo `tool_id` antes de associar as ferramentas à produção. O seletor de inventário mostra os resultados existentes. Quando a pesquisa não encontra a ferramenta, oferece «Criar ferramenta» com tipo e referência preenchidos; o regresso conserva o rascunho do Job On. Cada associação na produção representa uma fotografia da ferramenta nessa revisão.

O cabeçalho usa o componente comum com `data-shell-module="Planeamento"`.

## Encadeamento do frontend de demonstração

O Job On é o início obrigatório do percurso nesta demonstração. O utilizador pesquisa e seleciona explicitamente CM, MF e BQ. Se não existir ferramenta, «Criar ferramenta» abre a ficha contextual; «Criar e selecionar ferramenta» regista uma identidade Tool temporária na sessão e devolve a escolha ao Job On, conservando o rascunho. Guardar o Job On gera um identificador de demonstração para `jobon_id` e contextos específicos CM/MF/BQ, cada um com a ferramenta selecionada e a fotografia dos seus dados na altura. Esses identificadores de browser são apenas para testar a navegação, sem autoridade de backend.

O Resumo do Controlo lê o contexto do Job On. O Peso usa o CM desse contexto para mostrar referência, lote, processo e máquina sem nova introdução manual. Pegamentos lê os contextos CM, MF e BQ. O operador introduz as medições; os dados das ferramentas já vêm da seleção anterior.

No calendário do protótipo, cada dia lista todas as referências e produções desse dia, agrupáveis pela máquina visível em cada linha. O painel lateral mostra o estado atual das linhas, sem mudar ao escolher outro dia. Boquilhas reutiliza esse painel e o estilo do calendário, mantendo o seu Histórico como consulta global com filtros opcionais.
