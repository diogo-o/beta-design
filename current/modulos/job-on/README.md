# Job On — Planeamento

Página: `dist/20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html`.

O Job On é o centro do planeamento da produção. Seleciona CM, MF e BQ pelo `tool_id`, cria o `jobon_id` e os snapshots/contextos específicos da produção (`cm_id`, `mf_id`, `bq_id`) mantendo a ligação à master Tool.

Quando a pesquisa não encontra a ferramenta, a criação da Tool ocorre aqui e o rascunho do Job On é preservado. Cada associação representa o estado da ferramenta usado naquela produção; não é uma cópia de outputs de outros módulos.

## Fluxo de contexto

Depois de o Job On existir, a informação de planeamento necessária escoa para os módulos operacionais. O Job On não empurra um pacote gigante nem implementa regras internas desses módulos: disponibiliza/notifica o contexto e cada módulo puxa apenas a projeção de que precisa.

Exemplos:

- Controlo recebe a produção no Resumo;
- Peso recebe do `cm_id`/Job On máquina, referência, lote, processo e contexto CM;
- Pegamentos recebe os contextos CM/MF/BQ necessários;
- Boquilhas recebe o `bq_id` relevante quando existe contexto de produção;
- Reparação Interna pode receber os `cm_id`/`mf_id` ativos para a máquina e produção.

O utilizador não volta a introduzir dados que já estão definidos pelo planeamento.

O cabeçalho usa o componente comum com `data-shell-module="Planeamento"`.

## Encadeamento do frontend de demonstração

O utilizador pesquisa e seleciona explicitamente CM, MF e BQ. Guardar o Job On gera identificadores de demonstração para `jobon_id` e para os contextos CM/MF/BQ. Esses identificadores de browser servem apenas para testar navegação e fluxo; não são autoridade de backend.
