# Controlo

Páginas: `dist/21_CONTROLO_01_VISUAL_AUTHORITY_controlo.html` (entrada), `dist/22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html` (criar), `dist/23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html` (aprovar), `dist/24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html` e `dist/resumo.html`.

O Peso é registado para o CM selecionado. A pesquisa de referências no fluxo de criação oferece «Criar ferramenta» apenas sem correspondências; o regresso conserva os campos preenchidos. Aprovar pertence ao mesmo módulo, com permissão e fluxo distintos, sem criação de ferramenta nessa página.

Peso, aprovação, Pegamentos, Resumo e entrada de Controlo partilham o mesmo componente de cabeçalho. O subtítulo do cabeçalho é sempre «Controlo»; contexto de uma ficha aparece no conteúdo da página.

Na entrada de Controlo, os separadores «Peso» e «Pegamentos» abrem diretamente as páginas completas correspondentes. Não substituem essas páginas por painéis resumidos.

O Resumo tem pesquisa por referência e seletor de produções associadas à referência ativa; ver [`resumo.md`](resumo.md). A troca de produção substitui a folha completa, não apenas o título.

O Job On é a entrada do fluxo: ao guardar, abre o Resumo da produção. É no Resumo que se consultam ferramentas e faltas de Peso e Pegamentos e se iniciam esses controlos. Consulte `resumo.md`.

**Limite de acesso:** Controlo Criar e Controlo Aprovar são módulos atribuíveis distintos, embora partilhem o destino visual Controlo e o mesmo Resumo. Aprovar mostra a ficha em leitura e permite apenas decidir a submissão (aprovar/não aprovar), sem editar os ficheiros. A pasta `controlo/` deste repositório agrupa documentação de páginas e não representa, por si só, um único módulo atribuível.
