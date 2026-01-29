---
title: Always Provide Labels for Form Inputs
impact: MEDIUM
impactDescription: Required for screen readers and accessibility compliance
tags: accessibility, labels, forms, a11y, screen-readers
---

## Always Provide Labels for Form Inputs

All form inputs must have a label for accessibility. Screen readers rely on labels to announce input purposes to users.

**Incorrect (missing labels):**

```python
import dash_mantine_components as dmc

# No label - screen reader can't identify this input
dmc.TextInput(
    id="email",
    placeholder="Enter email",  # Placeholder is NOT a label
)

dmc.Select(
    id="country",
    data=["USA", "Canada", "UK"],
    placeholder="Select country",  # Still no label
)
# Screen reader announces: "Edit text" - unhelpful
```

**Correct (with labels):**

```python
import dash_mantine_components as dmc

dmc.TextInput(
    id="email",
    label="Email Address",  # Announces: "Email Address, edit text"
    placeholder="Enter your email",
    description="We'll never share your email",
    required=True,
)

dmc.Select(
    id="country",
    label="Country",  # Announces: "Country, combo box"
    data=["USA", "Canada", "UK"],
    placeholder="Select your country",
)
```

**Hidden labels (when visual label not needed):**

```python
# Search input where icon indicates purpose
dmc.TextInput(
    id="search",
    label="Search",           # Label for screen readers
    labelProps={"style": {"display": "none"}},  # Visually hidden
    leftSection=DashIconify(icon="tabler:search"),
    placeholder="Search...",
)
```

**Alternative: aria-label:**

```python
# When you can't use the label prop
dmc.TextInput(
    id="search",
    placeholder="Search...",
    inputProps={"aria-label": "Search the site"},
)
```

**Form input accessibility checklist:**

| Prop | Purpose | Required |
| --- | --- | --- |
| `label` | Primary label text | Yes |
| `description` | Additional help text | Recommended |
| `error` | Error message | When invalid |
| `required` | Marks as required | When mandatory |
| `disabled` | Marks as disabled | When inactive |

**Required fields:**

```python
dmc.TextInput(
    label="Username",
    required=True,  # Shows asterisk, announces "required"
)
```

**Error messages:**

```python
dmc.TextInput(
    label="Email",
    error="Please enter a valid email address",  # Announced by screen reader
)
```

**Grouped inputs:**

```python
dmc.Fieldset(
    legend="Contact Information",  # Groups related inputs
    children=[
        dmc.TextInput(label="First Name"),
        dmc.TextInput(label="Last Name"),
        dmc.TextInput(label="Email"),
    ],
)
```

**Focus management:**

```python
# Default focusRing="auto" is accessible
# Never use focusRing="never" - removes focus indicator
dmc.MantineProvider(
    theme={"focusRing": "auto"},  # Shows focus ring on keyboard nav
    children=[...]
)
```

Reference: <https://mantine.dev/core/text-input/#accessibility>
