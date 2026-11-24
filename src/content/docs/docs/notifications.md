---
title: Notifications and scheduled work
description: How scheduled jobs calculate prescription alerts and deliver patient notifications.
---

Several small scheduled jobs coordinate appointment reminders and prescription notifications.

1. A one-minute job calculates due prescription alerts.
2. Another one-minute job creates notification records from those alerts.
3. A sender delivers queued notifications through Firebase Cloud Messaging and emits live events over Socket.IO.
4. A two-hour job expires eligible prescription records.
5. Appointment reminders run on a five-minute schedule.

Splitting calculation, creation, delivery, and expiry gives each task a narrow responsibility. The [prescription timeline](/#prescription) shows the patient side of this flow.
