# Boquilhas

Página: `dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html`.

A página seleciona uma Tool BQ existente para abrir um registo próprio de reparação/quantidades e guardar movimentos. Não cria identidades Tool; essa responsabilidade fica no catálogo de ferramentas. O registo pode começar antes da produção: sem um `bq_id` compatível, mostra «Job On por associar» e continua disponível. O Job On avisa quando uma referência muda numa linha; a produção correspondente é apenas uma sugestão para associar a BQ certa. A associação a um `bq_id` requer escolha explícita do utilizador, na criação ou mais tarde.

## Navegação
O header e os separadores principais ocupam toda a largura. Os separadores de Registo, Boquilhas, Histórico e Definições ficam na linha seguinte. O painel das linhas de produção começa apenas abaixo destas duas linhas, preservando a navegação para Planeamento e Controlo.

O painel das linhas é o mesmo componente do Job On: mostra a referência e a produção atualmente associadas a cada máquina, independentemente do dia escolhido no calendário. Ao selecionar uma linha em Boquilhas, a página apresenta o contexto e a boquilha associados; dois cliques abrem o Job On correspondente. O cabeçalho usa o logótipo BA Glass e os dois níveis de separadores seguem a tipografia, altura, estado ativo e comportamento de deslocação das restantes páginas operacionais.

O Histórico abre com todos os movimentos, sem referência nem dia inicial. A pesquisa e os filtros são opcionais; o calendário permite escolher uma data e navegar pelos meses. O CSS do painel atual e dos calendários fica em `beta-production-overview.css`.

O cabeçalho de Boquilhas também é instância do componente comum `beta-shell.js`/`beta-shell.css`; não possui cópia própria da estrutura do logo, título ou utilizador.
