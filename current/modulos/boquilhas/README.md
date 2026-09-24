# Boquilhas

Página: `dist/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html`.

A página trabalha com boquilhas, reparação/movimentos e histórico. A Tool canónica é criada/selecionada no Job On quando existe contexto de produção.

Quando um registo de reparação é iniciado antes de existir Job On, pode ficar temporariamente associado ao `tool_id` e ao contexto operacional conhecido, por exemplo a máquina prevista. Mais tarde, quando Boquilhas recebe o contexto de uma produção e o `bq_id` tem como master Tool o mesmo `tool_id`, esse é o ponto em que a UI deve apresentar a associação desse registo ao `bq_id`.

Depois de associado:

```text
registo Boquilhas
→ bq_id
→ jobon_id
```

Assim o registo fica ligado à produção correta sem obrigar Boquilhas a procurar Job Ons futuros nem a carregar todas as produções.

## Navegação
O header e os separadores principais ocupam toda a largura. Os separadores de Registo, Boquilhas, Histórico e Definições ficam na linha seguinte. O painel das linhas de produção começa apenas abaixo destas duas linhas, preservando a navegação para Planeamento e Controlo.

A barra de cada linha apresenta a referência da boquilha imediatamente seguida do lote (por exemplo, «T173 Lote 24/33»), antes da quantidade. O cabeçalho usa o logótipo BA Glass e os dois níveis de separadores seguem a tipografia, altura, estado ativo e comportamento de deslocação das restantes páginas operacionais.

O cabeçalho de Boquilhas também é instância do componente comum `beta-shell.js`/`beta-shell.css`; não possui cópia própria da estrutura do logo, título ou utilizador.
