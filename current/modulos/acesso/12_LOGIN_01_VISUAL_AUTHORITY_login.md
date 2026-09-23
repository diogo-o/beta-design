# Login

**Página:** [`dist/12_LOGIN_01_VISUAL_AUTHORITY_login.html`](../../dist/12_LOGIN_01_VISUAL_AUTHORITY_login.html)

- Recebe identificação (email de Admin ou número de funcionário) e palavra-passe. «Mostrar» alterna a visibilidade da palavra-passe sem alterar o campo.
- No protótipo, a identificação contendo `admin` abre Admin; `chefe`/`respons` abre Controlo Aprovar; outros valores abrem Planeamento. Isto é apenas demonstração de navegação.
- Na app, autenticar no servidor, resolver o utilizador interno, o template e o módulo inicial permitido. Falha de autenticação ou ausência de acesso precisa de estado explícito; a escrita da identificação nunca atribui papel ou permissão.
