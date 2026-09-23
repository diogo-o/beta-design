# Codex Frontend Design Master Review

## Review baseline and method

This review was performed against the remote `main` tips verified on 2026-09-23:

| Repository | Reviewed commit |
|---|---|
| `diogo-o/beta-design` | `200464d0e990a0e5c393d301392da9a00b6b2e88` |
| `diogo-o/DMO-MODULAR` | `2c568aab04ec5f7e541659d09ac04c52f4908214` |
| `diogo-o/dmo-beta-master` | `78da49248f6cf7a8cbe4ddd946f3c38abbaf322f` |

The committed `DMO-MODULAR` tree was reviewed rather than its working tree because the local checkout contained unrelated, uncommitted Controlo verification work. Every file in `beta-design`, including every file under `modules/Unfinished/`, was inventoried and inspected. No source file was changed by this review.

## 1. Executive summary

`beta-design` has a strong foundation: it clearly rejects blind reproduction of the old HTML, correctly treats Ferramentas as contextual, preserves explicit human selection, separates warnings from decisions, promotes shared components, and identifies the main Beta work areas. Those are material improvements over handing the legacy pages directly to a design agent.

It is not yet safe to use as the authoritative Open Design input. Five blocking issues remain:

1. **The authority order is contradictory.** `README.md:11-16` places global and Beta authority above implementation, while `FRONTEND_DESIGN_MASTER.md:15-59` labels `DMO-MODULAR` as source A and “current functional/structural truth” without a decision-type conflict rule. Canonical Beta explicitly says `DMO-MODULAR` owns implementation state only (`dmo-beta-master/AUTHORITY.md:38-42`).
2. **Current implementation and target design are mixed.** The master presents Job On, Controlo, Boquilhas and navigation together without marking which surfaces are committed, production-visible, canonical targets, or absent. At the reviewed `DMO-MODULAR` commit, the Module availability list is empty (`src/DMO.Application/Access/ModuleRegistrations.cs:21-27`) and the destination route registry has zero live registrations (`src/DMO.Web/Navigation/DestinationRouteRegistrations.cs:8-23`). Therefore no normal USER operational destination is currently projected, despite committed Job On and Controlo pages.
3. **A binding layout conflict is unresolved.** `FRONTEND_RULES.md:114-124` and `FRONTEND_DESIGN_MASTER.md:626,672` require desktop/tablet adaptation. The accepted/current shared frontend contract instead fixes a 1366×768 desktop composition and prohibits breakpoint-driven structural reflow, table-to-card conversion, column hiding and action relocation (`DMO-MODULAR/docs/frontend/SHARED_FRONTEND_CONTRACT_FREEZE.md:30-50`). Open Design cannot satisfy both.
4. **Page-level information is incomplete.** Administration omits current invitation, reset, resend, activation, deletion, Template assignment/order/landing and concurrency behavior. Controlo omits the implemented `Controlo Create → Definições` surface. Pegamentos, Peso documents, Comparison, approval and Boquilhas lack enough exact interaction/state detail to prevent invention.
5. **Legacy source hygiene is unsafe.** The directory is named `modules/Unfinished`, page filenames contain `VISUAL_AUTHORITY`, and assets are named `CANONICAL_DESIGN_SYSTEM` and `JOB_ON_REDESIGN`. Those names contradict `LEGACY_SOURCE_MAP.md:3-5` and make accidental promotion likely.

The required classification is therefore **NEEDS DESIGN-AUTHORITY RECONCILIATION**.

## 2. Current authority model

### Intended decision ownership

The correct model is decision-type based, not a single undifferentiated ordered list:

| Decision class | Authority | Consequence for design |
|---|---|---|
| Global identity, relationship, access and domain invariants | `dmo-master`, as incorporated/referenced by `dmo-beta-master` | Beta/design cannot silently override it. |
| Exact Beta inclusion/exclusion, simplified workflows and required behavior | `dmo-beta-master/main` | Defines the target even where it is not implemented yet. |
| Routes, pages, fields, actions and components that exist now | `DMO-MODULAR/main` | Evidence of **CURRENT IMPLEMENTATION REALITY**, not product authority by itself. |
| Old information density, grouping, labels and interaction clues | renamed legacy source area | Evidence only; it loses every conflict. |
| Final frontend composition and visual requirements | `beta-design`, after reconciliation | May shape presentation, but cannot create domain behavior, access, identity or backend facts. |

