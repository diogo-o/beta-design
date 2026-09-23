# Controlo — Frontend Brief

Controlo is one visible destination with two separate capabilities:

- Create
- Approve

The UI should reuse the same record presentation instead of creating divergent Create and Approve representations.

## Shared production context

Keep Job On production context visible through the shared ProductionContextStrip.

Do not independently rebuild reference/production/machine facts inside each Controlo subsection.

## Create workspace

Create may include these Beta surfaces:

- Peso;
- Comparação;
- Pegamentos;
- Folha;
- Resumo;
- history/document availability where supplied.

Use compact tabs/sections rather than separate oversized dashboard cards.

### Peso

The Peso editor should support:

- variable measurement rows;
- add/remove row;
- stable row identity;
- water temperature input;
- other published calculation inputs;
- returned per-CM results;
- glass-weight results;
- warnings;
- optional SAP previous-production reference fields;
- explicit previous-Peso selection for Comparação;
- submit.

At least one measurement row remains.

The frontend displays calculation output returned by the authoritative calculation path. It does not become a second formula authority.

Individual CM results remain visible; an average must not hide an individual result.

### Pending Job On association

A truthful Peso may be shown as `Job On por associar`.

This is a valid operational state.

Do not invent or silently choose a Job On/CM merely to make the screen look complete. Later association is explicit and human-confirmed.

### Comparação

Previous Peso selection is explicit.

Never default to latest.

Show enough source/current context that the operator understands the pairing.

If current readings change after comparison build, present the Comparison as stale and require the published rebuild action before submission.

### Pegamentos

Present component sections as required by the supplied Job On context:

- CM;
- BQ;
- MF.

Support variable measurement rows and visible evaluation/warning state.

Missing optional Pegamentos is not an error.

If required Tool context is missing/invalid, show an actionable correction state. Do not silently choose a substitute Tool.

### Folha and Resumo

Treat Folha and Resumo as distinct outputs/surfaces even when visually adjacent.

Document/output availability must distinguish:

- available;
- not generated;
- awaiting approval;
- unavailable;
- missing;
- not applicable;
- lookup failed.

## Approve workspace

Approve opens the exact submitted record in shared read/review presentation.

Primary elements:

- pending/review list;
- filters;
- submitted Peso/Comparison/Folha facts;
- warnings;
- explicit per-CM decisions when supplied;
- approve;
- reject with note where required;
- reopen;
- audit/history;
- optional confirmed send-to-production action when supplied.

Submitted measurement facts remain read-only until an authorized reopen.

Warnings never pre-select or imply approve/reject.

## Reuse rule

Do not fork the Peso renderer for Approve.

Create owns the canonical editable presentation; Approve consumes it in read/review mode with different actions.
