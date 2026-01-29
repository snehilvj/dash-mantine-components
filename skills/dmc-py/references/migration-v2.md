---
title: DMC v2.x Migration Guide
description: Breaking changes and upgrade guidance for moving from DMC v1.x to v2.x.
tags: migration, v2, breaking-changes, upgrade, dmc
---

## DMC v2.x Migration Guide

Quick reference for migrating from Dash Mantine Components v1.x to v2.x.

## Overview

DMC v2 is based on Mantine v8. Major changes include component defaults, deprecated props, and new features. See [Mantine 8 Changelog](https://mantine.dev/changelog/8-0-0/) for upstream details.

## Breaking Changes

### DateTimePicker: timeInputProps → timePickerProps

The underlying `TimeInput` component was replaced with `TimePicker`.

**v1.x:**

```python
dmc.DateTimePicker(
    timeInputProps={
        "leftSection": DashIconify(icon="bi:clock")
    }
)
```

**v2.x:**

```python
dmc.DateTimePicker(
    timePickerProps={
        "leftSection": DashIconify(icon="bi:clock"),
        "minutesStep": 5,
        "withDropdown": True
    }
)
```

### Carousel: emblaOptions Wrapper

Embla configuration props now wrapped in `emblaOptions`:

**v1.x:**

```python
dmc.Carousel(
    loop=True,
    dragFree=True,
    align="start",
    speed=10,       # Removed - no longer supported
    draggable=True  # Removed - no longer supported
)
```

**v2.x:**

```python
dmc.Carousel(
    emblaOptions={
        "loop": True,
        "dragFree": True,
        "align": "start"
    }
)
```

**Removed props:** `speed`, `draggable` (not supported by Embla v8)

### Switch: withThumbIndicator

Default styles changed to include checked state indicator.

**Disable globally:**

```python
dmc.MantineProvider(
    theme={
        "components": {
            "Switch": {
                "defaultProps": {
                    "withThumbIndicator": False
                }
            }
        }
    }
)
```

### Image: flex:0 No Longer Default

**v1.x:** `Image` had `flex: 0` by default

**v2.x:** Add explicitly if needed:

```python
dmc.Image(src=logo, h=40, flex=0)
```

### DatesProvider: timezone Removed

Timezone configuration is no longer supported:

**v1.x:**

```python
dmc.DatesProvider(
    settings={"timezone": "UTC", "consistentWeeks": True}
)
```

**v2.x:**

```python
dmc.DatesProvider(
    settings={"consistentWeeks": True}
)
```

## Default Behavior Changes

### Popover: hideDetached

Automatically closes popover when target element is removed from DOM.

**v1.x:** Disabled by default
**v2.x:** Enabled by default

**Revert to v1.x behavior:**

```python
dmc.MantineProvider(
    theme={
        "components": {
            "Popover": {
                "defaultProps": {
                    "hideDetached": False
                }
            }
        }
    }
)
```

### Portal: reuseTargetNode

Reuses target node between renders for better performance.

**v1.x:** Disabled by default
**v2.x:** Enabled by default

**If you experience z-index issues:**

```python
dmc.MantineProvider(
    theme={
        "components": {
            "Portal": {
                "defaultProps": {
                    "reuseTargetNode": False
                }
            }
        }
    }
)
```

### Menu: data-hovered Removed

`MenuItem` no longer uses `data-hovered` attribute for hover state.

**v1.x CSS:**

```css
.item[data-hovered] {
    background-color: red;
}
```

**v2.x CSS:**

```css
.item:hover,
.item:focus {
    background-color: red;
}
```

## Component Changes

### CodeHighlight: Limited Languages

Only top 10 languages from highlight.js included by default for bundle size.

**Available languages:**

- javascript, python, typescript, java, css, html, c, cpp, bash, json

**Need more?** Open an issue on [GitHub](https://github.com/snehilvj/dash-mantine-components/issues)

### NotificationContainer: New API

**v1.x:**

```python
# Old API - DEPRECATED
dmc.NotificationProvider([
    dmc.Notification(id="notif")
])
```

**v2.x:**

```python
# New API
dmc.NotificationContainer()  # Single component, no nesting
```

See [Notification Migration Guide](/migration-notifications) for details.

**Note:** Old components still work but are deprecated and will be removed in future release.

### DatePicker: New Component

New standalone calendar component (no input field) added.

**Note:** In v0.15.0, the original `DatePicker` was renamed to `DatePickerInput`.

If migrating from DMC < 0.15.0:

```python
# Old
dmc.DatePicker(...)

# New
dmc.DatePickerInput(...)
```

## Version-Specific Changes

### v2.3.0: RichTextEditor (Tiptap v3)

Uses Tiptap v3 with updated Text Style API.

**Impact:**

- Clientside callbacks using Tiptap API may need updates
- Custom controls should be tested
- JSON/HTML content generation may differ

See [Tiptap v3 Changelog](https://tiptap.dev/docs/resources/whats-new) for details.

## Theme Override Examples

### Restore v1.x Defaults Globally

```python
dmc.MantineProvider(
    theme={
        "components": {
            "Switch": {
                "defaultProps": {"withThumbIndicator": False}
            },
            "Popover": {
                "defaultProps": {"hideDetached": False}
            },
            "Portal": {
                "defaultProps": {"reuseTargetNode": False}
            }
        }
    }
)
```

### Per-Component Override

```python
# Override single instance
dmc.Popover(hideDetached=False, children=[...])

# Override in callback
@callback(...)
def update_popover():
    return dmc.Popover(hideDetached=False, ...)
```

## Migration Checklist

- [ ] Replace `DateTimePicker.timeInputProps` with `timePickerProps`
- [ ] Wrap Carousel embla props in `emblaOptions` dict
- [ ] Remove `speed` and `draggable` from Carousel
- [ ] Add `flex=0` to Images if needed
- [ ] Remove `timezone` from DatesProvider settings
- [ ] Update CSS using `data-hovered` to `:hover`/`:focus`
- [ ] Test Popover/Portal z-index behavior
- [ ] Review Switch thumb indicator styling
- [ ] Update to NotificationContainer if using notifications
- [ ] Test RichTextEditor customizations (if using)
- [ ] Verify CodeHighlight language availability

## New Features in v2.3 - v2.5

### v2.5.x Updates

**TableOfContents (v2.5.0):**

```python
dmc.TableOfContents(
    links=[
        {"label": "Section 1", "link": "#section-1", "order": 1},
        {"label": "Subsection", "link": "#subsection", "order": 2},
        {"label": "Section 2", "link": "#section-2", "order": 1},
    ],
    variant="filled"  # or "light", "subtle"
)
```

**Combobox Improvements (v2.5.0):**

```python
dmc.Select(
    data=["Option 1", "Option 2"],
    selectFirstOptionOnDropdownOpen=True,  # NEW: auto-select first option
    openOnFocus=True,  # NEW: open dropdown on focus
)
```

**AppShell Static Mode (v2.5.0):**

```python
dmc.AppShell(
    mode="static",  # For nested app shells
    # ...
)
```

**Window Globals (v2.5.0):**

- `window.MantineCore` - Access Mantine core components
- `window.MantineHooks` - Access Mantine hooks
- Useful for building custom Dash components that need Mantine integration

### v2.4.x Updates

**CopyButton (v2.4.0):**

```python
dmc.CopyButton(
    value="Text to copy",
    timeout=2000,  # Reset after 2 seconds
)
```

**RichTextEditor Enhancements (v2.4.0):**

```python
# Access editor instance in clientside callback
from dash import clientside_callback

clientside_callback(
    """
    function(n_clicks) {
        const editor = dmc.getEditor("editor-id");
        if (editor) {
            editor.commands.setContent("<p>New content</p>");
        }
        return window.dash_clientside.no_update;
    }
    """,
    Output("dummy", "children"),
    Input("update-btn", "n_clicks"),
)
```

### v2.3.x Updates

**MiniCalendar (v2.3.0):**

```python
dmc.MiniCalendar(
    value="2025-01-15",
    type="default",  # or "multiple", "range"
)
```

**ScrollAreaAutoheight (v2.3.0):**

```python
dmc.ScrollAreaAutoheight(
    minHeight=100,
    maxHeight=400,
    children=[...]
)
```

**DirectionProvider (v2.3.0):**

```python
dmc.DirectionProvider(
    dir="rtl",  # Right-to-left support
    children=[...]
)
```

### NotificationProvider → NotificationContainer

The `NotificationProvider` component has been deprecated. Use `NotificationContainer` instead:

**Old (deprecated):**

```python
dmc.NotificationProvider(position="top-right")
```

**New:**

```python
dmc.NotificationContainer(position="top-right")
```

## Testing After Migration

1. **Visual regression:**
   - Check Switch appearance
   - Verify Image flex behavior
   - Review Popover positioning

2. **Functional testing:**
   - Test DateTimePicker time selection
   - Verify Carousel navigation
   - Check Notification display/dismissal

3. **Edge cases:**
   - Popover with dynamic content
   - Portal z-index stacking
   - Menu hover states in custom CSS

## Resources

- [DMC 2.0.0 Release Notes](/release-2-0-0)
- [Mantine 8.0.0 Changelog](https://mantine.dev/changelog/8-0-0/)
- [Notification Migration Guide](/migration-notifications)
- [DMC GitHub Issues](https://github.com/snehilvj/dash-mantine-components/issues)

## Getting Help

If you encounter issues:

1. Check this guide first
2. Review component documentation
3. Search GitHub issues
4. Ask in Plotly Community forum
5. Open new GitHub issue with minimal reproducible example
