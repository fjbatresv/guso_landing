---
title: Backend API
description: The NestJS service structure, shared data layer, authentication, and API documentation.
---

The NestJS backend exposes feature APIs for the patient app and web experience. Feature modules such as patients, doctors, catalogues, events, and content are thin controller layers.

## Shared data layer

The core module registers TypeORM entities and shared business providers. Feature modules import that layer rather than duplicating data access responsibilities. The database is MySQL.

## Authentication and API reference

JWT guards protect authenticated routes. The service can expose Swagger documentation for API exploration. Public documentation here describes concepts only; no private endpoint collection or deployment values are included.

[Read about the mobile request path](/docs/mobile-app/) and [security practices](/docs/security/).