This matches `dmo-beta-master/AUTHORITY.md:22-42`, `architecture/BACKEND_FRONTEND_MODEL.md:3-46`, and the legacy-loss rule already stated in `FRONTEND_DESIGN_MASTER.md:39-59`.

### Ambiguities and duplicated authority

- `README.md:11-16` and `FRONTEND_DESIGN_MASTER.md:15-59` describe different hierarchies. The latter can be read as allowing implementation to override Beta scope.
- `FRONTEND_DESIGN_MASTER.md:57` says this master and module briefs are the “final design-facing synthesis”, but does not say what happens when the master and a module brief differ.
- `FRONTEND_DESIGN_MASTER.md:224-231` calls committed Job On pages “real surfaces” without saying that their Modules/routes are not production-visible through navigation at this baseline.
- `FRONTEND_DESIGN_MASTER.md:310` calls the shared Controlo destination “current authority”; that is a canonical target rule, not current live navigation.
- `README.md:65` permits provisional fixtures but does not require conspicuous file-level classification, non-production location, owner, retirement trigger or prohibition from Open Design evidence.
- The master contains page requirements while module briefs repeat subsets with different precision. For example, Job On production date appears in `FRONTEND_DESIGN_MASTER.md:243-249` but not in `modules/JOB_ON.md:9-19`; the module brief lists Processo as a primary Job On fact even though canonical Beta says Processo is consumed/displayed from Tool authority, not a second Job On authority (`dmo-beta-master/modules/JOB_ON_LIGHT.md:57-69`).

### Conflict-resolution rule required

Add one normative rule near the repository entry point:

> For product behavior, Beta scope and canonical relationships, `dmo-beta-master` wins. For what is implemented today, the reviewed `DMO-MODULAR/main` commit wins, but implementation differences are recorded as deltas and do not redefine the target. Legacy material never wins. `beta-design` owns only the reconciled frontend presentation requirement. When two upstream authorities conflict, stop and record an owner decision; do not select the more convenient source.

Also define precedence inside `beta-design`: an authority index should own cross-cutting rules; page masters should own page content/sequence/states; shared component contracts should own generic behavior. Other files should link rather than restate those rules.

## 3. Repository structure assessment

### What is already sufficient

- `README.md` is a useful entry point and has strong anti-invention boundaries.
- `FRONTEND_RULES.md` correctly separates presentation from domain authority and distinguishes common states.
- `SHELL_AND_NAVIGATION.md` correctly preserves separate grants behind shared visible destinations and keeps ADMIN separate.
- The four module briefs provide a useful first consolidation for Job On, Controlo, contextual Ferramentas and Boquilhas.
- `FRONTEND_DESIGN_MASTER.md:615-676` gives Open Design helpful anti-generic-SaaS and density guidance.

### What is missing or structurally weak

| Area | Finding |
|---|---|
| Page purpose and visible information | High-level coverage exists, but exact Administration, Comparison, document, Pegamentos, approval and settings surfaces are incomplete. |
| User actions and sequence | Job On and Tool selection are reasonably described. Admin lifecycle, Peso document lifecycle, Controlo settings, Comparison rebuild, Boquilhas edit/close/reopen and approval conflict recovery need explicit sequences. |
| Reusable components | Good catalogue, but `ProductionContextStrip` is a target/contract and not a current shared partial. Current shared components also have more precise keyboard, disabled-reason, paging/sorting and fixed-layout rules than the master records. |
| States | Global state vocabulary is good. It is not mapped per page/action, so a design agent cannot know which states apply where. Document `versions-available` is omitted from the master component summary. |
| Read-only/editable modes | Peso Create/Approve is addressed. Job On View/Edit, submitted Peso, official document, frozen Tool context and audit/history read-only boundaries need page-specific matrices. |
| Production context | Concept is correct, but current Controlo renders a local strip and the shared implementation does not yet contain a `ProductionContextStrip` partial. |
| Navigation | Target rules are good; current availability/route-registration reality is missing. |
| Tablet/responsive | Present but conflicts with the binding fixed-desktop contract. |
| Contextual subflows | Tool flow is good. Missing-context recovery, return focus, permission-denied, failed-create and conflict outcomes need page mappings. |
| Backend dependencies | General anti-invention rule is good. Page masters must identify exact required supplied facts/actions without naming speculative endpoints. |

### Duplication and contradiction check

