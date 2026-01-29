---
title: Validate Early, Fail Fast
impact: MEDIUM
impactDescription: Collect all errors before processing, show clear feedback
tags: forms, validation, errors, user-experience, patterns
---

## Validate Early, Fail Fast

Validate all form inputs before processing. Collect all errors at once and display them clearly to the user.

**Incorrect (validate one at a time):**

```python
from dash import Input, Output, State, callback, no_update
import dash_mantine_components as dmc

@callback(
    Output("result", "children"),
    Input("submit", "n_clicks"),
    State("email", "value"),
    State("password", "value"),
    prevent_initial_call=True,
)
def submit(n, email, password):
    # User fixes one error, submits, sees next error
    if not email:
        return dmc.Alert("Email required", color="red")

    if "@" not in email:
        return dmc.Alert("Invalid email", color="red")

    if not password:
        return dmc.Alert("Password required", color="red")

    if len(password) < 8:
        return dmc.Alert("Password too short", color="red")

    # Finally process...
# Frustrating UX: fix one error, see another
```

**Correct (collect all errors):**

```python
from dash import Input, Output, State, callback, no_update
import dash_mantine_components as dmc

@callback(
    Output("result", "children"),
    Output("email", "error"),
    Output("password", "error"),
    Input("submit", "n_clicks"),
    State("email", "value"),
    State("password", "value"),
    prevent_initial_call=True,
)
def submit(n, email, password):
    errors = []
    email_error = ""
    password_error = ""

    # Validate all fields
    if not email:
        email_error = "Email is required"
        errors.append(email_error)
    elif "@" not in email:
        email_error = "Please enter a valid email"
        errors.append(email_error)

    if not password:
        password_error = "Password is required"
        errors.append(password_error)
    elif len(password) < 8:
        password_error = "Password must be at least 8 characters"
        errors.append(password_error)

    # If any errors, show all at once
    if errors:
        return (
            dmc.Alert(
                title="Please fix the following errors:",
                children=dmc.List([dmc.ListItem(e) for e in errors]),
                color="red",
            ),
            email_error,
            password_error,
        )

    # All valid - process form
    result = process_registration(email, password)
    return (
        dmc.Alert("Registration successful!", color="green"),
        "",  # Clear email error
        "",  # Clear password error
    )
```

**Inline validation with debounce:**

```python
# Real-time field validation
@callback(
    Output("email", "error"),
    Input("email", "value"),
)
def validate_email(email):
    if not email:
        return ""  # Don't show error for empty (not yet filled)
    if "@" not in email:
        return "Please enter a valid email"
    return ""
```

**Validation helper function:**

```python
def validate_form(fields):
    """Generic form validator.

    Args:
        fields: List of (value, rules) tuples
               rules: List of (check_fn, error_msg) tuples

    Returns:
        dict with 'valid' bool and 'errors' dict
    """
    errors = {}
    for field_name, value, rules in fields:
        for check, msg in rules:
            if not check(value):
                errors[field_name] = msg
                break  # First error per field
    return {"valid": not errors, "errors": errors}

# Usage
result = validate_form([
    ("email", email, [
        (bool, "Email is required"),
        (lambda v: "@" in v, "Invalid email format"),
    ]),
    ("password", password, [
        (bool, "Password is required"),
        (lambda v: len(v or "") >= 8, "Password must be 8+ characters"),
    ]),
])
```

Reference: <https://www.dash-mantine-components.com/components/textinput#with-error>
