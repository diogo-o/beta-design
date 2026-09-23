# Legacy Visual Source Map

The files under `modules/Unfinished/` are **source evidence**.

They are deliberately named "Unfinished" because they must not be consumed as final design authority.

| Legacy source | Extract | Do not inherit blindly |
|---|---|---|
| `12_LOGIN_01_VISUAL_AUTHORITY_login.html` | brand composition, focused login, password affordance | old single-email identity contract, fake redirect logic |
| `13_ADMIN_01_VISUAL_AUTHORITY_admin.html` | dense Users UI, template list/detail pattern | Applications/Audit areas and old capability vocabulary |
| `20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html` | production-sheet density, context grouping, history ideas | full legacy/future Job On scope |
| `21_CONTROLO_01_VISUAL_AUTHORITY_controlo.html` | Controlo workspace/navigation concepts | old route/permission assumptions |
| `22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html` | measurement density, result presentation, operator workflow clues | fixed rows, old authority boundaries |
| `22_PESO_OPERADOR_02_VISUAL_AUTHORITY_PRINT_peso.html` | document information hierarchy | assumption that print layout equals application layout |
| `23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html` | review queue/decision presentation clues | separate divergent Peso representation |
| `24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html` | CM/BQ/MF grouping, measurement presentation | old hard-coded data/rules not in current authority |
| `24_PEGAMENTOS_03_DATA_CONTRACT_SNAPSHOT.json` | provenance/checking only | production API/schema authority |
| `30_FERRAMENTAS_01_VISUAL_AUTHORITY_ferramentas.html` | Tool facts and ficha presentation clues | top-level Ferramentas destination |
| `31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html` | movement workspace, History, filter/calendar ideas | obsolete movement vocabulary or stock semantics |
| `0_ASSET_*.css/js` | visual proportions/tokens/interactions worth studying | direct reuse as the new canonical design system |

## Extraction rule

For every legacy element ask:

1. Does current DMO-MODULAR expose the same surface/action?
2. Is the behavior still inside dmo-beta-master scope?
3. Does it help the operator understand or execute the task?
4. Is it data supplied by the real application rather than invented mock data?

Only then promote it into the new design master.

## Classification vocabulary

When reconciling an old page, classify its elements as:

- **KEEP** — still correct and useful;
- **CHANGE** — concept is useful but structure/behavior must change;
- **REMOVE** — obsolete, invented, out of scope or duplicated;
- **ADD** — required by current authority but absent from the old page.

This classification should be completed before asking Open Design to redesign a page.
