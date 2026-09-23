# DMO Beta — Frontend Design Master

## Purpose

This is the single frontend-design handoff for rebuilding the DMO Beta UI with Open Design or another design agent.

It is **not** a request to reproduce the old pages.

The target is a new, coherent industrial UI built from the current DMO Beta behavior, while preserving useful operational information and interaction knowledge recovered from the legacy visual pages.

---

## 1. Source hierarchy

Use sources in this order:

### A. Current functional/structural truth
`diogo-o/DMO-MODULAR`

Use it to understand:

- which routes and surfaces really exist;
- which actions are actually available;
- which shared components already exist;
- access/navigation structure;
- current field contracts;
- contextual versus top-level surfaces.

### B. Canonical Beta behavior
`diogo-o/dmo-beta-master`

Use it to understand:

- what is in Beta scope;
- what each module must do;
- what must not be invented;
- cross-module boundaries.

### C. Legacy/unfinished visual evidence
`modules/Unfinished/`

Use it only to recover:

- useful visible information;
- operational grouping;
- interaction intent;
- field labels;
- table/filter concepts;
- useful density;
- old workflows that still match current authority.

Do **not** treat its layout, navigation, permissions, fake data, old capabilities or old module structure as final authority.

### D. This repository
`beta-design`

This master and the module briefs are the final design-facing synthesis.

If a legacy mockup conflicts with DMO-MODULAR or canonical Beta authority, the legacy mockup loses.

---

## 2. Design objective

Create a **new DMO Beta visual system**, not a polished copy of the unfinished HTML.

The result should feel:

- industrial;
- compact;
- precise;
- fast to scan;
- designed for repeated daily use;
- appropriate for desktop and industrial tablets;
- visually calm;
- modern without becoming consumer-app-like.

Avoid:

- large decorative cards;
- excessive empty space;
- dashboard decoration with no operational value;
- giant headings;
- marketing-style layouts;
- hiding important facts behind unnecessary interactions;
- turning every group into a separate floating card.

The application handles dense operational information. Density is a feature when hierarchy remains clear.

---

## 3. Global shell

### Keep

- BA/DMO identity;
- authenticated user identity;
- effective navigation;
- clear current destination;
- logout;
- distinct ADMIN and USER environments.

### Change

Legacy shell visuals may inspire proportions, but the shell must be redesigned around the current DMO-MODULAR navigation model.

### Remove

- navigation items that do not exist in current Beta;
- role/profile labels used as permission truth;
- top-level Ferramentas navigation.

### Add / preserve from current system

Normal USER destinations are derived from actual effective access.

Typical Beta visible destinations:

- Job On;
- Controlo;
- Boquilhas.

Ferramentas stays contextual.

Controlo Create and Controlo Approve may share one visible destination.
Job On View and Job On Create may share one visible destination.

---

## 4. Login

### Source evidence

Legacy:
`modules/Unfinished/12_LOGIN_01_VISUAL_AUTHORITY_login.html`

Current:
`DMO-MODULAR/src/DMO.Web/Pages/Login.cshtml`

### Keep from legacy

- strong BA/DMO identity;
- simple focused login composition;
- password visibility affordance can be retained if implemented accessibly;
- restrained split/brand treatment may be reused as inspiration.

### Keep from current implementation

Authentication inputs are structurally:

- E-mail for administration;
- employee/company number for operator;
- password.

The user must not enter both identity types simultaneously.

### Remove

- fake "test environment" messaging unless the runtime explicitly provides it;
- redirect logic inferred from the entered e-mail;
- any visual implication that profile text determines access.

### Design target

One focused login screen with clear distinction between the two accepted identifiers without making the form feel technical or confusing.

---

## 5. Administration

### Source evidence

Legacy:
`modules/Unfinished/13_ADMIN_01_VISUAL_AUTHORITY_admin.html`

Current DMO-MODULAR:

- `/Administration`
- Users
- Templates

### Keep

Useful legacy concepts:

- dense user list;
- search/filtering;
- visible active/inactive state;
- user edit;
- password reset;
- template assignment;
- compact template list + template detail pattern.

### Change

The unfinished Admin contains obsolete/invented areas.

Design the Admin around the **real current DMO-MODULAR administration capabilities**, not the mockup tabs.

### Remove unless separately supported by current authority

- "Aplicações" management from the old mockup;
- old capability chips as if they were the current access model;
- broad global audit workspace shown in the unfinished mockup;
- old module names such as separate Peso navigation when current access model does not expose them that way.

### Current primary Admin information architecture

- Administration landing;
- Users;
- Access Templates.

The design may make these more efficient, but must not invent Admin capabilities.

---

## 6. Job On

### Source evidence

Legacy:
`modules/Unfinished/20_JOB_ON_01_VISUAL_AUTHORITY_job-on.html`

Current DMO-MODULAR includes separate real surfaces for:

- consult/search;
- create;
- edit;
- duplicate;
- contextual Tool selection/create;
- production history/open.

