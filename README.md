# DMO Beta — Frontend Design Authority

This repository contains only the information needed to design and implement the **DMO Beta frontend**.

It is intentionally **not** a second product specification, backend repository, database model, or historical archive.

## Authority

Frontend work must remain compatible with:

1. `diogo-o/dmo-master` (`dmo-modular`) — global DMO authority.
2. `diogo-o/dmo-beta-master` — canonical Beta scope and behavior.
3. `diogo-o/DMO-MODULAR` — implementation target.
4. This repository — frontend-facing presentation authority distilled from the sources above.

If this repository conflicts with canonical domain/access/backend authority, the canonical upstream authority wins and this repository must be corrected.

## Beta frontend surfaces

- Job On
- Controlo — Create
- Controlo — Approve
- Boquilhas
- contextual Ferramentas / Tool picker
- shared USER shell, navigation, tables, states and reusable operational components

Ferramentas is contextual in Beta. Do **not** invent a top-level Ferramentas destination.

## Start here

1. `FRONTEND_RULES.md`
2. `SHELL_AND_NAVIGATION.md`
3. the relevant file under `modules/`

## What belongs here

Keep only frontend-relevant facts:

- visible information;
- screen structure;
- user actions;
- interaction rules;
- loading/empty/error/permission/conflict states;
- responsive/tablet behavior;
- shared component behavior;
- which facts/actions must come from the backend.

## What does NOT belong here

Do not add:

- SQL or migrations;
- repository/service implementation;
- persistence design;
- backend endpoint invention;
- formula ownership;
- canonical identity creation logic;
- CI/build plans;
- old audit reports;
- historical implementation transcripts;
- duplicated product authority.

A frontend fixture is allowed only as a **provisional presentation contract**. It must not become backend, persistence, identity or authorization authority.

## Core frontend principle

The frontend presents facts and asks for explicit human choices.

It must not silently infer industrial decisions, Tool identity, production relationships, access rights, approval outcomes, previous records, or missing backend behavior.