1. **Authority:** `README.md:7-16` conflicts with the source order in `FRONTEND_DESIGN_MASTER.md:13-59`.
2. **Responsive behavior:** `FRONTEND_RULES.md:114-124` and `FRONTEND_DESIGN_MASTER.md:626,672` conflict with the accepted fixed desktop contract in `DMO-MODULAR`.
3. **Job On fields:** production date is present in the master but absent from the module brief; Processo is phrased as if it could be a Job On field in the brief rather than a Tool-derived fact.
4. **Document states:** `modules/CONTROLO.md:87-95`, `FRONTEND_DESIGN_MASTER.md:577-578`, canonical Beta shared states and the current `AvailabilityState` component use overlapping but non-identical lists. `versions-available` must not disappear.
5. **Administration:** the master says “real current capabilities” but then lists only landing, Users and Access Templates (`FRONTEND_DESIGN_MASTER.md:176-213`), omitting current child routes/actions.
6. **Controlo:** the master and brief describe the target full workspace, but neither identifies the current implemented subset nor `Definições`.
7. **Responsive repetition:** README, master and rules all state tablet/responsive goals. Keep the resolved policy in one authority file and reference it elsewhere.

## 4. Legacy source inventory

Every item below is non-authoritative source evidence.

| File | Useful evidence | Primary danger |
|---|---|---|
| `0_ASSET_CANONICAL_DESIGN_SYSTEM.css` | tokens, compact controls, dense tables, focus/selection treatments | “CANONICAL” name and breakpoint/card rules look normative. |
| `0_ASSET_CANONICAL_INTERACTIONS.js` | keyboard-selectable lists and calendar interaction clues | local generic behavior is not the current shared component contract. |
| `0_ASSET_INTEGRATED_MOCKUP.css` | dense workspace proportions and table overflow ideas | card/grid breakpoints conflict with the current fixed-layout contract. |
| `0_ASSET_INTEGRATED_MOCKUP.js` | tab, selection and history-filter intent | hard-coded calendar/data and MCaliper behavior. |
| `0_ASSET_JOB_ON_REDESIGN.css` | Job On density, context hierarchy and production rail experiments | “REDESIGN” name, extensive breakpoints and many obsolete full-scope regions. |
| `0_ASSET_JOB_ON_REDESIGN.js` | explicit selection, history/open interaction and context switching clues | mock `currentJob`, `job_on_revision_id`, static calendar, obsolete modules and direct legacy links. |
| `0_ASSET_LOGO.png` | historical BA mark only | may be mistaken for approved brand artwork. |
| `0_ASSET_SHELL.css` | legacy shell proportions | responsive reflow and source-specific shell must not define the target. |
| `12_LOGIN_01_VISUAL_AUTHORITY_login.html` | focused brand/login composition and password reveal | one-email model and email-text redirect simulation (`:5`). |
| `13_ADMIN_01_VISUAL_AUTHORITY_admin.html` | dense Users table, filters and Template master/detail rhythm | obsolete Applications/Audit areas, capability chips and profile semantics. |
| `20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html` | production/history density and CM/MF/BQ grouping | full future lifecycle, revision model, planning, unrelated modules and legacy document controls. |
| `21_CONTROLO_01_VISUAL_AUTHORITY_controlo.html` | coherent control workspace, production context and availability clues | obsolete global navigation, MCaliper links and unsupported actions. |
| `22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html` | measurement row density, per-CM results, explicit previous selection and stale-comparison clue | client-side demo formula/data (`:702-725`), local reference master/settings and operator-profile authority. |
| `22_PESO_OPERADOR_02_VISUAL_AUTHORITY_PRINT_peso.html` | printable information hierarchy and traceability | can be mistaken for canonical application layout or mandatory PDF. |
| `23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html` | review queue, filters and explicit per-CM decisions | divergent Peso representation, role-specific authority and misplaced Definições. |
| `24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html` | CM/BQ/MF grouping, variable rows, costura/contra-costura, signed ovalização and warning presentation | browser database, client IDs/formulas, filesystem handles, import/export/reset and direct mail behavior (`:897-1021`, `:1739`, `:2284-2316`). |
| `24_PEGAMENTOS_03_DATA_CONTRACT_SNAPSHOT.json` | provenance example for old visible facts | invents `control_id`, `control_revision_id`, `job_on_revision_id`, calculation-engine/schema authority (`:2-13`) contrary to canonical identities. |
| `30_FERRAMENTAS_01_VISUAL_AUTHORITY_ferramentas.html` | Tool/list/lot/usage facts and compact ficha clues | top-level registry plus full verification, reset and deactivate lifecycle outside Beta Light. |
| `31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html` | aggregate summary, movement entry, history filters, repairer and select/open interaction | removed machine sidebar, stock/location vocabulary, obsolete movement types, correction/deletion, internal settings and mandatory-PDF implication (`:31-59`, `:71-85`). |