### Primary concept

Job On should feel like **one production workspace**, even if implementation uses multiple routes.

The redesign should visually unify those routes.

### KEEP

Operationally useful information:

- Referência;
- production number;
- machine/line;
- production date where current contract exposes it;
- CM;
- MF;
- BQ;
- existing productions/history;
- explicit source selection for duplication;
- contextual Tool information.

### CHANGE

The unfinished Job On contains much more future/legacy process than Beta needs.

Compress the Beta surface into a clear hierarchy:

1. production identity/context;
2. CM / MF / BQ Tool contexts;
3. related existing productions/history;
4. available actions.

Create/Edit/Duplicate should reuse the same visual grammar.

Tool selection should appear as a contextual flow, drawer/dialog/panel or equivalent—not as an unrelated page.

### REMOVE

Do not carry forward legacy/future blocks not in Beta, including:

- full Job On lifecycle;
- verification catalogue/occurrences;
- revision workflow;
- large manual-family sheet concepts;
- invented technical fields;
- duplicated Controlo or Boquilhas editing.

### ADD / emphasize

- clear explicit Tool selection;
- no auto-selection even for one Tool result;
- zero-result → create Tool flow when authorized;
- preserve unsaved Job On state;
- clear duplicate-source preview;
- historical source may be any explicitly selected source, not automatically latest;
- read-only related Controlo/Boquilhas/document statuses when supplied.

### Design direction

Prefer a compact work sheet over a stack of cards.

CM/MF/BQ should read as three related production Tool contexts, with consistent summary/picker behavior.

---

## 7. Controlo

### Source evidence

Legacy:

- `21_CONTROLO_01_VISUAL_AUTHORITY_controlo.html`
- `22_PESO_OPERADOR_01_VISUAL_AUTHORITY_peso-operador.html`
- `22_PESO_OPERADOR_02_VISUAL_AUTHORITY_PRINT_peso.html`
- `23_PESO_RESPONSAVEL_01_VISUAL_AUTHORITY_peso-responsavel.html`
- `24_PEGAMENTOS_01_VISUAL_AUTHORITY_pegamentos.html`

Current authority combines Create/Approve capabilities into one visible Controlo destination where access permits.

### Primary information architecture

Controlo should be one coherent workspace with related surfaces:

- Peso;
- Comparação;
- Pegamentos;
- Folha;
- Resumo;
- review/approval mode where permitted.

The user should always understand which production/Tool context they are controlling.

### KEEP from old pages

Recover useful operational presentation patterns:

- dense measurement tables;
- clear CM-by-CM results;
- visible weight/capacity information;
- comparison of current and previous control;
- Pegamentos component grouping;
- clear approval/review queue concepts;
- print/document awareness where still relevant.

### CHANGE

Old "Operador" and "Responsável" pages should not become two unrelated design systems.

Build one canonical Peso presentation:

- editable mode for Create;
- read/review mode for Approve.

The visual order, terminology and facts should remain consistent across modes.

### REMOVE

- fixed row counts inherited from the mockups;
- role-based permission assumptions;
- automatic previous-record selection;
- duplicated production identity entry;
- UI-owned formulas;
- anything that implies warnings are decisions;
- old fields not supported by current Beta contracts.

### ADD / emphasize

#### Production context

Persistent compact context:

- Referência;
- production;
- machine/line;
- processo when supplied;
- CM and relevant Tool context.

#### Peso

- variable measurement rows;
- add/remove;
- water temperature;
- published inputs;
- individual CM results;
- capacity/volume result;
- glass-weight result;
- warning state;
- explicit previous Peso selection;
- submit/review state.

Individual results must stay visible even when averages exist.

#### Pending association

`Job On por associar` is a legitimate state.

Design it as an actionable state—not an error page and not something the UI silently "fixes".

#### Comparação

Show current and selected previous Peso clearly enough to understand the relationship.

If stale, make that obvious and provide the supplied rebuild action.

#### Pegamentos

Use clear CM / BQ / MF grouping only for applicable contexts.

Support variable rows.

Warnings/tolerance states must be understandable without relying only on color.

Missing optional Pegamentos is normal.

#### Folha / Resumo

Keep them conceptually distinct.

Their availability states should be visible without pretending a missing optional output is a failure.

#### Approve

Reuse the same Peso/Folha representation in review mode.

Add:

- pending list;
- filters;
- explicit decisions;
- approve;
- reject;
- reopen;
- audit/history.

Do not allow the visual language to imply automatic approval from calculation results.

---

## 8. Ferramentas contextual

### Source evidence

Legacy:
`modules/Unfinished/30_FERRAMENTAS_01_VISUAL_AUTHORITY_ferramentas.html`

Current:
`DMO-MODULAR/src/DMO.Web/Pages/Ferramentas/Tool.cshtml`
plus the shared ToolPicker used inside Job On.

### KEEP

Useful Tool facts where supplied:

- type;
- reference;
- lot;
- machine/line compatibility;
- processo;
- quantity where relevant;
- current usage/context.

