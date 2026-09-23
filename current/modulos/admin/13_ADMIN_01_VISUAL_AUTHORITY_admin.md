# Administração

**Página:** [`dist/13_ADMIN_01_VISUAL_AUTHORITY_admin.html`](../../dist/13_ADMIN_01_VISUAL_AUTHORITY_admin.html)

- **Utilizadores:** listar, procurar, filtrar e criar. Um clique seleciona a linha; duplo clique abre a página da ficha do utilizador, com acesso à edição. «Editar utilizador» e «Reset password» ficam fora da tabela e atuam sobre a linha selecionada. Associar um template de acesso ao utilizador.
- **Templates:** abrir a lista antes do formulário. «Criar template» abre formulário vazio; selecionar um existente abre edição. Definir nome, módulos e a sua ordem com as setas. Guardar atualiza a lista. O botão «Criar template» fica visível tanto na lista como durante uma edição. Utilizadores e Templates ocupam a mesma largura útil.
- O Site guarda a seleção de templates apenas em `localStorage` para demonstrar a ordem dos módulos no mesmo navegador. A app deve guardar templates e associações no servidor; autorização de cada comando é validada pelas capabilities, não pelos títulos nem pela visibilidade do menu.
- O módulo inicial, a ordem, as páginas e as capacidades precisam vir do catálogo e do template efetivo do utilizador. Um módulo desmarcado não pode ser recuperado só abrindo o URL.

## Definições
O separador Definições explica que os templates determinam o acesso e a sequência dos módulos e permite abrir a gestão dos templates.