The inventory itself confirms that `LEGACY_SOURCE_MAP.md` is directionally correct but too brief: it classifies files, not the elements inside each page. Open Design would still have to interpret the legacy pages directly.

## 5. Page-by-page KEEP / CHANGE / REMOVE / ADD matrix

| Page | KEEP | CHANGE | REMOVE | ADD |
|---|---|---|---|---|
| Login | Focused composition, BA/DMO identity, password reveal if accessible. | Present e-mail and company number as mutually exclusive accepted identifiers; use current generic failure behavior. | E-mail-content redirect, fake delay/test messaging, profile-derived destination. | Loading/disabled state, validation for “exactly one identifier”, generic error, keyboard/focus behavior. |
| Administration | Dense Users list, search/filter concept, active state, compact Templates list/detail, reset action. | Replace capability chips with canonical Module composition; one effective Template per USER; role is presentation only. | Applications tab, broad Audit workspace, old module/profile model. | Current invitation create flow, resend invite, password reset, activate/deactivate, delete confirmation, optimistic concurrency, provider partial-failure feedback; Template order, landing, invalid/unavailable entries, assign/remove/reassign users and deletion impact. |
| Job On | Reference/production history, explicit record opening, compact production context, CM/MF/BQ grouping, contextual Tool information. | Reduce the full legacy sheet to Beta View/Create/Edit/Duplicate grammar; keep frozen context separate from current Tool projection. | Planning calendar/rail as product truth, revisions, full manual-family/tool dossier, verification catalogue, embedded Controlo/Boquilhas editing, obsolete top navigation. | Exact current routes/modes; production date; Tool zero/one/many selection; create/cancel return; duplicate preview and concurrency; current date-threshold acknowledgement and delete behavior marked as implementation reality; read projections marked target where supplied. |
| Controlo landing/workspace | Persistent production context, coherent section navigation, availability/status concepts, dense results. | One visible destination with distinct Create/Approve capabilities; distinguish current implemented subset from target Peso/Comparação/Pegamentos/Folha/Resumo/Approve. | MCaliper, old module navigation, direct legacy cross-page links, duplicated production editors. | A defined landing/mode selection pattern, permission combinations, empty/loading/error/conflict states, and the current `Definições` sub-surface pending canonical reconciliation. |
| Peso — Create/operator | Variable measurement rows, water temperature, per-CM results, add/remove, SAP reference clues, explicit previous selection, comparison-stale clue. | Backend-returned calculations and warnings; one canonical Peso presentation; explicit production/CM association. | Fixed/demo values and formulas, local reference master, local report directory/settings, profile-owned permissions, automatic/latest selection, direct send-email behavior. | Exact current inputs (temperature, Marisa/BQ volume, Punção/PU volume, two SAP references, row CM/weight), pending association and explicit association, missing CM recovery, stable row identity, at-least-one row, submitted read-only mode, save/calculate/submit separation, disabled reasons and conflict recovery. |
| Peso — print/document | Identification, per-CM results, current/previous comparison, traceability hierarchy. | Treat as an official or live derived representation of the structured record, never the application master. | Mandatory-PDF assumption, local path, unsaved/dynamic Tool values as official truth, print layout reused as app layout. | Availability/version/missing-file states; approved/frozen source requirement; attribution/decision history; exact official versus live rendering distinction. |
| Peso — Approve/responsible | Pending queue, filters, exact submitted facts, explicit Manter/Colocar de parte, approve/reject. | Consume the Create renderer in read/review mode; permissions come from `Controlo Approve`, not a “Responsável” page variant. | Separate field order/representation, Definições tab, editable submitted measurements, warning-derived decisions. | Reject note where required, reopen same `peso_id`, audit/history, conflict handling, persisted previous-Peso relation, optional confirmed send-to-production only when supplied. |
| Pegamentos | Applicable CM/BQ/MF groups, costura 0°, contra-costura 90°, signed ovalização, average, single-axis behavior, variable rows and warnings. | Consume saved Job On contexts and backend-supplied Tool/drawing nominal; render backend/domain evaluation rather than running a browser authority. | LocalStorage/IndexedDB, browser-generated IDs, client persistence/schema/formulas, Tool re-selection, filesystem handles, destructive reset/import/export, direct `mailto:`, UI-owned filename/path authority. | Missing-context correction, missing nominal = NotEvaluable, optional-absence state, exact tolerance/warning semantics, accessible non-color warnings, save/submit/read/history states and backend dependency list. |
| Ferramentas contextual | Type, reference, lot, compatibility, Processo, quantity, concise current usage/read history. | Picker/search, compact summary, contextual read-only ficha and authorized create-return flow. | Top-level destination, full verification/change/reset/deactivate lifecycle, private module registries. | Zero/one/many and failure states; explicit selection even for one; different lot = different `tool_id`; cancel/failure returns unchanged; canonical `tool_id` return and focus restoration. |
| Boquilhas | BQ aggregate summary, movement entry, recent movements, dense full History, date/repairer/type filters, single-click select/double-click open. | Reframe as collective external-repair quantity aggregate; production-linked and standalone flows share grammar. | Machine/production sidebar, stock/location/per-piece semantics, `Não reparadas`, `Corrigir contagem`, line changes/corrections/fechos as write movement types, delete movement, internal settings, mandatory PDF. | Exactly Início/Saída/Entrada/Irreparável; business date versus recorded timestamp; canonical repairer on external Saída; Saída/Irreparável constraints; excess Entrada and negative balance; edit with before/after audit; close/reopen same aggregate; no fake Job On. |

