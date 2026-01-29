"""Dash Mantine Components - Callback Patterns Reference

Complete collection of callback patterns for DMC apps:
1. Standard callbacks (Input/Output/State)
2. Pattern-matching callbacks (ALL, MATCH, ALLSMALLER)
3. Clientside callbacks
4. Background callbacks with progress
5. Debounced inputs
6. Modal/Drawer patterns
7. PreventUpdate and no_update
8. callback_context (ctx) usage

Each pattern is a complete, runnable example.
"""

import dash_mantine_components as dmc
from dash import (
    ALL,
    MATCH,
    Dash,
    DiskcacheManager,
    Input,
    Output,
    State,
    callback,
    clientside_callback,
    ctx,
    no_update,
)
from dash.exceptions import PreventUpdate
from dash_iconify import DashIconify

# ============================================================================
# 1. STANDARD CALLBACKS - Input/Output/State
# ============================================================================

"""
Basic callback with Input, Output, and State.
Inputs trigger the callback, States are read but don't trigger.
"""


@callback(
    Output("result-text", "children"),
    Input("submit-btn", "n_clicks"),
    State("name-input", "value"),
    State("age-input", "value"),
    prevent_initial_call=True,
)
def standard_callback_example(n_clicks, name, age):
    """Standard callback pattern.

    Args:
        n_clicks: Triggers callback when button clicked
        name: State value, read when callback triggered
        age: State value, read when callback triggered
    """
    if not name:
        raise PreventUpdate

    return f"Hello {name}, you are {age} years old!"


# Example layout for standard callback
def standard_callback_layout():
    return dmc.Stack(
        [
            dmc.TextInput(id="name-input", label="Name", placeholder="Enter name"),
            dmc.NumberInput(id="age-input", label="Age", min=0, max=120),
            dmc.Button(id="submit-btn", children="Submit"),
            dmc.Text(id="result-text"),
        ]
    )


# ============================================================================
# 2. PATTERN-MATCHING CALLBACKS - ALL, MATCH, ALLSMALLER
# ============================================================================

"""
Pattern-matching callbacks allow dynamic components with dynamic callbacks.
- ALL: Matches all components with the pattern
- MATCH: Links components with the same index
- ALLSMALLER: Matches components with indices less than current
"""


# Example: Dynamic list with individual delete buttons
@callback(
    Output({"type": "list-item", "index": MATCH}, "style"),
    Input({"type": "delete-btn", "index": MATCH}, "n_clicks"),
    prevent_initial_call=True,
)
def delete_item_match(n_clicks):
    """MATCH pattern: Delete button affects only its corresponding item.
    Both components share the same index value.
    """
    return {"display": "none"}


# Example: Update all items at once
@callback(
    Output({"type": "counter", "index": ALL}, "children"),
    Input("increment-all-btn", "n_clicks"),
    State({"type": "counter", "index": ALL}, "children"),
    prevent_initial_call=True,
)
def increment_all_counters(n_clicks, current_values):
    """ALL pattern: Updates all matching components.

    Args:
        n_clicks: Single input
        current_values: List of all matching component values

    Returns:
        List of new values (same length as current_values)
    """
    return [int(val or 0) + 1 for val in current_values]


# Example layout for pattern-matching
def pattern_matching_layout():
    return dmc.Stack(
        [
            dmc.Button(id="increment-all-btn", children="Increment All"),
            dmc.Stack(
                [
                    dmc.Group(
                        [
                            dmc.Badge(
                                id={"type": "counter", "index": i},
                                children="0",
                            ),
                            dmc.Paper(
                                id={"type": "list-item", "index": i},
                                children=f"Item {i}",
                                p="sm",
                            ),
                            dmc.ActionIcon(
                                id={"type": "delete-btn", "index": i},
                                children=DashIconify(icon="radix-icons:cross-2"),
                                color="red",
                                variant="subtle",
                            ),
                        ]
                    )
                    for i in range(5)
                ]
            ),
        ]
    )


# ============================================================================
# 3. CLIENTSIDE CALLBACKS
# ============================================================================

"""
Clientside callbacks run in the browser (JavaScript) for better performance.
Use for simple operations like theme toggles, UI updates, keyboard shortcuts.
"""

# Theme toggle (runs in browser, no server roundtrip)
clientside_callback(
    """
    function(n_clicks, current_theme) {
        if (!n_clicks) {
            return window.dash_clientside.no_update;
        }
        return current_theme === 'light' ? 'dark' : 'light';
    }
    """,
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-toggle-btn", "n_clicks"),
    State("mantine-provider", "forceColorScheme"),
)


# Keyboard shortcut handler
clientside_callback(
    """
    function(n_events) {
        if (!n_events) {
            return window.dash_clientside.no_update;
        }

        const key = event.key;
        if (event.ctrlKey && key === 's') {
            event.preventDefault();
            return 'Save triggered (Ctrl+S)';
        }
        return window.dash_clientside.no_update;
    }
    """,
    Output("keyboard-output", "children"),
    Input("keyboard-listener", "n_events"),
)


