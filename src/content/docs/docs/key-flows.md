---
title: Key flows
description: How patient registration, appointments, prescriptions, and reminders fit together.
---

## Registration and sign-in

Patients can create an account and sign in with email, Google, Facebook, or Apple. Authenticated requests use a bearer token managed by the mobile client.

## Booking an appointment

The patient searches for a provider or clinic, reviews available details, then creates and manages an appointment. Appointment reminders are handled by scheduled backend work.

## Prescription and reminder

The patient reviews a prescription and its schedule. Backend jobs calculate due alerts, create notification records, and deliver them. The patient can confirm a dose in the app; eligible records later expire according to their schedule.

See [notifications and scheduled work](/docs/notifications/) for the system sequence.