The legacy Pegamentos JSON snapshot is not a page. Keep it only as quarantined provenance; remove every schema/identity implication and add a warning that its identifiers are obsolete/non-canonical.

## 6. DMO-MODULAR alignment findings

### CURRENT IMPLEMENTATION REALITY

| Area | Committed reality at `2c568aab…` | Design-master consequence |
|---|---|---|
| Login/root | `/Login` has e-mail, company number and password (`Pages/Login.cshtml:9-33`); failures are generic and ADMIN/USER dispatch differs (`Login.cshtml.cs:73-107`). | Mostly captured; add exact states and do not inherit legacy redirect logic. |
| USER shell | Shared layout, identity, primary/secondary navigation and status announcement exist (`Pages/Shared/_Layout.cshtml:15-45`). Secondary navigation is always empty in the current shell service (`Frontend/Shell/ShellPresentationService.cs:14-34`). USER shell has no logout affordance, while the design target requires one. | Mark shell as current partial implementation. Do not present secondary navigation/logout as implemented. |
| Navigation availability | Module availability is empty and route registration is empty. Projection correctly requires granted + available + non-contextual + routed (`NavigationProjectionService.cs:56-90`). | “Expected destinations” are target/canonical, not currently live. |
| Administration | Landing plus Users and Templates exist. Users include list/create/edit, invitation, reset, resend, activate/deactivate, Template assignment and deletion. Templates include composition/order, landing, invalid/unavailable preservation, user assignment/reassignment/removal and delete effects. | Current Admin description is materially incomplete. |
| Job On | Razor surfaces exist at `/jobon`, `/jobon/create`, `/jobon/{id}`, `/edit`, `/duplicate`; APIs cover reference query, create, edit, duplicate and delete. Create/Edit expose reference, production number, machine, production date and CM/MF/BQ Tool selection; View separates frozen triple from live Tool facts. | Good target basis, but label it committed-not-live. Add date warning/delete/concurrency/current field details or explicitly declare them not part of the target. |
| Ferramentas | Contextual ficha at `/ferramentas/tools/{toolId}` plus Tool search/create APIs under Ferramentas policy; no top-level destination. | Alignment is strong. Do not leak endpoint/adaptor/opaque-key implementation details into design authority. |
| Controlo Create | `/controlo/create` implements production lookup, production strip, determined/pending/missing CM context, Peso inputs/rows/results, save/calculate/submit and a document seam (`Pages/Controlo/Create.cshtml:28-290`). | Master is too generic about the actual current fields and implemented subset. |
| Controlo Definições | `/controlo/create/definicoes` currently implements repairers, independent B1/B2/B3/C1/C2/C3 assignments, server PDF directory/check, e-mail lists and e-mail templates (`Pages/Controlo/Definicoes.cshtml:27-225`). | Entirely absent from `beta-design`; canonical Beta consolidation is also absent. This requires owner reconciliation, not silent adoption. |
| Controlo Approve | No page or endpoint in the reviewed tree. | Target requirement only. |
| Comparison, Pegamentos, Folha, Resumo | No current pages/flows beyond the Controlo document seam. | Target requirements only. |
| Boquilhas | No current page or endpoint. | Target requirement only. |
| Shared components | Current partials exist for common states, ToolPicker, ToolSummaryRow, DenseDataTable, RecordStatus, AvailabilityState, AuditTrail, MeasurementRows and DecisionBar. | Design against their accepted behavior; `ProductionContextStrip` remains a contract/target, not a current shared partial. |

