---
title: Dash Advanced Callbacks Reference
description: Advanced callback patterns including pattern-matching, ctx, clientside, background callbacks, and DMC-specific features.
tags: callbacks, pattern-matching, ctx, clientside, background, dash
---

## Dash Advanced Callbacks Reference

Comprehensive guide to advanced callback patterns including standard callbacks, pattern-matching, callback context, clientside callbacks, background callbacks, and DMC-specific features.

## Table of Contents

1. [Standard Callbacks: Input/Output/State](#standard-callbacks-inputoutputstate)
2. [Pattern-Matching Callbacks](#pattern-matching-callbacks)
3. [Callback Context (ctx)](#callback-context-ctx)
4. [Clientside Callbacks](#clientside-callbacks)
5. [Background Callbacks](#background-callbacks)
6. [PreventUpdate and no_update](#preventupdate-and-no_update)
7. [Running Parameter](#running-parameter)
8. [Allow Duplicate](#allow-duplicate)
9. [DMC-Specific Features](#dmc-specific-features)

---

## Standard Callbacks: Input/Output/State

### Basic Callback Structure

```python
from dash import Dash, html, dcc, callback, Input, Output, State

@callback(
    Output('output-id', 'property-name'),
    Input('input-id', 'property-name'),
    State('state-id', 'property-name')
)
def callback_function(input_value, state_value):
    """
    Inputs: Trigger callback when property changes
    State: Provide current value but don't trigger
    Output: Update this component property
    """
    return f"Input: {input_value}, State: {state_value}"
```

### Multiple Inputs and Outputs

```python
@callback(
    Output('output-1', 'children'),
    Output('output-2', 'children'),
    Output('output-3', 'style'),
    Input('dropdown-1', 'value'),
    Input('dropdown-2', 'value'),
    Input('slider', 'value'),
    State('text-input', 'value')
)
def multi_callback(dd1_val, dd2_val, slider_val, text_val):
    """Multiple inputs/outputs - order matches function arguments."""
    return (
        f"Dropdown 1: {dd1_val}",
        f"Dropdown 2: {dd2_val}",
        {'color': 'red' if slider_val > 50 else 'blue'}
    )
```

### Flexible Callback Signatures (Dash 2.0+)

Use dictionaries for keyword arguments - order doesn't matter:

```python
@callback(
    output=dict(
        title=Output('title', 'children'),
        figure=Output('graph', 'figure')
    ),
    inputs=dict(
        category=Input('category-dropdown', 'value'),
        year=Input('year-slider', 'value')
    ),
    state=dict(
        data=State('data-store', 'data')
    )
)
def update_dashboard(category, year, data):
    """Named arguments - order-independent."""
    df = pd.DataFrame(data)
    filtered = df[(df['cat'] == category) & (df['year'] == year)]

    return dict(
        title=f"{category} in {year}",
        figure=px.bar(filtered, x='x', y='y')
    )
```

### Chained Callbacks

Output of one callback becomes input to another:

```python
@callback(
    Output('intermediate-data', 'data'),
    Input('upload-data', 'contents')
)
def process_upload(contents):
    """First callback: Process uploaded file."""
    df = parse_contents(contents)
    return df.to_dict('records')

@callback(
    Output('graph', 'figure'),
    Input('intermediate-data', 'data'),
    Input('chart-type', 'value')
)
def update_graph(data, chart_type):
    """Second callback: Create visualization from processed data."""
    df = pd.DataFrame(data)
    if chart_type == 'bar':
        return px.bar(df, x='x', y='y')
    return px.line(df, x='x', y='y')
```

---

## Pattern-Matching Callbacks

Pattern-matching allows callbacks to respond to dynamic numbers of components using `ALL`, `MATCH`, and `ALLSMALLER` selectors.

### Component IDs as Dictionaries

```python
# Static ID (traditional)
html.Button("Click", id="my-button")

# Dynamic ID (pattern-matching)
html.Button("Click", id={"type": "filter-btn", "index": 0})
html.Button("Click", id={"type": "filter-btn", "index": 1})
```

### ALL Selector

Matches all components with specified type - passes all values as a list.

```python
from dash import ALL, Patch

app.layout = html.Div([
    html.Button("Add Filter", id="add-filter-btn", n_clicks=0),
    html.Div(id="dropdown-container", children=[]),
    html.Div(id="output")
])

@callback(
    Output("dropdown-container", "children"),
    Input("add-filter-btn", "n_clicks")
)
def add_dropdown(n_clicks):
    """Dynamically add dropdowns using Patch."""
    patched_children = Patch()
    new_dropdown = dcc.Dropdown(
        options=['NYC', 'MTL', 'LA', 'TOKYO'],
        id={"type": "city-dropdown", "index": n_clicks}
    )
    patched_children.append(new_dropdown)
    return patched_children

@callback(
    Output("output", "children"),
    Input({"type": "city-dropdown", "index": ALL}, "value")
)
def display_output(values):
    """
    Triggered when ANY dropdown changes.
    Receives ALL dropdown values as a list.
    """
    return html.Div([
        html.Div(f"Dropdown {i + 1} = {val}")
        for i, val in enumerate(values)
        if val is not None
    ])
```

### MATCH Selector

Matches individual components - creates separate callback instance per matched component.

```python
app.layout = html.Div([
    html.Button("Add Item", id="add-btn", n_clicks=0),
    html.Div(id="container", children=[])
])

@callback(
    Output("container", "children"),
    Input("add-btn", "n_clicks")
)
def add_item(n_clicks):
    """Add dropdown and corresponding output div."""
    patched_children = Patch()

    new_elements = html.Div([
        dcc.Dropdown(
            ['Option A', 'Option B', 'Option C'],
            id={"type": "dynamic-dropdown", "index": n_clicks}
        ),
        html.Div(id={"type": "dynamic-output", "index": n_clicks})
    ])

    patched_children.append(new_elements)
    return patched_children

@callback(
    Output({"type": "dynamic-output", "index": MATCH}, "children"),
    Input({"type": "dynamic-dropdown", "index": MATCH}, "value"),
    State({"type": "dynamic-dropdown", "index": MATCH}, "id")
)
def update_output(value, component_id):
    """
    Separate callback instance for EACH dropdown.
    Only receives the value from the MATCHING dropdown.
    """
    return f"Dropdown {component_id['index']} selected: {value}"
```

### ALLSMALLER Selector

Passes values from components with smaller indices - useful for cascading filters.

```python
app.layout = html.Div([
    html.Button("Add Filter", id="add-filter", n_clicks=0),
    html.Div(id="filter-container", children=[])
])

@callback(
    Output("filter-container", "children"),
    Input("add-filter", "n_clicks")
)
def add_filter_level(n_clicks):
    """Add cascading filter dropdowns."""
    patched_children = Patch()

    filter_div = html.Div([
        html.Label(f"Filter Level {n_clicks}"),
        dcc.Dropdown(id={"type": "filter-dd", "index": n_clicks}),
        html.Div(id={"type": "filter-output", "index": n_clicks})
    ])

    patched_children.append(filter_div)
    return patched_children

@callback(
    Output({"type": "filter-output", "index": MATCH}, "children"),
    Input({"type": "filter-dd", "index": MATCH}, "value"),
    Input({"type": "filter-dd", "index": ALLSMALLER}, "value")
)
def update_cascading_filter(current_value, previous_values):
    """
    Receives:
    - current_value: Value from MATCHING dropdown
    - previous_values: List of values from ALL dropdowns with smaller indices
    """
    if current_value is None:
        return "Select a value"

    # All filter values in order (oldest to newest)
    all_filter_values = previous_values[::-1] + [current_value]

    # Apply progressive filtering
    filtered_count = apply_filters(all_filter_values)

    return f"Filters applied: {all_filter_values} → {filtered_count} results"
```

### Pattern-Matching with Multiple Types

```python
app.layout = html.Div([
    html.Button("Add Chart", id="add-chart", n_clicks=0),
    html.Div(id="charts-container", children=[])
])

@callback(
    Output("charts-container", "children"),
    Input("add-chart", "n_clicks")
)
def add_chart_controls(n_clicks):
    """Add chart with multiple control types."""
    patched_children = Patch()

    chart_group = html.Div([
        dcc.Dropdown(
            ['bar', 'line', 'scatter'],
            'bar',
            id={"type": "chart-type", "index": n_clicks}
        ),
        dcc.Slider(
            min=0, max=100, value=50,
            id={"type": "chart-slider", "index": n_clicks}
        ),
        dcc.Graph(id={"type": "chart-graph", "index": n_clicks})
    ])

    patched_children.append(chart_group)
    return patched_children

@callback(
    Output({"type": "chart-graph", "index": MATCH}, "figure"),
    Input({"type": "chart-type", "index": MATCH}, "value"),
    Input({"type": "chart-slider", "index": MATCH}, "value")
)
def update_chart(chart_type, slider_value):
    """Each chart responds to its own controls."""
    df = generate_data(slider_value)

    if chart_type == 'bar':
        return px.bar(df, x='x', y='y')
    elif chart_type == 'line':
        return px.line(df, x='x', y='y')
    return px.scatter(df, x='x', y='y')
```

---

## Callback Context (ctx)

Access information about which component triggered the callback using `dash.callback_context`.

### Basic ctx Usage

```python
from dash import ctx
import json

@callback(
    Output('output', 'children'),
    Input('btn-1', 'n_clicks'),
    Input('btn-2', 'n_clicks'),
    Input('btn-3', 'n_clicks')
)
def display_clicked_button(btn1, btn2, btn3):
    """Determine which button was clicked."""
    if not ctx.triggered:
        return "No button clicked yet"

    # Get ID of triggering component
    button_id = ctx.triggered_id

    return f"Button '{button_id}' was clicked"
```

### ctx Properties

```python
@callback(
    Output('debug-output', 'children'),
    Input('input-1', 'value'),
    Input('input-2', 'value'),
    State('state-1', 'value')
)
def debug_callback(input1, input2, state1):
    """Explore all ctx properties."""
    info = {
        'triggered_id': ctx.triggered_id,  # ID of component that triggered
        'triggered': ctx.triggered,  # List of triggered inputs
        'triggered_prop_ids': ctx.triggered_prop_ids,  # Dict mapping IDs to props
        'inputs': ctx.inputs,  # All input values by ID
        'states': ctx.states,  # All state values by ID
        'outputs_list': ctx.outputs_list  # List of outputs
    }

    return html.Pre(json.dumps(info, indent=2))
```

### ctx with Pattern-Matching

```python
@callback(
    Output('selected-info', 'children'),
    Input({'type': 'item-btn', 'index': ALL}, 'n_clicks')
)
def handle_dynamic_clicks(n_clicks_list):
    """Determine which dynamic button was clicked."""
    if not ctx.triggered_id:
        return "Click a button"

    # ctx.triggered_id is the dictionary ID
    clicked_id = ctx.triggered_id
    clicked_index = clicked_id['index']

    return f"Button at index {clicked_index} was clicked"
```

### ctx.args_grouping

Access grouped arguments when using flexible callback signatures:

```python
@callback(
    output=dict(
        output1=Output('out-1', 'children'),
        output2=Output('out-2', 'children')
    ),
    inputs=dict(
        input1=Input('in-1', 'value'),
        input2=Input('in-2', 'value')
    )
)
def grouped_callback(**kwargs):
    """Access inputs through ctx.args_grouping."""
    inputs = ctx.args_grouping['inputs']

    return dict(
        output1=f"Input 1: {inputs['input1']['value']}",
        output2=f"Input 2: {inputs['input2']['value']}"
    )
```

### Conditional Logic Based on Trigger

```python
@callback(
    Output('display', 'children'),
    Input('submit-btn', 'n_clicks'),
    Input('reset-btn', 'n_clicks'),
    State('input-field', 'value')
)
def handle_buttons(submit_clicks, reset_clicks, input_value):
    """Different actions based on which button triggered."""
    if not ctx.triggered_id:
        raise PreventUpdate

    if ctx.triggered_id == 'submit-btn':
        return f"Submitted: {input_value}"
    elif ctx.triggered_id == 'reset-btn':
        return "Form reset"

    return "Unknown action"
```

---

## Clientside Callbacks

Execute callbacks in JavaScript directly in the browser for better performance with frequent updates or large data transfers.

### Inline JavaScript

```python
from dash import clientside_callback, Input, Output

clientside_callback(
    """
    function(n_clicks) {
        return 'Clicked ' + n_clicks + ' times';
    }
    """,
    Output('output', 'children'),
    Input('button', 'n_clicks')
)
```

### External JavaScript Files

Create `assets/custom_clientside.js`:

```javascript
window.dash_clientside = Object.assign({}, window.dash_clientside, {
    clientside: {
        update_chart: function(slider_value, dropdown_value) {
            // Complex JavaScript logic
            const data = processData(slider_value, dropdown_value);
            return {
                data: data,
                layout: {title: 'Updated Chart'}
            };
        },

        format_number: function(value) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(value);
        }
    }
});
```

Reference in Python:

```python
from dash import ClientsideFunction

clientside_callback(
    ClientsideFunction(
        namespace='clientside',
        function_name='update_chart'
    ),
    Output('graph', 'figure'),
    Input('slider', 'value'),
    Input('dropdown', 'value')
)
```

### Async Clientside Callbacks (Dash 2.4+)

Use promises for asynchronous operations:

```python
clientside_callback(
    """
    async function(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            return dash_clientside.no_update;
        }
    }
    """,
    Output('data-table', 'data'),
    Input('api-endpoint', 'value')
)
```

### Clientside Callback Context

```python
clientside_callback(
    """
    function(btn1_clicks, btn2_clicks) {
        const triggered_id = dash_clientside.callback_context.triggered_id;

        if (triggered_id === 'btn-1') {
            return 'Button 1 clicked';
        } else if (triggered_id === 'btn-2') {
            return 'Button 2 clicked';
        }

        return 'No button clicked';
    }
    """,
    Output('output', 'children'),
    Input('btn-1', 'n_clicks'),
    Input('btn-2', 'n_clicks')
)
```

### Partial Updates with Patch (Dash 3.3+)

```python
clientside_callback(
    """
    function(n_clicks) {
        var patch = new dash_clientside.Patch();

        // Toggle legend visibility
        var showLegend = (n_clicks % 2 === 0);

        // Only update specific property path
        patch.assign(['layout', 'showlegend'], showLegend);

        return patch.build();
    }
    """,
    Output('graph', 'figure'),
    Input('toggle-legend-btn', 'n_clicks')
)
```

### Set Props for Direct Updates (Dash 2.16+)

```python
app.clientside_callback(
    """
    function() {
        // Listen for keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl+S to save
            if (e.ctrlKey && e.keyCode == 83) {
                e.preventDefault();
                dash_clientside.set_props('save-indicator', {
                    children: 'Saving...',
                    style: {color: 'orange'}
                });

                // Simulate save
                setTimeout(function() {
                    dash_clientside.set_props('save-indicator', {
                        children: 'Saved!',
                        style: {color: 'green'}
                    });
                }, 1000);
            }
        });

        return dash_clientside.no_update;
    }
    """,
    Output('init-trigger', 'data'),
    Input('init-trigger', 'data')
)
```

### PreventUpdate and no_update in Clientside

```python
clientside_callback(
    """
    function(value) {
        if (value === null || value === undefined) {
            throw new window.dash_clientside.PreventUpdate();
        }

        if (value < 0) {
            return dash_clientside.no_update;
        }

        return 'Value: ' + value;
    }
    """,
    Output('output', 'children'),
    Input('input', 'value')
)
```

---

## Background Callbacks

Execute long-running callbacks in separate worker processes to avoid timeouts and blocking.

### Setup with DiskcacheManager

For local development:

```python
from dash import Dash, DiskcacheManager, CeleryManager, Input, Output, callback
import diskcache

# Create cache directory
cache = diskcache.Cache("./cache")
background_callback_manager = DiskcacheManager(cache)

app = Dash(__name__, background_callback_manager=background_callback_manager)
```

### Setup with CeleryManager

For production with Redis:

```python
import os
from celery import Celery

# Configure Celery
celery_app = Celery(
    __name__,
    broker=os.environ.get('REDIS_URL', 'redis://localhost:6379/0'),
    backend=os.environ.get('REDIS_URL', 'redis://localhost:6379/1')
)

background_callback_manager = CeleryManager(
    celery_app,
    cache_by=[lambda: session_id]  # Isolate by session
)

app = Dash(__name__, background_callback_manager=background_callback_manager)
```

### Basic Background Callback

```python
@callback(
    Output('result', 'children'),
    Input('submit-btn', 'n_clicks'),
    State('input-data', 'value'),
    background=True,
    manager=background_callback_manager
)
def long_running_process(n_clicks, data):
    """Runs in background worker process."""
    if not n_clicks:
        raise PreventUpdate

    # Simulate long operation
    time.sleep(10)
    result = expensive_computation(data)

    return f"Processing complete: {result}"
```

### Progress Tracking

```python
app.layout = html.Div([
    html.Button('Start', id='start-btn'),
    dmc.Progress(id='progress-bar', value=0),
    html.Div(id='progress-text'),
    html.Div(id='result')
])

@callback(
    output=Output('result', 'children'),
    inputs=Input('start-btn', 'n_clicks'),
    background=True,
    manager=background_callback_manager,
    progress=[
        Output('progress-bar', 'value'),
        Output('progress-text', 'children')
    ],
    prevent_initial_call=True
)
def process_with_progress(set_progress, n_clicks):
    """
    Background callback with progress updates.

    set_progress is automatically injected as first parameter.
    """
    total_steps = 10

    for i in range(total_steps):
        # Simulate work
        time.sleep(1)

        # Update progress
        progress_value = int((i + 1) / total_steps * 100)
        set_progress((progress_value, f'Step {i + 1}/{total_steps}'))

    return "Processing complete!"
```

### Cancellation Support

```python
app.layout = html.Div([
    html.Button('Start Processing', id='start-btn'),
    html.Button('Cancel', id='cancel-btn'),
    html.Div(id='status'),
    dmc.Progress(id='progress', value=0)
])

@callback(
    output=Output('status', 'children'),
    inputs=Input('start-btn', 'n_clicks'),
    background=True,
    manager=background_callback_manager,
    running=[
        (Output('start-btn', 'disabled'), True, False),
        (Output('cancel-btn', 'disabled'), False, True)
    ],
    cancel=Input('cancel-btn', 'n_clicks'),
    progress=Output('progress', 'value')
)
def cancellable_process(set_progress, n_clicks):
    """
    Background callback that can be cancelled.

    When cancel input triggers, callback is terminated.
    """
    for i in range(100):
        time.sleep(0.5)
        set_progress(i + 1)

    return "Processing complete!"
```

### set_props for Dynamic Updates (Dash 2.17+)

```python
from dash import set_props

@callback(
    Output('final-output', 'children'),
    Input('stream-btn', 'n_clicks'),
    background=True,
    manager=background_callback_manager
)
def streaming_updates(set_progress, n_clicks):
    """
    Use set_props to update components not in callback outputs.
    """
    if not n_clicks:
        raise PreventUpdate

    # Update multiple components dynamically
    for i in range(10):
        time.sleep(1)

        # Update any component property on the page
        set_props('live-status', {'children': f'Processing step {i + 1}'})
        set_props('live-chart', {'figure': generate_chart(i)})

        # Also update progress output
        set_progress(f'Step {i + 1}/10')

    return "Streaming complete!"
```

### Running State Management

```python
@callback(
    Output('result', 'children'),
    Input('submit-btn', 'n_clicks'),
    background=True,
    manager=background_callback_manager,
    running=[
        (Output('submit-btn', 'disabled'), True, False),
        (Output('submit-btn', 'children'), 'Processing...', 'Submit'),
        (Output('loading-spinner', 'style'), {'display': 'block'}, {'display': 'none'})
    ]
)
def process_with_running_state(n_clicks):
    """
    running parameter: (Output, value_while_running, value_after_completion)
    """
    time.sleep(5)
    return "Processing complete"
```

---

## PreventUpdate and no_update

### PreventUpdate: Block All Updates

```python
from dash.exceptions import PreventUpdate

@callback(
    Output('output-1', 'children'),
    Output('output-2', 'children'),
    Input('input', 'value')
)
def conditional_update(value):
    """Prevent all outputs from updating."""
    if value is None or value == '':
        # Stop callback execution entirely
        raise PreventUpdate

    return f"Value: {value}", f"Length: {len(value)}"
```

### no_update: Selective Updates

```python
from dash import no_update

@callback(
    Output('valid-output', 'children'),
    Output('error-output', 'children'),
    Output('warning-output', 'children'),
    Input('input', 'value')
)
def selective_update(value):
    """Update only specific outputs."""
    if value is None:
        raise PreventUpdate

    # Validation
    if len(value) < 3:
        # Only update error, leave others unchanged
        return no_update, "Must be at least 3 characters", no_update

    if any(char.isdigit() for char in value):
        # Only update warning
        return no_update, no_update, "Contains numbers"

    # Valid input - update valid output, clear error/warning
    return f"Valid: {value}", "", ""
```

### Combining PreventUpdate and no_update

```python
@callback(
    Output('data-display', 'children'),
    Output('error-msg', 'children'),
    Input('fetch-btn', 'n_clicks'),
    State('api-url', 'value')
)
def fetch_data(n_clicks, url):
    """Prevent vs selective update based on conditions."""
    # Prevent update on initial load
    if not n_clicks:
        raise PreventUpdate

    # Validate URL
    if not url:
        # Update only error message
        return no_update, "Please enter a URL"

    try:
        data = requests.get(url).json()
        # Clear error, update data
        return json.dumps(data, indent=2), ""
    except Exception as e:
        # Update only error, leave data unchanged
        return no_update, f"Error: {str(e)}"
```

---

## Running Parameter

Show loading states and disable controls during callback execution.

### Basic Usage

```python
@callback(
    Output('result', 'children'),
    Input('submit-btn', 'n_clicks'),
    running=[
        (Output('submit-btn', 'disabled'), True, False)
    ]
)
def process_data(n_clicks):
    """Button disabled while callback runs."""
    if not n_clicks:
        raise PreventUpdate

    time.sleep(3)  # Simulate work
    return "Complete!"
```

### Multiple Running States

```python
@callback(
    Output('output', 'children'),
    Input('process-btn', 'n_clicks'),
    running=[
        (Output('process-btn', 'disabled'), True, False),
        (Output('process-btn', 'children'), 'Processing...', 'Process'),
        (Output('loading-overlay', 'style'), {'display': 'flex'}, {'display': 'none'}),
        (Output('cancel-btn', 'disabled'), False, True)
    ]
)
def long_process(n_clicks):
    """Multiple UI updates during execution."""
    if not n_clicks:
        raise PreventUpdate

    time.sleep(5)
    return "Processing complete!"
```

### With DMC Components

```python
import dash_mantine_components as dmc

@callback(
    Output('result', 'children'),
    Input('submit-btn', 'n_clicks'),
    running=[
        (Output('submit-btn', 'loading'), True, False),
        (Output('submit-btn', 'disabled'), True, False),
        (Output('progress-bar', 'style'), {'display': 'block'}, {'display': 'none'})
    ]
)
def process_with_dmc(n_clicks):
    """DMC Button has built-in loading prop."""
    if not n_clicks:
        raise PreventUpdate

    time.sleep(3)
    return "Done!"
```

---

## Allow Duplicate

Allow multiple callbacks to update the same output property.

### Basic allow_duplicate Usage

```python
# First callback updates output
@callback(
    Output('display', 'children'),
    Input('btn-1', 'n_clicks')
)
def update_from_btn1(n_clicks):
    """Primary callback - no allow_duplicate needed."""
    return f"Button 1 clicked {n_clicks} times"

# Second callback also updates same output
@callback(
    Output('display', 'children', allow_duplicate=True),
    Input('btn-2', 'n_clicks'),
    prevent_initial_call=True  # Required with allow_duplicate
)
def update_from_btn2(n_clicks):
    """Secondary callback - requires allow_duplicate."""
    return f"Button 2 clicked {n_clicks} times"
```

### Reset Pattern

```python
@callback(
    Output('counter', 'children'),
    Input('increment-btn', 'n_clicks'),
    State('counter', 'children')
)
def increment(n_clicks, current):
    """Main counter logic."""
    if current is None:
        current = "0"
    return str(int(current) + 1)

@callback(
    Output('counter', 'children', allow_duplicate=True),
    Input('reset-btn', 'n_clicks'),
    prevent_initial_call=True
)
def reset_counter(n_clicks):
    """Reset counter to zero."""
    return "0"
```

### Validation + Update Pattern

```python
@callback(
    Output('validated-input', 'value'),
    Output('error-msg', 'children'),
    Input('validated-input', 'value')
)
def validate_input(value):
    """Primary validation callback."""
    if value and not value.isalnum():
        return value, "Only alphanumeric characters allowed"
    return value, ""

@callback(
    Output('validated-input', 'value', allow_duplicate=True),
    Input('clear-btn', 'n_clicks'),
    prevent_initial_call=True
)
def clear_input(n_clicks):
    """Clear input on button click."""
    return ""
```

---

## DMC-Specific Features

### Debounce Property

DMC components support `debounce` prop to limit callback firing frequency:

```python
import dash_mantine_components as dmc

app.layout = dmc.MantineProvider([
    dmc.TextInput(
        id='search-input',
        label='Search',
        placeholder='Type to search...',
        debounce=500  # Wait 500ms after typing stops
    ),
    html.Div(id='search-results')
])

@callback(
    Output('search-results', 'children'),
    Input('search-input', 'value')
)
def search(query):
    """Only fires 500ms after user stops typing."""
    if not query:
        return ""

    results = perform_search(query)
    return f"Found {len(results)} results for '{query}'"
```

### Persistence Properties

DMC components support persistence for storing user input across sessions:

```python
dmc.TextInput(
    id='username-input',
    persistence=True,  # Enable persistence
    persistence_type='local'  # 'local', 'session', or 'memory'
)

dmc.MultiSelect(
    id='tags-select',
    data=['Python', 'JavaScript', 'Rust', 'Go'],
    persistence=True,
    persistence_type='session'
)
```

### Loading Overlays

```python
import dash_mantine_components as dmc

app.layout = dmc.MantineProvider([
    dmc.Button('Load Data', id='load-btn'),
    dmc.LoadingOverlay(
        dmc.Table(id='data-table'),
        id='table-loader'
    )
])

@callback(
    Output('data-table', 'children'),
    Output('table-loader', 'visible'),
    Input('load-btn', 'n_clicks'),
    running=[
        (Output('table-loader', 'visible'), True, False)
    ]
)
def load_data(n_clicks):
    """Show loading overlay during data fetch."""
    if not n_clicks:
        raise PreventUpdate

    time.sleep(2)  # Simulate data loading
    data = fetch_data()

    return create_table(data), False
```

### Notifications

```python
import dash_mantine_components as dmc

@callback(
    Output('notification-container', 'children'),
    Input('submit-btn', 'n_clicks'),
    State('form-data', 'value'),
    prevent_initial_call=True
)
def show_notification(n_clicks, data):
    """Display notification based on validation."""
    if not data:
        return dmc.Notification(
            title="Validation Error",
            message="Please fill in all required fields",
            color="red",
            action="show",
            id="error-notification"
        )

    # Process data
    success = process_form(data)

    if success:
        return dmc.Notification(
            title="Success",
            message="Form submitted successfully!",
            color="green",
            action="show",
            icon=DashIconify(icon="mdi:check-circle"),
            id="success-notification"
        )

    return dmc.Notification(
        title="Error",
        message="An error occurred during submission",
        color="red",
        action="show",
        id="error-notification"
    )
```

### Modals with Callbacks

```python
app.layout = dmc.MantineProvider([
    dmc.Button('Open Modal', id='open-modal-btn'),
    dmc.Modal(
        title='Confirm Action',
        id='confirm-modal',
        children=[
            dmc.Text('Are you sure you want to proceed?'),
            dmc.Group([
                dmc.Button('Cancel', id='cancel-btn', variant='outline'),
                dmc.Button('Confirm', id='confirm-btn', color='red')
            ])
        ]
    ),
    html.Div(id='action-result')
])

@callback(
    Output('confirm-modal', 'opened'),
    Input('open-modal-btn', 'n_clicks'),
    Input('cancel-btn', 'n_clicks'),
    Input('confirm-btn', 'n_clicks'),
    State('confirm-modal', 'opened'),
    prevent_initial_call=True
)
def toggle_modal(open_clicks, cancel_clicks, confirm_clicks, is_open):
    """Toggle modal visibility based on button clicks."""
    if ctx.triggered_id == 'open-modal-btn':
        return True
    elif ctx.triggered_id in ['cancel-btn', 'confirm-btn']:
        return False
    return is_open

@callback(
    Output('action-result', 'children'),
    Input('confirm-btn', 'n_clicks'),
    prevent_initial_call=True
)
def perform_action(n_clicks):
    """Execute action when confirmed."""
    perform_critical_operation()
    return "Action completed successfully"
```

---

## References

Based on official Dash documentation:

- [Advanced Callbacks](https://dash.plotly.com/advanced-callbacks)
- [Pattern-Matching Callbacks](https://dash.plotly.com/pattern-matching-callbacks)
- [Clientside Callbacks](https://dash.plotly.com/clientside-callbacks)
- [Background Callbacks](https://dash.plotly.com/background-callbacks)
- [Flexible Callback Signatures](https://dash.plotly.com/flexible-callback-signatures)
- [Dash Mantine Components](https://dash-mantine-components.com/)
