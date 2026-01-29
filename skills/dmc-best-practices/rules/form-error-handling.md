---
title: Return User-Friendly Error Messages
impact: MEDIUM
impactDescription: Catch exceptions, log details, show helpful messages to users
tags: errors, exceptions, user-experience, logging, debugging
---

## Return User-Friendly Error Messages

Catch specific exceptions in callbacks. Log technical details for debugging, but return user-friendly messages to the UI.

**Incorrect (expose technical errors):**

```python
from dash import Input, Output, callback

@callback(Output("result", "children"), Input("btn", "n_clicks"))
def process(n):
    data = fetch_from_api()  # May raise ConnectionError
    return process_data(data)  # May raise ValueError
# User sees: "ConnectionError: Connection refused" - confusing and unhelpful
```

**Correct (catch and handle gracefully):**

```python
import logging
from dash import Input, Output, callback, no_update
import dash_mantine_components as dmc

logger = logging.getLogger(__name__)

@callback(Output("result", "children"), Input("btn", "n_clicks"), prevent_initial_call=True)
def process(n):
    try:
        data = fetch_from_api()
        result = process_data(data)
        return dmc.Alert(f"Success: {result}", color="green")

    except ConnectionError as e:
        logger.error(f"API connection failed: {e}", exc_info=True)
        return dmc.Alert(
            "Unable to connect to the server. Please try again later.",
            color="red",
            title="Connection Error",
        )

    except ValueError as e:
        logger.warning(f"Invalid data received: {e}")
        return dmc.Alert(
            "The data could not be processed. Please check your input.",
            color="orange",
            title="Invalid Data",
        )

    except Exception as e:
        logger.exception(f"Unexpected error: {e}")
        return dmc.Alert(
            "An unexpected error occurred. Please try again or contact support.",
            color="red",
            title="Error",
        )
```

**Pattern: Error output component:**

```python
# Layout
dmc.Stack([
    dmc.Button("Load Data", id="load-btn"),
    html.Div(id="error-container"),  # For error messages
    html.Div(id="data-container"),   # For success content
])

@callback(
    Output("data-container", "children"),
    Output("error-container", "children"),
    Input("load-btn", "n_clicks"),
    prevent_initial_call=True,
)
def load_data(n):
    try:
        data = fetch_data()
        return format_data(data), ""  # Clear error on success

    except Exception as e:
        logger.exception("Data load failed")
        return no_update, dmc.Alert("Failed to load data", color="red")
```

**Use specific exceptions:**

```python
# Define custom exceptions for clarity
class ValidationError(Exception):
    pass

class DataNotFoundError(Exception):
    pass

@callback(...)
def process(n, filters):
    try:
        validate_filters(filters)  # Raises ValidationError
        data = query_data(filters)  # Raises DataNotFoundError
        return format_results(data)

    except ValidationError as e:
        return dmc.Alert(str(e), color="orange", title="Invalid Input")

    except DataNotFoundError:
        return dmc.Alert(
            "No results found for your search criteria.",
            color="blue",
            title="No Results",
        )
```

**Logging setup:**

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)

# In callback
logger.info(f"Processing request: {filters}")
logger.error(f"Failed to process: {e}", exc_info=True)  # Include stack trace
```

Reference: <https://dash.plotly.com/advanced-callbacks>