### Current behavior missing from the design master

- Admin create-by-invitation, resend invitation, safe password reset and provider failure/recovery states.
- User activation/deactivation, delete, one-Template assignment/removal and optimistic version conflicts.
- Template module presentation order, optional landing, invalid/unavailable persisted entries, assign/reassign/remove users and fail-closed delete consequences.
- Job On production-date warning acknowledgement and delete action.
- Frozen Tool context versus live Tool projection on Job On View/Edit/Duplicate.
- Exact Controlo Create inputs/results and truthful pending association behavior.
- The complete implemented Controlo `Definições` surface.
- The fact that current navigation exposes zero operational destinations.

### Design-master requirements not currently supported

- Live USER navigation for Job On, Controlo or Boquilhas.
- Controlo landing, Comparison, Pegamentos, Folha, Resumo and Approve.
- Boquilhas aggregate/movement/history UI.
- Related Job On read projections for Controlo/Boquilhas/documents.
- A shared implemented `ProductionContextStrip`.
- USER-shell logout and useful secondary navigation.
- Full desktop/tablet design behavior as presently written.

### Implementation details that must not leak into design authority

- Minimal API endpoint names, JavaScript adapter attributes, opaque candidate maps and transport DTOs.
- Internal GUIDs/versions as primary human labels. Current View/Duplicate surfaces expose IDs/versions for implementation verification; canonical Beta says internal canonical IDs are not the primary human-facing label (`dmo-beta-master/modules/JOB_ON_LIGHT.md:161-172`).
- Current English Admin labels and provider-specific explanatory copy as immutable product language.
- The current empty registry/route composition as a target design requirement.
- Current local rendering defects, temporary seams or unimplemented placeholders.

## 7. dmo-beta-master alignment findings

### Correctly aligned

- Ferramentas remains contextual and has no top-level destination.
- Job On View/Create and Controlo Create/Approve remain separate grants behind shared destinations.
- Tool, previous Job On, previous Peso and approval decisions require explicit human choice.
- Job On is deliberately Light; full revision/manual-family/tool-lifecycle scope is excluded.
- Peso may truthfully be “Job On por associar”.
- Create and Approve operate on the same `peso_id`; Approve reuses the canonical presentation.
- Boquilhas uses a collective aggregate and exactly four write movement types.
- Warnings do not become decisions; frontend does not own formulas or canonical identities.

### Missing, ambiguous or contradictory

1. **Tool identity is under-specified.** The design material should state that `tool_id` is canonical, a different lot is a different Tool, and `cm_id`/`mf_id`/`bq_id` are historical production contexts rather than Tools (`contracts/IDENTITIES_AND_RELATIONSHIPS.md:84-100`).
2. **Job On Processo is ambiguous.** Canonical Beta says it is a displayed/consumed Tool fact, not a second Job On authority (`modules/JOB_ON_LIGHT.md:57-69`). The design brief can be read as an editable Job On field.
3. **Comparison lacks the cross-machine rule.** The same Tool may make a prior Peso valid across compatible machines; same-machine-only filtering is prohibited (`modules/CONTROLO_CREATE.md:137-154`).
4. **Pegamentos is too thin.** Required costura/contra-costura, signed ovalização, single-axis behavior, Tool nominal, ±0.20 corridor, boundary warning and NotEvaluable behavior are missing from the design master (`modules/CONTROLO_CREATE.md:156-181`).
5. **Documents are incomplete.** The master does not specify structured-record authority, approved/frozen output, historical rendering, versions, missing file versus not generated, or the official/live distinction (`contracts/DOCUMENTS_AND_FILES.md:9-20,108-177`).
6. **Boquilhas needs additional exactness.** Opening facts, constraint behavior, repairer selection, excess Entrada, edit audit and close/reopen reason/history need page-level treatment (`modules/BOQUILHAS.md:87-197`).
7. **The removed machine sidebar is not explicit.** Current shared authority says the Boquilhas machine sidebar is removed (`DMO-MODULAR/docs/frontend/SHARED_FRONTEND_CONTRACT_FREEZE.md:138-156`), while the legacy page makes it dominant.
8. **Controlo Definições is not consolidated in `dmo-beta-master`.** Current implementation includes it, but canonical Beta documents only mention repairers as Boquilhas-consumed vocabulary and explicitly exclude an internal Boquilhas settings tab. This must be resolved by the product/architecture owner before `beta-design` makes it target authority.
9. **Layout policy conflicts.** Canonical Beta broadly expects responsive/tablet presentation (`architecture/BACKEND_FRONTEND_MODEL.md:25-34`), while the accepted implementation contract fixes desktop geometry. A single binding target is required.

