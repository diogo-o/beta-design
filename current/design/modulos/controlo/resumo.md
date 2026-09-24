# Resumo do Controlo

**Página:** [`dist/resumo.html`](../../../dist/resumo.html)

A página abre o Resumo de uma referência e produção concretas. Acima da folha existem dois controlos:

1. **Procurar Resumos por referência:** escrever uma referência mostra referências com Resumos disponíveis; selecionar uma abre a produção mais recente dessa referência.
2. **Resumos desta referência:** lista as produções com Resumo da referência ativa. Ao escolher outra produção, toda a folha muda para esse Resumo. Exemplo: de `5447T173 / 202602` para `5447T173 / 202601` sem regressar ao Controlo.

Título, estado, produção, Job On, CM, medições, Pegamentos e observações pertencem ao mesmo Resumo selecionado. A página aceita `?ref=5447T173&production=202601` para entrada direta. O bloco inventado «Comparação selecionada / 2 pares avaliados» foi removido.

`beta-summary.js` contém apenas dados de demonstração para tornar a navegação testável no Site. Na aplicação real, a pesquisa e a lista de produções devem vir dos Resumos existentes, sem inventar dados nem copiar os valores de uma produção para outra.

## Criação a partir do Job On

Guardar o Job On cria ou atualiza a ficha de Resumo da referência e produção e abre essa ficha. O Resumo apresenta o estado das ferramentas CM, MF e BQ selecionadas, bem como Peso e Pegamentos em falta. As ações «Criar Peso» e «Criar Pegamentos» partem dessa ficha e transportam a referência e produção no URL. A pesquisa por referência e o seletor de produção permitem navegar entre Resumos anteriores.

Nesta versão visual, os Resumos criados são guardados no `localStorage` do navegador. O estado «Em falta» não é alterado automaticamente ao abrir as páginas de Peso ou Pegamentos; essa associação e a geração de ficheiros PDF requerem a implementação de dados da aplicação.
