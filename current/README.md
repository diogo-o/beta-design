# DMO Beta — versão visual publicada

Versão do Site publicada em 23/09/2026: [`dmo-beta-frontend-lab`](https://dmo-beta-frontend-lab.dgains-00.chatgpt.site). Fonte: commit Sites `f290797b154de2807e47ac90354485d4cab94dea`.

- `dist/` contém uma cópia exata e executável das páginas, estilos, scripts e logótipo do Site. Abrir `dist/index.html` para percorrer o protótipo. Manter os ficheiros desta pasta juntos, pois os caminhos entre páginas são relativos.
- `modulos/` associa cada página ao seu módulo e documenta como funciona.
- [`FLUXO_FUNCIONAL.md`](FLUXO_FUNCIONAL.md) descreve as transições entre os módulos e os limites do protótipo.

| Módulo | Páginas em `dist/` | Descrição por página |
|---|---|---|
| Acesso | `12_LOGIN_01_VISUAL_AUTHORITY_login.html` | [`modulos/acesso/`](modulos/acesso/) |
| Administração | `13_ADMIN_01_VISUAL_AUTHORITY_admin.html` | [`modulos/admin/`](modulos/admin/) |
| Planeamento | `20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html` | [`modulos/job-on/`](modulos/job-on/) |
| Controlo | `21_CONTROLO…`, `22_PESO_OPERADOR…` (criar e imprimir), `23_PESO_RESPONSAVEL…`, `24_PEGAMENTOS…`, `resumo.html` | [`modulos/controlo/`](modulos/controlo/) |
| Boquilhas | `31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html` | [`modulos/boquilhas/`](modulos/boquilhas/) |
| Ferramentas (contextual) | `tool-create.html` | [`modulos/ferramentas/`](modulos/ferramentas/) |

`index.html` é a entrada de login. CSS, JavaScript, logo e favicon em `dist/` são recursos comuns. O conteúdo em `modules/Unfinished/` na raiz do repositório continua a ser referência antiga, não esta versão.

Este é um protótipo de design. Para decisões de domínio, acesso, cálculos e persistência prevalecem `dmo-master`, `dmo-beta-master` e os contratos de `DMO-MODULAR`.

O cabeçalho das páginas é um componente único em `dist/beta-shell.js` e `dist/beta-shell.css`; cada página fornece o módulo e o utilizador de exemplo. Administração demonstra a associação de pasta, números de funcionário e membros dos templates em `dist/beta-admin.js`.
