# DMO Beta — frontend de demonstração

Os ficheiros executáveis do frontend estão em `current/dist/`; a branch `gh-pages` contém a cópia estática na raiz para publicação pelo GitHub Pages. A ativação de Pages em Settings ainda tem de ser confirmada.

`current/modulos/` descreve os módulos de acesso e os seus fluxos. Controlo Criar e Controlo Aprovar são módulos atribuíveis separados que partilham o destino Controlo e o mesmo Resumo. `current/modulos/controlo/resumo.md` é a especificação única da folha partilhada.

Consulte `current/FLUXO_FUNCIONAL.md` para a cadeia Job On → contextos CM/MF/BQ → Resumo → Peso/Pegamentos → aprovação. Os dados da demonstração ficam apenas na sessão do browser.