# Example layout for clientside callbacks
def clientside_layout():
    return dmc.Stack(
        [
            dmc.ActionIcon(
                id="theme-toggle-btn",
                children=DashIconify(icon="radix-icons:moon"),
            ),
            html.Div(id="keyboard-listener", tabIndex=0),
            dmc.Text(id="keyboard-output"),
        ]
    )


# ============================================================================
# 4. BACKGROUND CALLBACKS WITH PROGRESS
# ============================================================================

"""
Background callbacks run long operations without blocking the app.
Requires a backend: DiskcacheManager or CeleryManager.
"""

import time

import diskcache

cache = diskcache.Cache("./cache")
background_callback_manager = DiskcacheManager(cache)


@callback(
    Output("progress-output", "children"),
    Input("start-job-btn", "n_clicks"),
    background=True,
    manager=background_callback_manager,
    running=[
        (Output("start-job-btn", "disabled"), True, False),
        (Output("progress-bar", "value"), 0, 100),
    ],
    progress=[Output("progress-bar", "value"), Output("progress-text", "children")],
    cancel=[Input("cancel-btn", "n_clicks")],
    prevent_initial_call=True,
)
def run_background_job(set_progress, n_clicks):
    """Background callback with progress updates and cancellation.

    Args:
        set_progress: Function to update progress outputs
        n_clicks: Trigger input
    """
    total_steps = 10

    for i in range(total_steps):
        # Check if cancelled
        time.sleep(0.5)

        # Update progress
        progress = int((i + 1) / total_steps * 100)
        set_progress((progress, f"Step {i + 1}/{total_steps}"))

    return "Job completed!"


# Example layout for background callbacks
def background_callback_layout():
    return dmc.Stack(
        [
            dmc.Button(id="start-job-btn", children="Start Long Job"),
            dmc.Button(id="cancel-btn", children="Cancel", color="red"),
            dmc.Progress(id="progress-bar", value=0),
            dmc.Text(id="progress-text"),
            dmc.Text(id="progress-output"),
        ]
    )


# ============================================================================
# 5. DEBOUNCED INPUT CALLBACKS
# ============================================================================

"""
Debounced inputs wait for user to stop typing before triggering callback.
DMC components have built-in debounce property.
"""


@callback(
    Output("search-results", "children"),
    Input("search-input", "value"),
    prevent_initial_call=True,
)
def debounced_search(search_value):
    """Callback triggered only after user stops typing (debounce).

    The dmc.TextInput component has debounce=500 (milliseconds).
    """
    if not search_value:
        return "Start typing to search..."

    # Simulate search
    results = [f"Result for '{search_value}' - {i}" for i in range(5)]

    return dmc.Stack([dmc.Text(result) for result in results])


# Example layout with debounce
def debounced_layout():
    return dmc.Stack(
        [
            dmc.TextInput(
                id="search-input",
                label="Search",
                placeholder="Type to search...",
                debounce=500,  # Wait 500ms after user stops typing
                leftSection=DashIconify(icon="radix-icons:magnifying-glass"),
            ),
            html.Div(id="search-results"),
        ]
    )


# ============================================================================
# 6. MODAL AND DRAWER PATTERNS
# ============================================================================

"""
Modal and Drawer components use 'opened' property for visibility.
Common pattern: Button click toggles opened state.
"""


@callback(
    Output("example-modal", "opened"),
    Input("open-modal-btn", "n_clicks"),
    Input("close-modal-btn", "n_clicks"),
    State("example-modal", "opened"),
    prevent_initial_call=True,
)
def toggle_modal(open_clicks, close_clicks, is_open):
    """Toggle modal open/close.

    Use ctx.triggered_id to determine which button was clicked.
    """
    if ctx.triggered_id == "open-modal-btn":
        return True
    if ctx.triggered_id == "close-modal-btn":
        return False
    return is_open


# Alternative: Simple toggle
@callback(
    Output("example-drawer", "opened"),
    Input("toggle-drawer-btn", "n_clicks"),
    State("example-drawer", "opened"),
    prevent_initial_call=True,
)
def toggle_drawer(n_clicks, is_open):
    """Simple toggle: invert current state."""
    return not is_open


# Example layout for Modal/Drawer
def modal_drawer_layout():
    return dmc.Stack(
        [
            dmc.Button(id="open-modal-btn", children="Open Modal"),
            dmc.Modal(
                id="example-modal",
                title="Example Modal",
                children=[
                    dmc.Text("Modal content here"),
                    dmc.Button(id="close-modal-btn", children="Close"),
                ],
            ),
            dmc.Button(id="toggle-drawer-btn", children="Toggle Drawer"),
            dmc.Drawer(
                id="example-drawer",
                title="Example Drawer",
                children=[dmc.Text("Drawer content here")],
            ),
        ]
    )


