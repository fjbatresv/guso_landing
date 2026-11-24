---
title: Engineering decisions
description: Product context behind Guso’s mobile state, request, backend, and reminder architecture.
---

## Mobile state by feature

Feature-scoped singleton BLoCs keep related state and repository calls together across screens.

## Instrumented request handling

A shared HTTP handler centralizes bearer-token attachment and request observability.

## Thin backend modules

Feature modules delegate shared data and business work to providers in the core module.

## Small scheduled jobs

Prescription alert calculation, notification creation, delivery, and expiry are separate scheduled responsibilities.

## Flexible onboarding

Remote configuration can adjust onboarding content without requiring every content change to wait for an app release.

[See the mobile app architecture](/docs/mobile-app/) and [notification flow](/docs/notifications/).
