---
title: Mobile app
description: Notes on the Flutter client, BLoC state management, HTTP handling, and observability.
---

The patient app is built in Flutter and organized around feature areas. BLoC instances coordinate feature state and repository calls. Named routes connect the main screens.

## Request path

A shared HTTP handler adds the current bearer token and records request signals through Firebase Performance, Analytics, and Crashlytics. Repositories call either the legacy care API or the NestJS app API, depending on the operation.

## Sign-in and platform services

The app supports email, Google, Facebook, and Apple sign-in. Firebase services support authentication, messaging, crash reporting, analytics, performance, and remote configuration.

[Review the product areas](/docs/product-areas/) or [engineering decisions](/docs/decisions/).