# ============================================================================
# 7. PREVENTUPDATE AND NO_UPDATE
# ============================================================================

"""
PreventUpdate: Raise to prevent callback from updating outputs
no_update: Return to skip updating specific outputs
"""


@callback(
    Output("output-1", "children"),
    Output("output-2", "children"),
    Input("trigger-btn", "n_clicks"),
    State("condition-input", "value"),
    prevent_initial_call=True,
)
def prevent_update_example(n_clicks, condition):
    """Demonstrate PreventUpdate and no_update.
    """
    # PreventUpdate: Stop entire callback
    if condition == "stop":
        raise PreventUpdate

    # no_update: Skip updating specific outputs
    if condition == "first_only":
        return "Updated!", no_update

    if condition == "second_only":
        return no_update, "Updated!"

    # Update both
    return "Output 1 updated", "Output 2 updated"


# ============================================================================
# 8. CALLBACK_CONTEXT (ctx) USAGE
# ============================================================================

"""
ctx provides information about what triggered the callback.
Useful for multi-input callbacks.
"""


@callback(
    Output("ctx-output", "children"),
    Input("btn-1", "n_clicks"),
    Input("btn-2", "n_clicks"),
    Input("input-1", "value"),
    prevent_initial_call=True,
)
def context_example(n1, n2, value):
    """Use ctx to determine which input triggered the callback.
    """
    triggered_id = ctx.triggered_id

    if triggered_id == "btn-1":
        return "Button 1 was clicked"
    if triggered_id == "btn-2":
        return "Button 2 was clicked"
    if triggered_id == "input-1":
        return f"Input changed to: {value}"

    return "No trigger detected"


# Advanced ctx usage: Get all trigger info
@callback(
    Output("ctx-detailed", "children"),
    Input("multi-btn", "n_clicks"),
    Input({"type": "dynamic-btn", "index": ALL}, "n_clicks"),
)
def detailed_context_example(static_clicks, dynamic_clicks):
    """Access detailed context information.
    """
    # triggered_id: ID of component that triggered callback
    trigger_id = ctx.triggered_id

    # triggered_prop_ids: Dict of all triggered property IDs
    trigger_props = ctx.triggered_prop_ids

    # outputs_list: List of all outputs
    outputs = ctx.outputs_list

    # Build response
    info = f"""
    Triggered ID: {trigger_id}
    Triggered Props: {trigger_props}
    Number of outputs: {len(outputs)}
    """

    return dmc.Code(info, block=True)


# Example layout for ctx patterns
def context_layout():
    return dmc.Stack(
        [
            dmc.Group(
                [
                    dmc.Button(id="btn-1", children="Button 1"),
                    dmc.Button(id="btn-2", children="Button 2"),
                ]
            ),
            dmc.TextInput(id="input-1", placeholder="Type here"),
            dmc.Text(id="ctx-output"),
            dmc.Button(id="multi-btn", children="Static Button"),
            dmc.Group(
                [
                    dmc.Button(
                        id={"type": "dynamic-btn", "index": i},
                        children=f"Dynamic {i}",
                    )
                    for i in range(3)
                ]
            ),
            html.Div(id="ctx-detailed"),
        ]
    )


# ============================================================================
# MAIN APP EXAMPLE
# ============================================================================

if __name__ == "__main__":
    from dash import html

    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        dmc.Container(
            size="lg",
            py="xl",
            children=[
                dmc.Title("DMC Callback Patterns", order=1, mb="xl"),
                dmc.Accordion(
                    multiple=True,
                    children=[
                        dmc.AccordionItem(
                            value="standard",
                            children=[
                                dmc.AccordionControl("Standard Callbacks"),
                                dmc.AccordionPanel(standard_callback_layout()),
                            ],
                        ),
                        dmc.AccordionItem(
                            value="pattern",
                            children=[
                                dmc.AccordionControl("Pattern-Matching"),
                                dmc.AccordionPanel(pattern_matching_layout()),
                            ],
                        ),
                        dmc.AccordionItem(
                            value="clientside",
                            children=[
                                dmc.AccordionControl("Clientside Callbacks"),
                                dmc.AccordionPanel(clientside_layout()),
                            ],
                        ),
                        dmc.AccordionItem(
                            value="debounce",
                            children=[
                                dmc.AccordionControl("Debounced Input"),
                                dmc.AccordionPanel(debounced_layout()),
                            ],
                        ),
                        dmc.AccordionItem(
                            value="modal",
                            children=[
                                dmc.AccordionControl("Modal & Drawer"),
                                dmc.AccordionPanel(modal_drawer_layout()),
                            ],
                        ),
                        dmc.AccordionItem(
                            value="context",
                            children=[
                                dmc.AccordionControl("Callback Context"),
                                dmc.AccordionPanel(context_layout()),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    )

    app.run(debug=True, port=8050)
