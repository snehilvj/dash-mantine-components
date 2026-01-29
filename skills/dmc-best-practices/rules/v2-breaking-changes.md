---
title: DMC v2.x Breaking Changes
impact: MEDIUM
impactDescription: Key API changes when migrating from v1.x to v2.x
tags: migration, v2, breaking-changes, upgrade, compatibility
---

## DMC v2.x Breaking Changes

DMC v2.x (based on Mantine 8) includes several breaking changes from v1.x. Review these when upgrading.

### DateTimePicker: timeInputProps → timePickerProps

```python
# v1.x (DEPRECATED)
dmc.DateTimePicker(
    timeInputProps={"leftSection": icon}
)

# v2.x (CORRECT)
dmc.DateTimePicker(
    timePickerProps={
        "leftSection": icon,
        "minutesStep": 5,
        "withDropdown": True,
    }
)
```

### Carousel: emblaOptions wrapper

```python
# v1.x (DEPRECATED)
dmc.Carousel(
    loop=True,
    dragFree=True,
    align="start",
    speed=10,      # REMOVED in v2
    draggable=True # REMOVED in v2
)

# v2.x (CORRECT)
dmc.Carousel(
    emblaOptions={
        "loop": True,
        "dragFree": True,
        "align": "start",
    }
)
```

### Image: flex default changed

```python
# v1.x: Image had flex: 0 by default
# v2.x: No flex default, add explicitly if needed
dmc.Image(src="logo.png", h=40, flex=0)
```

### DatesProvider: timezone removed

```python
# v1.x (DEPRECATED)
dmc.DatesProvider(
    settings={"timezone": "UTC", "consistentWeeks": True}
)

# v2.x (CORRECT)
dmc.DatesProvider(
    settings={"consistentWeeks": True}
)
# Handle timezone in Python code instead
```

### Default behavior changes

| Component | v1.x Default | v2.x Default | Revert |
| --- | --- | --- | --- |
| Popover.hideDetached | False | True | `hideDetached=False` |
| Portal.reuseTargetNode | False | True | `reuseTargetNode=False` |
| Switch.withThumbIndicator | False | True | `withThumbIndicator=False` |

### Revert defaults via theme

```python
theme = {
    "components": {
        "Popover": {"defaultProps": {"hideDetached": False}},
        "Portal": {"defaultProps": {"reuseTargetNode": False}},
        "Switch": {"defaultProps": {"withThumbIndicator": False}},
    }
}
```

### Menu: data-hovered removed

```css
/* v1.x (DEPRECATED) */
.mantine-Menu-item[data-hovered] {
    background-color: red;
}

/* v2.x (CORRECT) */
.mantine-Menu-item:hover,
.mantine-Menu-item:focus {
    background-color: red;
}
```

## Migration checklist

- [ ] Replace `timeInputProps` with `timePickerProps`
- [ ] Wrap Carousel options in `emblaOptions`
- [ ] Remove `speed` and `draggable` from Carousel
- [ ] Add `flex=0` to Images if needed
- [ ] Remove `timezone` from DatesProvider
- [ ] Update CSS using `data-hovered`
- [ ] Test Popover/Portal z-index
- [ ] Check Switch appearance
- [ ] Replace NotificationProvider with NotificationContainer

Reference: <https://mantine.dev/changelog/8-0-0/>
