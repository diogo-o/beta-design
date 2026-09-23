# Ferramentas — Contextual Frontend Brief

## Beta role

Ferramentas is a shared contextual flow, not a top-level Beta module screen.

It provides:

- Tool search;
- explicit selection;
- compact Tool summary/detail;
- creation of a missing Tool when authorized;
- return to the originating workflow.

## ToolPicker

Search results may show supplied metadata such as:

- Tool type;
- Referência;
- lote;
- máquinas/linhas;
- processo;
- quantity/total where applicable.

The operator always explicitly selects the Tool.

Never auto-select because only one candidate exists.

## Zero result

When allowed:

- show a clear no-result state;
- offer `Criar ferramenta`;
- preserve the origin draft;
- after successful create, return with the canonical Tool selected.

Cancel returns to the origin without changes.

## Contextual Tool detail

A Tool summary/ficha can be opened from Job On, Controlo or Boquilhas when a real Tool reference is already present and access allows it.

Do not create a `/Ferramentas` destination merely for symmetry.

## Boundary

The frontend may display Tool facts supplied by Tool authority.

It must not create local module-specific copies of Tool master data or infer compatibility rules that were not supplied.