No unsupported top-level Ferramentas route, per-piece Boquilhas identity, automatic previous record selection, approval copy, or frontend-owned domain formula should be added.

## 8. Open Design readiness risks

If handed over today, Open Design is likely to:

- privilege files named `VISUAL_AUTHORITY` or `CANONICAL_DESIGN_SYSTEM` despite prose disclaimers;
- restyle the legacy HTML because the master lacks element-level extraction results;
- treat committed-but-unavailable routes as live navigation;
- invent a Controlo landing and transitions between target-only surfaces;
- omit implemented Admin and Controlo settings behavior;
- create a second Peso representation for Approve;
- infer Processo as Job On-owned editable data;
- invent Tool or historical-context identity from reference/lot labels;
- implement a same-machine-only previous Peso filter;
- move Pegamentos calculations/persistence into the client because the legacy page does so;
- reproduce the obsolete Boquilhas machine sidebar and correction/delete vocabulary;
- make document absence, missing file, lookup failure and not-generated look identical;
- choose either responsive reflow or fixed desktop arbitrarily;
- produce generic card-heavy SaaS dashboards because the legacy CSS repeatedly defines cards and responsive card grids;
- duplicate shared components because page/component ownership and current implementation status are not indexed in one place;
- misunderstand ADMIN/USER, Template modules and display role labels.

## 9. Recommended repository restructuring

Page-specific design masters are now justified. They would materially improve authority clarity because the current single master is simultaneously an index, product summary, legacy extraction note and page specification.

Recommended target structure:

```text
README.md
AUTHORITY_AND_CONFLICT_RULES.md
FRONTEND_DESIGN_MASTER.md          # short index and cross-page direction
FRONTEND_RULES.md                  # shared presentation rules only
SHELL_AND_NAVIGATION.md
CURRENT_IMPLEMENTATION_MATRIX.md   # reviewed commit, current vs target status

design/
  LOGIN_MASTER.md
  SHELL_MASTER.md
  ADMIN_MASTER.md
  JOB_ON_MASTER.md
  CONTROLO_MASTER.md
  CONTROLO_SETTINGS_MASTER.md       # only after canonical owner decision
  PESO_MASTER.md
  COMPARACAO_MASTER.md
  PEGAMENTOS_MASTER.md
  DOCUMENTS_MASTER.md
  FERRAMENTAS_CONTEXTUAL_MASTER.md
  BOQUILHAS_MASTER.md

legacy/
  README.md                         # NON-AUTHORITATIVE EVIDENCE banner
  MANIFEST.md                       # provenance + element-level classification
  pages/
  assets/
  snapshots/
```

Each page master should contain: purpose; authority references; current implementation reality; target requirement; visible facts; editable facts; actions; sequence; capability/action matrix; shared components; per-state matrix; read-only/frozen boundaries; backend-supplied facts/actions; legacy KEEP/CHANGE/REMOVE/ADD; and explicit visual freedom.

### Exact source-file hygiene changes

Move `modules/Unfinished/` out of `modules/` to `legacy/`. Rename all page files to remove `VISUAL_AUTHORITY`, for example:

```text
legacy/pages/login.legacy.html
legacy/pages/admin.legacy.html
legacy/pages/job-on.legacy.html
legacy/pages/controlo.legacy.html
legacy/pages/peso-create.legacy.html
legacy/pages/peso-document.legacy.html
legacy/pages/peso-approve.legacy.html
legacy/pages/pegamentos.legacy.html
legacy/pages/ferramentas.legacy.html
legacy/pages/boquilhas.legacy.html
```

Rename assets to remove normative words:

