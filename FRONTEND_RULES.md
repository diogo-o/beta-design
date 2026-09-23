# Frontend Rules

## 1. Presentation is not domain authority

The frontend may render, collect input, preserve local draft state and orchestrate published actions.

It must not:

- mint canonical IDs;
- invent persistence relationships;
- infer Tool identity from labels;
- implement backend-owned formulas as a second authority;
- turn warnings into industrial decisions;
- synthesize actor/time/audit facts;
- infer permissions from role/profile labels;
- create production APIs from fixtures.

If a required live fact/action is missing, record a backend/interface dependency. Do not fake production behavior.

## 2. Dense operational UI

DMO is an industrial work application. Prefer:

- compact layouts;
- high information density;
- clear grouping;
- short labels;
- stable field positions;
- tables where comparison matters;
- visible production context;
- minimal decorative cards;
- minimal vertical scrolling for the main task.

Do not turn every fact into a large card.

## 3. Shared presentation states

Keep these states visually and semantically distinct:

- loading;
- ready;
- empty;
- lookup failed;
- unavailable;
- permission denied;
- saving;
- submitting;
- stale;
- conflict.

Important:

`empty != lookup failed != unavailable != permission denied`

An optional missing record/output is not automatically an error.

## 4. Human choice is explicit

Never silently choose when more than one valid operational record can exist.

Examples:

- Tool candidate;
- Job On production/source;
- previous Peso;
- Comparison pairing;
- repairer where operator choice is allowed;
- approval/rejection decisions.

Even one Tool search result still requires explicit selection.

## 5. Warnings stay warnings

Warnings may highlight:

- tolerance boundaries;
- unusual quantity;
- negative balance;
- stale Comparison;
- discrepancy;
- missing optional context.

Warnings do not automatically approve, reject, block, discard, clamp or repair data unless the authoritative contract explicitly requires blocking validation.

## 6. Unsaved state

When a flow temporarily leaves a form to select/create a Tool or repair missing context:

- preserve entered values;
- preserve row identities;
- preserve focus origin where practical;
- cancel returns unchanged;
- successful return applies only the explicitly selected/created result.

## 7. Tables

Operational tables should support, where relevant:

- compact rows;
- explicit keyboard focus;
- single click = select;
- double click = open when the owning screen defines it;
- filters without losing current context;
- distinct loading/empty/error states.

Selection must never silently trigger a domain mutation.

## 8. Status

Status cannot depend on color alone.

Always pair visual treatment with readable text/iconography.

## 9. Responsive target

Desktop and industrial tablet are primary.

On narrower screens:

- preserve the task sequence;
- keep critical production context visible;
- collapse secondary detail before primary inputs/actions;
- avoid horizontal page overflow when a contained scroll region is possible;
- do not replace dense operational content with huge mobile cards.

## 10. Shared components

Reusable frontend concepts include:

- ProductionContextStrip;
- ToolPicker;
- ToolSummaryRow;
- DenseDataTable;
- RecordStatus;
- AvailabilityState;
- AuditTrail;
- MeasurementRows;
- DecisionBar.

Shared components own generic presentation/interaction only. Feature modules supply facts, actions, rules and disabled reasons.
