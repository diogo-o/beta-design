# Controlo

Páginas: `dist/21_CONTROLO_01_VISUAL_AUTHORITY_controlo.html` (entrada), `dist/22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html` (criar), `dist/23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html` (aprovar), `dist/24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html` e `dist/resumo.html`.

## Entrada pelo Resumo da produção

O contexto do Job On entra no Controlo através do **Resumo daquela produção**. O Resumo lê o `jobon_id` e os respetivos contextos de produção e serve como ponto de entrada para o trabalho de Controlo.

Ao abrir Peso a partir dessa produção, o Peso já vem populated pelo contexto do `cm_id`/Job On com a informação aplicável, incluindo:

- máquina;
- referência;
- lote;
- processo;
- CM/contexto da ferramenta.

O operador introduz apenas os dados próprios das medições. Não volta a escolher a Tool nem a preencher manualmente informação que o Job On já conhece.

Pegamentos recebe os contextos CM/MF/BQ necessários ao seu workflow.

## Create e Approve

Controlo Criar e Controlo Aprovar são módulos funcionais e de acesso distintos que podem partilhar o destino visível Controlo.

Não existe uma regra que obrigue os dois módulos a usar a mesma página ou o mesmo workflow. Reutilização de componentes, apresentação ou reads acontece apenas quando simplifica sem distorcer o funcionamento real. Peso Criar e Peso Aprovar podem, por isso, ter implementações bastante diferentes.

O Resumo pode apresentar informação muito semelhante nos dois módulos porque ambos partem da mesma produção, mas as ações disponíveis continuam a pertencer ao módulo correspondente.

## Histórico

O Resumo tem pesquisa por referência e seletor de produções associadas à referência ativa; ver [`resumo.md`](resumo.md). A troca de produção substitui o contexto completo da folha.

Históricos e relações adicionais são pedidos apenas quando o utilizador os consulta. O frontend não carrega todos os Job Ons, Tools ou outputs para depois filtrar localmente.

Peso, aprovação, Pegamentos, Resumo e entrada de Controlo partilham o componente visual de cabeçalho quando adequado; isso não implica partilha obrigatória de workflow.
