---
title: Security
description: A high-level view of authentication, private configuration, and safe public documentation.
---

The backend uses JWT authentication guards, and the mobile request handler attaches the patient’s bearer token to authenticated requests.

Operational credentials and environment configuration belong in private deployment systems. This public case study documents architecture conceptually and excludes secrets, service account details, private hosts, and patient data.

The public site also runs a sanitization check over source and built output. See [local development](/docs/local-development/) for the safe site workflow.