```text
legacy/assets/legacy-design-system.css
legacy/assets/legacy-interactions.js
legacy/assets/legacy-integrated-mockup.css
legacy/assets/legacy-integrated-mockup.js
legacy/assets/legacy-job-on-exploration.css
legacy/assets/legacy-job-on-exploration.js
legacy/assets/legacy-shell.css
legacy/assets/legacy-ba-logo.png
legacy/snapshots/pegamentos.obsolete-example.json
```

Add a visible banner at the top of every HTML source and a header comment in every CSS/JS/JSON source: `NON-AUTHORITATIVE LEGACY EVIDENCE — DO NOT USE AS CURRENT PRODUCT OR DESIGN AUTHORITY`. Keep the sources inert and outside production build/publish inputs.

## 10. Exact corrections required before Open Design

The following are required, in order:

1. Create `AUTHORITY_AND_CONFLICT_RULES.md` with the decision-type ownership table and explicit upstream-conflict escalation rule. Make README and master link to it instead of restating a different hierarchy.
2. Resolve the fixed-desktop versus desktop/tablet conflict with an owner decision. Update the master, rules, expected output and page masters to one policy.
3. Create `CURRENT_IMPLEMENTATION_MATRIX.md` pinned to reviewed SHAs. Mark every surface as `CURRENT AND LIVE`, `COMMITTED BUT NOT PRODUCTION-VISIBLE`, `TARGET ONLY`, or `OWNER RECONCILIATION REQUIRED`.
4. Record explicitly that the reviewed build has zero available operational Module registrations and zero destination route registrations; do not call Job On/Controlo/Boquilhas currently navigable.
5. Reconcile `Controlo Create → Definições` between `DMO-MODULAR` and `dmo-beta-master`. Decide whether it is Beta target authority; until then mark it `OWNER RECONCILIATION REQUIRED`.
6. Add the page-specific masters above. Begin with Admin, Job On, Controlo, Peso, Pegamentos, Ferramentas and Boquilhas; keep the top master as an index.
7. Expand Admin to the actual current lifecycle and Template behavior, including concurrency and failure states.
8. Correct Job On field ownership: production date is a Job On fact where supported; Processo is Tool-derived/read-only context. Decide and document current delete/date-threshold behavior as target or implementation-only delta.
9. Add exact Peso/Comparison input, result, pending-association, stale/rebuild, read-only submitted and conflict state matrices. Include the cross-machine previous-Peso rule.
10. Add exact Pegamentos measurement/evaluation requirements without adopting client-side persistence or formula ownership.
11. Add a document master covering application versus document representation, official/frozen/live output, availability/version states, historical context and missing-file behavior.
12. Add Boquilhas opening, movement, validation, discrepancy, edit/audit and close/reopen sequences. Explicitly ban the legacy machine sidebar, correction/delete vocabulary and internal settings.
13. Align the shared component catalogue with the accepted current contracts, including keyboard/focus rules, disabled reasons, sorting/filtering/paging ownership, `versions-available`, and `ProductionContextStrip` implementation status.
14. Move/rename the legacy directory and files exactly as described; remove `VISUAL_AUTHORITY`, `CANONICAL` and `REDESIGN` from legacy filenames.
15. Replace the one-line-per-page `LEGACY_SOURCE_MAP.md` with the reviewed element-level matrix or link it to the relevant page masters. Open Design should not need to open legacy source to learn what survives.
16. Run a final contradiction pass so each rule has one owner and all other files link to it. In particular, remove duplicate authority, responsiveness, state-list and navigation prose.

No backend implementation detail needs to be invented to complete these corrections. Where the design depends on an unavailable fact/action, name the required supplied fact/action and leave the interface as an explicit dependency.

## 11. Final readiness classification

**NEEDS DESIGN-AUTHORITY RECONCILIATION**

The repository is substantially better than an uncurated mockup archive, but the remaining issues are authority and handoff defects, not cosmetic gaps. Open Design currently cannot determine, without reverse-engineering, which surfaces are live, which are target-only, how the implemented Controlo settings fit canonical Beta, whether responsive reflow is permitted, or which detailed legacy behaviors survive. Dangerous legacy naming further undermines the written hierarchy.

After the sixteen corrections above—especially the authority rule, current/target matrix, layout decision, Controlo settings reconciliation, page masters and legacy rename—the repository should be suitable to become the frontend design master. It is not ready for Open Design before those corrections are complete.
