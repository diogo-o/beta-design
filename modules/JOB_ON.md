# Job On — Frontend Brief

## Purpose

Compact production-context workspace for one concrete production occurrence.

## Primary screen

The main Job On surface should prioritize, in one compact sheet:

- Referência;
- Número de produção;
- Máquina/Linha;
- Processo when supplied;
- CM;
- MF;
- BQ.

CM/MF/BQ are optional Tool contexts.

Avoid importing the complete future Job On form into Beta.

## Core actions

Depending on published access/actions:

- search by Referência;
- inspect available productions;
- explicitly open one Job On;
- create;
- edit;
- duplicate from an explicitly selected historical source;
- select/change CM, MF and BQ through the shared Tool flow;
- open contextual Tool detail where allowed.

## Reference / production search

Searching a reference should lead to a compact history/list of matching productions.

The operator chooses the production explicitly. Do not auto-open the newest result.

## Duplicate

Duplication is assisted creation.

UI sequence:

1. choose source explicitly;
2. preview enough source context to avoid mistakes;
3. start a new Job On from that source;
4. retain copied Tool selections until the operator changes them.

Do not present duplication as revision/history editing.

## Tool contexts

Each Tool field uses the shared ToolPicker.

Never infer the Tool from displayed reference/lot/machine text.

Missing Tool may expose `Criar ferramenta` when that action is authorized. Returning from create must restore the Job On draft.

## Related information

Job On may show read-only status/availability for related:

- Controlo;
- Boquilhas;
- documents.

Keep these as projections/links/statuses. Do not embed a second copy of those workflows inside Job On.

## View vs Create

Job On View and Job On Create may share this screen.

The visible destination remains one Job On destination; actions change according to supplied access.

Button visibility is not the authorization mechanism.

## Key UX states

Support explicitly:

- loading reference history;
- no productions found;
- lookup failed;
- read-only view;
- editable create/edit;
- Tool picker open/return;
- duplicate preview;
- stale/conflict on save where supplied;
- permission denied for disallowed action.
