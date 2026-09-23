# Boquilhas — Frontend Brief

## Purpose

Operational BQ external-repair quantity workflow.

It is not:

- Tool master management;
- Job On planning;
- Armazém stock/location;
- per-piece tracking.

## Main workspace

Prioritize:

- selected BQ context;
- compact aggregate summary;
- available / in repair / irreparable / exceptional-return facts where supplied;
- movement entry;
- recent movements;
- observations/context;
- close action where allowed.

Support both:

- production-linked flow;
- standalone flow without Job On.

Do not invent a fake Job On for standalone use.

## Tool selection

Use the shared contextual Tool flow for BQ Tool search/select/create.

Creation of a Tool returns to Boquilhas; it does not turn Boquilhas into Tool authority.

## Movement actions

The write movement vocabulary is exactly:

- Início;
- Saída;
- Entrada;
- Irreparável.

`Editar` is an action on an existing movement, never a movement type.

Movement form should expose only fields relevant to the selected movement/action, including supplied business date, quantity, repairer where required and observations/context.

## Dates

Keep these concepts distinct in the UI when both are shown:

- business date — operational date;
- recorded timestamp — immutable audit receipt time.

Do not present editing business date as changing the audit timestamp.

## Repairer

For external Saída, show/select the canonical repairer supplied by the backend contract.

A suggestion may be prefilled only as a suggestion where allowed; the final human choice remains visible.

## Discrepancies

Excess Entrada and negative balance are visible operational facts.

Do not silently clamp, normalize, delete or convert them into an automatic blocking error.

Use warnings/status treatment without hiding the actual entered quantity.

## Edit and audit

Editing a movement is an edit of that movement with before/after history.

Do not render the edit as a second quantity movement.

Audit facts come from backend data.

## History

Provide a dense full History view with useful supplied filters, such as:

- reference;
- lot;
- line;
- business date/period;
- movement type;
- repairer;
- active/closed state.

Recommended interaction:

- single click selects;
- double click opens the aggregate.

## Close / reopen

Close and reopen act on the same aggregate.

History remains accessible after close.

Reopen should visibly preserve previous close/audit history.
