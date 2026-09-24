# Boquilhas

Página: `dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html`.

A página consulta boquilhas e lotes já associados no Job On e regista movimentos e histórico. Se a ferramenta ou o lote não existir, o utilizador regressa ao Job On para criar/associar a Tool e iniciar a produção. Boquilhas não cria uma identidade de ferramenta nem um lote independente nesta versão; assim evita registos duplicados em módulos diferentes.

## Navegação
O header e os separadores principais ocupam toda a largura. Os separadores de Registo, Boquilhas, Histórico e Definições ficam na linha seguinte. O painel das linhas de produção começa apenas abaixo destas duas linhas, preservando a navegação para Planeamento e Controlo.

O painel das linhas é o mesmo componente do Job On: mostra a referência e a produção atualmente associadas a cada máquina, independentemente do dia escolhido no calendário. Ao selecionar uma linha em Boquilhas, a página apresenta o contexto e a boquilha associados; dois cliques abrem o Job On correspondente. O cabeçalho usa o logótipo BA Glass e os dois níveis de separadores seguem a tipografia, altura, estado ativo e comportamento de deslocação das restantes páginas operacionais.

O Histórico abre com todos os movimentos, sem referência nem dia inicial. A pesquisa e os filtros são opcionais; o calendário permite escolher uma data e navegar pelos meses. O CSS do painel atual e dos calendários fica em `beta-production-overview.css`.

O cabeçalho de Boquilhas também é instância do componente comum `beta-shell.js`/`beta-shell.css`; não possui cópia própria da estrutura do logo, título ou utilizador.
