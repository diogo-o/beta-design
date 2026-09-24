# Frontend de demonstração

Entrada: `dist/index.html`. O frontend é estático e pode ser servido a partir da raiz da branch `gh-pages`; todos os links internos são relativos.

## Contas iniciais

| Nº funcionário | Perfil | Template inicial | Primeira página |
| --- | --- | --- | --- |
| 9000 | Admin DMO | Conta Admin separada dos templates | Administração |
| 1001 | João Silva (Chefe) | Responsável operacional | Aprovações |
| 1003 | Rui Costa (Operador) | Operador | Planeamento / Job On |

A palavra-passe comum para testar é `Demo123`. Estes dados no JavaScript são **apenas uma simulação de login**; não conferem segurança nem devem ser usados para dados reais. GitHub Pages publica o frontend publicamente.

O Admin permite criar utilizadores e templates, associar utilizadores, ordenar módulos e alterar o template de cada utilizador. O login consulta os utilizadores e templates na `sessionStorage` do mesmo separador, pelo número de funcionário. Só entram utilizadores ativos com um template que contenha módulos. Sair remove a identidade; os dados de teste só desaparecem quando termina a sessão do separador. O browser não partilha estes dados entre dispositivos ou sessões independentes.

Job On, Resumos e Pegamentos criados na demonstração usam `sessionStorage`. O Peso pode ser preparado pelo Operador, enviado para aprovação e decidido pelo Chefe na mesma sessão do navegador; o estado é refletido no Resumo. O fluxo de PDF, acesso ao diretório real e a aprovação persistente precisam de backend numa fase posterior.

## Publicação

A branch `gh-pages` contém apenas os ficheiros de `dist` na raiz, com `.nojekyll`. No GitHub, em Settings → Pages, selecionar **Deploy from a branch**, branch **gh-pages**, pasta **/(root)**. Depois dessa ativação, as novas versões enviadas para essa branch passam a atualizar o site automaticamente. O endereço esperado é `https://diogo-o.github.io/beta-design/`, sujeito à ativação e à disponibilidade do Pages no plano do repositório privado.

Admin é uma conta separada, sem módulo «Administração» atribuível. Os templates iniciais são **Operador** (Controlo Criar) e **Responsável operacional** (Controlo Aprovar). Ambos acedem ao mesmo Resumo: Criar pode abrir os fluxos de Peso e Pegamentos; Aprovar consulta a ficha sem a editar e decide «Aprovar» ou «Não aprovar» quando há uma submissão pendente.
