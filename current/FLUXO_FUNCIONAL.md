# Fluxo funcional do frontend DMO Beta

Esta descrição corresponde às páginas da versão publicada do Site e às notas em `modulos/`. Os valores de exemplo, alterações em memória e mensagens de sucesso do protótipo não comprovam persistência nem autorização na app real.

## Acesso e estrutura comum

1. O login pede **Utilizador** e palavra-passe. Não apresenta o cartão «Acesso por Template».
2. A barra principal mostra **Planeamento**, **Controlo** e **Boquilhas** conforme os módulos efetivos e a ordem do template. O Admin tem área própria. A autorização real é sempre validada pelo servidor.
3. A segunda barra mostra apenas páginas do módulo ativo. Logótipo BA Glass, tamanho dos separadores, estados ativos e comportamento das duas barras são consistentes entre páginas; o painel das linhas começa abaixo de ambas. Uma página de Boquilhas mantém a barra principal para regressar aos outros módulos.
4. Em tabelas, um clique seleciona a linha, ações ficam fora da tabela e o duplo clique abre a ficha quando aplicável.

## Planeamento — Job On

Selecionar linha de produção e dia no calendário → consultar produções do dia → selecionar produção → abrir a folha Job On. A folha apresenta referência, máquina, processo e ferramentas associadas (CM, MF e BQ) a partir das respetivas identidades. A criação de ferramenta é contextual quando a pesquisa não encontra uma existente; o regresso preserva o que foi preenchido. O Job On não contém o Resumo do Controlo como separador próprio. Consultar `modulos/job-on/`.

## Controlo

O Resumo é uma página do Controlo, ligada à produção selecionada. As páginas do módulo são Resumo, Peso, Comparação, Pegamentos, Histórico e Definições segundo o fluxo/permissão. O operador seleciona explicitamente o CM para registar Peso, introduz capacidade e massa de água e vê de imediato a prévia calculada; pode consultar comparação e histórico e submeter. O responsável revê Peso/Histórico e aprova ou rejeita quando autorizado. Pegamentos e a folha do Resumo são consultados/criados no respetivo contexto. Definições de Controlo abre as opções operacionais existentes na página Controlo Criar; o valor operacional vigente e a sua aplicação a novos registos pertencem à implementação do módulo, não à cópia de demonstração. Consultar `modulos/controlo/` para cada página.

## Boquilhas

Selecionar linha no painel abaixo das barras → Registo ou Boquilhas → procurar ferramenta/lote → selecionar a ficha. Duplo clique abre a ficha BQ existente; criação contextual de `tool_id` só é oferecida quando a procura não encontra ferramenta. O Histórico põe calendário e tabela lado a lado: escolher dia carrega os movimentos desse dia e combina com filtros; «Mostrar todos os dias» limpa a data. O separador Definições guarda a configuração de reparadores por linha na implementação real. Em cada linha de produção, a referência da boquilha precede imediatamente o lote (por exemplo, «T173 Lote 24/33»). Consultar `modulos/boquilhas/`.

## Administração

Utilizadores: pesquisar/filtrar → selecionar linha → editar ou reset fora da tabela; duplo clique abre ficha. Templates de acesso: lista → «Criar template» ou abrir existente → escolher módulos e ordem → guardar. Definições permite configurar o diretório local principal onde serão guardados os PDFs do Controlo. A gestão de templates pertence apenas ao separador Templates de acesso. No protótipo, o caminho fica em `localStorage`; a gravação efetiva dos PDFs pertence à aplicação. O template efetivo define a apresentação, mas ações e rotas dependem da autorização no servidor. Consultar `modulos/admin/`.

## Ferramentas

É um fluxo contextual lançado de Job On, Peso ou Boquilhas quando falta uma identidade de ferramenta. Selecionar tipo e preencher a ficha → concluir → regressar ao ecrã de origem mantendo o formulário anterior. Ferramentas não é um separador principal no Beta. Consultar `modulos/ferramentas/tool-create.md`.
