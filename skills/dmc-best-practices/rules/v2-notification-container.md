---
title: Use NotificationContainer Not NotificationProvider
impact: MEDIUM
impactDescription: NotificationProvider is deprecated in DMC v2.x
tags: notifications, migration, v2, deprecated, container
---

## Use NotificationContainer Not NotificationProvider

`NotificationProvider` is deprecated in DMC v2.x. Use `NotificationContainer` instead for the notification system.

**Incorrect (deprecated NotificationProvider):**

```python
import dash_mantine_components as dmc

# v1.x style - DEPRECATED
app.layout = dmc.MantineProvider([
    dmc.NotificationProvider(position="top-right"),  # OLD API
    dmc.Container([...]),
])
# Shows deprecation warning, will be removed in future versions
```

**Correct (NotificationContainer):**

```python
import dash_mantine_components as dmc

# v2.x style - CORRECT
app.layout = dmc.MantineProvider([
    dmc.NotificationContainer(position="top-right"),  # NEW API
    dmc.Container([...]),
])
```

**NotificationContainer props:**

```python
dmc.NotificationContainer(
    position="top-right",       # Position on screen
    autoClose=5000,             # Auto-close after 5 seconds
    limit=5,                    # Max visible notifications
    zIndex=1000,                # Stack order
    containerWidth=440,         # Width in pixels
    notificationMaxHeight=200,  # Max height per notification
)
```

**Position options:**

| Position | Description |
| --- | --- |
| `top-right` | Top right corner (default) |
| `top-left` | Top left corner |
| `top-center` | Top center |
| `bottom-right` | Bottom right corner |
| `bottom-left` | Bottom left corner |
| `bottom-center` | Bottom center |

**Showing notifications:**

```python
from dash import Input, Output, callback
import dash_mantine_components as dmc

@callback(
    Output("notifications-container", "children"),
    Input("show-notification-btn", "n_clicks"),
    prevent_initial_call=True,
)
def show_notification(n):
    return dmc.Notification(
        title="Success!",
        message="Your action was completed.",
        color="green",
        icon=DashIconify(icon="tabler:check"),
        action="show",
        autoClose=5000,
    )
```

**Notification with action buttons:**

```python
dmc.Notification(
    title="Confirm Action",
    message="Are you sure you want to proceed?",
    color="blue",
    action="show",
    autoClose=False,  # Don't auto-close
)
```

**Programmatic notification control:**

```python
# Show notification
dmc.Notification(id="my-notif", action="show", ...)

# Hide specific notification
dmc.Notification(id="my-notif", action="hide")

# Update existing notification
dmc.Notification(id="my-notif", action="update", message="Updated message")
```

**Multiple notification containers (rare):**

```python
# If you need different positions for different notification types
dmc.NotificationContainer(id="success-notifs", position="top-right")
dmc.NotificationContainer(id="error-notifs", position="bottom-right")
```

Reference: <https://www.dash-mantine-components.com/components/notification>