### CHANGE

The old Ferramentas page must not become a normal Beta application destination.

Design Ferramentas as:

- picker/search interaction;
- compact summary;
- contextual Tool ficha;
- create-missing-Tool flow.

### REMOVE

- top-level Ferramentas navigation;
- full future Ferramentas lifecycle;
- private Tool registries inside other modules.

### ADD / emphasize

- explicit selection;
- ambiguous candidates stay separate;
- one result still requires click/confirmation;
- contextual ficha can show usage/history read models;
- cancel returns to origin unchanged.

---

## 9. Boquilhas

### Source evidence

Legacy:
`modules/Unfinished/31_BOQUILHAS_01_VISUAL_AUTHORITY_boquilhas.html`

### Primary workspace

Boquilhas needs to make three things immediately understandable:

1. which BQ aggregate/context is open;
2. current repair-flow quantities/state;
3. what movement the operator is recording.

### KEEP

Useful legacy concepts:

- selected BQ summary;
- compact quantity/balance presentation;
- movement entry;
- recent movements;
- full History;
- filters;
- repairer;
- calendar/date filtering where it genuinely improves the workflow;
- single-click select / double-click open patterns.

### CHANGE

Rebuild around the canonical movement vocabulary and current aggregate model.

Production-linked and standalone flows should share the same visual grammar.

### REMOVE

- obsolete movement types;
- "Editar" as movement type;
- fake per-piece BQ identity;
- Armazém-style stock semantics;
- automatic correction of discrepancies;
- mandatory PDF assumptions;
- settings/Admin areas not in Beta.

### Movement vocabulary

Exactly:

- Início;
- Saída;
- Entrada;
- Irreparável.

Editing is an action on an existing movement.

### ADD / emphasize

- distinguish business date from recorded/audit timestamp;
- excess Entrada remains visible;
- negative balance remains visible;
- repairer choice on external Saída;
- edit shows preserved audit/history;
- close/reopen keeps the same aggregate/history;
- standalone use must not visually fabricate a Job On.

---

## 10. Shared components to design

Open Design should produce a coherent reusable family for:

### ProductionContextStrip
Compact read-only production identity/context.

### ToolPicker
Search, zero/one/many results, explicit selection, create missing Tool, cancel/return.

### ToolSummaryRow
Dense canonical Tool facts.

### DenseDataTable
Operational table with:

- compact rows;
- selected row;
- hover/focus;
- filtering;
- loading;
- empty;
- error;
- optional double-click open.

### RecordStatus
Status with text + visual indicator; never color-only.

### AvailabilityState
For generated/not-generated/awaiting approval/unavailable/missing/not-applicable/lookup-failed.

### MeasurementRows
Dense repeatable numeric rows with stable scanning and add/remove controls.

### DecisionBar
Consistent primary/secondary/danger actions and pending/disabled states.

### AuditTrail
Actor/time/action/before-after presentation from supplied facts.

---

## 11. State matrix

Every major surface must include designs for the states it can realistically enter.

At minimum consider:

- loading;
- ready;
- empty;
- lookup failed;
- unavailable;
- permission denied;
- saving;
- submitting;
- validation error;
- stale;
- conflict;
- read-only;
- disabled action with reason.

Do not use one generic "nothing here" treatment for all of these.

---

## 12. Open Design instruction

When this repository is provided to Open Design:

### Do

- redesign substantially;
- use DMO-MODULAR structure as the current implementation reality;
- use the legacy files as evidence, not templates;
- preserve operational information density;
- create a reusable design system;
- create coherent desktop/tablet layouts;
- show real task states;
- keep terminology Portuguese (Portugal);
- make actions and hierarchy obvious;
- favour efficient operator workflows over decorative presentation.

### Do not

- clone the HTML/CSS in `modules/Unfinished`;
- preserve obsolete navigation merely because it exists in old screenshots;
- introduce new domain concepts;
- invent modules;
- merge distinct workflows just to simplify a mockup;
- make Ferramentas a top-level destination;
- design a generic SaaS dashboard;
- use huge cards for every section;
- hide primary industrial information behind multiple clicks;
- treat role labels as permissions.

---

## 13. Expected design output

The first design pass should cover:

1. Login;
2. USER shell/navigation;
3. Job On consult;
4. Job On create/edit;
5. Job On duplicate/source selection;
6. contextual Tool picker + Tool ficha;
7. Controlo landing/workspace;
8. Peso editable;
9. Peso review/approve;
10. Comparação;
11. Pegamentos;
12. Folha/Resumo availability;
13. Boquilhas active aggregate/movement entry;
14. Boquilhas History;
15. Administration Users;
16. Administration Access Templates.

For each, produce at least:

- normal/ready state;
- one relevant empty/error state;
- one narrow/tablet adaptation where the page is operationally important.

The objective is not pixel fidelity to the unfinished pages.

The objective is a new frontend that communicates the same valid operational work using the current DMO Beta model.
