# USER Shell and Navigation

## Visible Beta destinations

The normal USER navigation can expose only effective, available and routed non-contextual destinations.

Expected Beta destinations:

- Job On
- Controlo
- Boquilhas

Ferramentas is contextual only and must not appear as a normal top-level destination.

## Shared destinations, separate permissions

One visible destination may represent multiple backend capabilities:

```text
Job On View
Job On Create
→ Job On

Controlo Create
Controlo Approve
→ Controlo
```

Do not duplicate navigation entries just because permissions are distinct.

Do not merge the permissions merely because the destination is shared.

## Navigation is projection, not authorization

The frontend renders backend-resolved effective access.

It must not create its own permission system or infer access from:

- role label;
- Template name;
- hidden buttons;
- current URL;
- previous successful navigation.

Direct route/action authorization remains backend-enforced.

## Landing

For an authenticated USER:

- use the valid configured landing destination when supplied;
- otherwise use the first valid destination in the resolved presentation order;
- if no valid destination exists, show the no-access destination.

For unauthenticated sessions, use Login.

ADMIN is a separate application area and must not be mixed into the USER shell merely for navigation convenience.

## Shell priorities

The USER shell should be quiet and operational:

1. application identity / current user context;
2. compact primary navigation;
3. current destination;
4. optional contextual actions;
5. main work surface.

Avoid dashboard decoration that does not help the current task.

## Production context

Where a screen is tied to a Job On, use a compact, persistent Production Context strip with supplied facts such as:

- Referência;
- Produção;
- Máquina/Linha;
- Processo;
- optional CM;
- optional MF;
- optional BQ.

The strip is read-only context. It must not become a second editor for Job On or Tool facts.
