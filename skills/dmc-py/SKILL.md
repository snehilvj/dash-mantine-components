---
name: dmc-py
description: |
  Expert guidance for building Dash applications with Dash Mantine Components (DMC) v2.x.
  Use when creating dashboards, forms, data visualization apps with DMC.
  Covers: MantineProvider theming, style props (m, p, c, bg, w, h), Styles API,
  callbacks (basic, pattern-matching ALL/MATCH/ALLSMALLER, clientside, background),
  multi-page apps with Dash Pages, charts (LineChart, BarChart, DonutChart),
  date pickers, modals, and all 100+ components.
  Triggers on: dash-mantine-components, DMC, MantineProvider, dmc.Button, dmc.Select,
  dmc.Modal, dmc.BarChart, Mantine theme, Dash UI components, Dash callbacks,
  multi-page Dash app, pattern-matching callbacks, clientside callbacks, AppShell.
---

# Dash Mantine Components (DMC) v2.x

Build modern Dash applications with 100+ Mantine UI components.

## Quick Start

Minimal DMC app requiring MantineProvider wrapper:

```python
from dash import Dash, callback, Input, Output
import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = dmc.MantineProvider([
    dmc.Container([
        dmc.Title("My DMC App", order=1),
        dmc.TextInput(label="Name", id="name-input", placeholder="Enter name"),
        dmc.Button("Submit", id="submit-btn", mt="md"),
        dmc.Text(id="output", mt="md"),
    ], size="sm", py="xl")
])

@callback(Output("output", "children"), Input("submit-btn", "n_clicks"), Input("name-input", "value"))
def update_output(n_clicks, name):
    if not n_clicks:
        return ""
    return f"Hello, {name or 'World'}!"

if __name__ == "__main__":
    app.run(debug=True)
```

**Critical**: All DMC components MUST be inside `dmc.MantineProvider`.

> **Version Note:** This skill targets DMC 2.x (Mantine 8.x). Run `pip show dash-mantine-components` to check your installed version. For the latest features and API changes, use `fetch_docs.py` to query the official documentation at <https://www.dash-mantine-components.com/assets/llms.txt>

---

## Workflow Decision Tree

Select components by use case:

### Form Inputs

| Need | Component | Key Props |
| --- | --- | --- |
| Text input | `TextInput` | `label`, `placeholder`, `value`, `debounce` |
| Dropdown | `Select` | `data`, `value`, `searchable`, `clearable` |
| Multi-select | `MultiSelect` | `data`, `value`, `searchable` |
| Checkbox | `Checkbox` | `label`, `checked` |
| Toggle | `Switch` | `label`, `checked`, `onLabel`, `offLabel` |
| Number | `NumberInput` | `value`, `min`, `max`, `step` |
| Date | `DatePickerInput` | `value`, `type`, `minDate`, `maxDate` |
| Rich text | `Textarea` | `label`, `value`, `autosize`, `minRows` |
| File upload | `FileInput` | `value`, `accept`, `multiple` |

### Layout

| Need | Component | Key Props |
| --- | --- | --- |
| Content wrapper | `Container` | `size`, `px`, `py` |
| Vertical stack | `Stack` | `gap`, `align`, `justify` |
| Horizontal row | `Group` | `gap`, `justify`, `wrap` |
| CSS Grid | `Grid`, `GridCol` | `columns`, `gutter`, `span` |
| Full app shell | `AppShell` | `header`, `navbar`, `aside`, `footer` |
| Card container | `Card` | `shadow`, `padding`, `radius`, `withBorder` |
| Flex layout | `Flex` | `direction`, `wrap`, `gap`, `align` |

### Navigation

| Need | Component | Key Props |
| --- | --- | --- |
| Nav item | `NavLink` | `label`, `href`, `active`, `leftSection` |
| Tabs | `Tabs`, `TabsList`, `TabsPanel` | `value`, `orientation` |
| Breadcrumb | `Breadcrumbs` | `separator` |
| Stepper | `Stepper`, `StepperStep` | `active`, `onStepClick` |
| Pagination | `Pagination` | `value`, `total`, `siblings` |
| Table of contents | `TableOfContents` | `links`, `variant`, `active` |

### Feedback & Overlays

| Need | Component | Key Props |
| --- | --- | --- |
| Modal dialog | `Modal` | `opened`, `onClose`, `title`, `centered` |
| Side panel | `Drawer` | `opened`, `onClose`, `position`, `size` |
| Toast | `Notification` | `title`, `message`, `color`, `icon` |
| Alert banner | `Alert` | `title`, `color`, `variant`, `icon` |
| Loading | `Loader`, `LoadingOverlay` | `size`, `type`, `visible` |
| Progress | `Progress`, `RingProgress` | `value`, `size`, `sections` |
| Tooltip | `Tooltip` | `label`, `position`, `withArrow` |
| Copy button | `CopyButton` | `value`, `timeout` |

### Data Display

| Need | Component | Key Props |
| --- | --- | --- |
| Data table | `Table` | `data`, `striped`, `highlightOnHover` |
| Accordion | `Accordion`, `AccordionItem` | `value`, `multiple`, `variant` |
| Timeline | `Timeline`, `TimelineItem` | `active`, `bulletSize` |
| Badge | `Badge` | `color`, `variant`, `size` |

### Charts

| Need | Component | Key Props |
| --- | --- | --- |
| Line | `LineChart` | `data`, `dataKey`, `series` |
| Bar | `BarChart` | `data`, `dataKey`, `series`, `orientation` |
| Area | `AreaChart` | `data`, `dataKey`, `series` |
| Pie/Donut | `DonutChart`, `PieChart` | `data`, `chartLabel` |
| Scatter | `ScatterChart` | `data`, `dataKey`, `series` |

### What's New in Recent Versions

**v2.5.x:**

- `TableOfContents` - Auto-generated table of contents from headings
- `selectFirstOptionOnDropdownOpen` prop for Select/MultiSelect/Autocomplete
- `openOnFocus` prop for Combobox components
- AppShell `mode="static"` for nested shells
- `window.MantineCore` / `window.MantineHooks` for custom component building

**v2.4.x:**

- `CopyButton` / `CustomCopyButton` - Clipboard operations
- `getEditor(id)` - Access RichTextEditor TipTap instance in clientside callbacks
- Function props for chart axis/grid customization

**v2.3.x:**

- `MiniCalendar` - Compact calendar component
- `ScrollAreaAutoheight` - Auto-sizing scroll area
- `DirectionProvider` - RTL text direction support

→ Full component reference: [references/components-quick-ref.md](references/components-quick-ref.md)

---

## Core Patterns

### Theming

Configure theme via MantineProvider:

```python
theme = {
    "primaryColor": "blue",
    "fontFamily": "Inter, sans-serif",
    "defaultRadius": "md",
    "colors": {
        "brand": ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8",
                  "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e"]
    },
    "components": {
        "Button": {"defaultProps": {"size": "md", "radius": "md"}},
        "TextInput": {"defaultProps": {"size": "sm"}},
    }
}

app.layout = dmc.MantineProvider(
    theme=theme,
    forceColorScheme="light",  # or "dark", or None for auto
    children=[...]
)
```

**Theme Toggle Pattern** (clientside callback):

```python
from dash import clientside_callback, ClientsideFunction

app.layout = dmc.MantineProvider(
    id="mantine-provider",
    children=[
        dcc.Store(id="theme-store", storage_type="local", data="light"),
        dmc.Switch(id="theme-switch", label="Dark mode", checked=False),
        # ... rest of layout
    ]
)

clientside_callback(
    """(checked) => checked ? "dark" : "light" """,
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-switch", "checked"),
)
```

→ Full theming guide: [references/theming-patterns.md](references/theming-patterns.md)

### Styling

**Style Props** - Universal props on all DMC components:

| Prop | CSS Property | Values |
| --- | --- | --- |
| `m`, `mt`, `mb`, `ml`, `mr`, `mx`, `my` | margin | `xs`, `sm`, `md`, `lg`, `xl` or number (px) |
| `p`, `pt`, `pb`, `pl`, `pr`, `px`, `py` | padding | same as margin |
| `c` | color | `"blue"`, `"red.6"`, `"dimmed"`, `"var(--mantine-color-text)"` |
| `bg` | background | same as color |
| `w`, `h` | width, height | `"100%"`, `"50vw"`, number (px) |
| `maw`, `mah`, `miw`, `mih` | max/min width/height | same as w, h |
| `fw` | font-weight | `400`, `500`, `700` |
| `fz` | font-size | `xs`, `sm`, `md`, `lg`, `xl` or number |
| `ta` | text-align | `"left"`, `"center"`, `"right"` |
| `td` | text-decoration | `"underline"`, `"line-through"` |

**Responsive Values** - Dict with breakpoints:

```python
dmc.Button("Click", w={"base": "100%", "sm": "auto", "lg": 200})
dmc.Stack(gap={"base": "xs", "md": "lg"})
```

**Styles API** - Target nested elements:

```python
dmc.Select(
    data=["A", "B", "C"],
    classNames={"input": "my-input", "dropdown": "my-dropdown"},
    styles={"label": {"fontWeight": 700}, "input": {"borderColor": "blue"}},
)
```

→ Full styling guide: [references/styling-guide.md](references/styling-guide.md)

### Callbacks

**Basic Pattern**:

```python
from dash import callback, Input, Output, State

@callback(
    Output("output", "children"),
    Input("button", "n_clicks"),
    State("input", "value"),
    prevent_initial_call=True,
)
def update(n_clicks, value):
    return f"Clicked {n_clicks} times with value: {value}"
```

**Pattern-Matching** (dynamic components):

```python
from dash import ALL, MATCH, callback_context as ctx

# ALL: Respond to any button with type "dynamic-btn"
@callback(
    Output("output", "children"),
    Input({"type": "dynamic-btn", "index": ALL}, "n_clicks"),
)
def handle_all(n_clicks_list):
    triggered = ctx.triggered_id  # {"type": "dynamic-btn", "index": X}
    return f"Button {triggered['index']} clicked"

# MATCH: Update the output matching the triggered input
@callback(
    Output({"type": "item-output", "index": MATCH}, "children"),
    Input({"type": "item-btn", "index": MATCH}, "n_clicks"),
    prevent_initial_call=True,
)
def handle_match(n):
    return f"Clicked {n} times"
```

**Clientside Callback** (browser-side JavaScript):

```python
from dash import clientside_callback

clientside_callback(
    """(n) => n ? `Clicked ${n} times` : "Not clicked" """,
    Output("output", "children"),
    Input("button", "n_clicks"),
)
```

**DMC-Specific Props**:

- `debounce=300` - Delay callback trigger (ms) for TextInput, Textarea
- `persistence=True` - Persist value across page reloads
- `persistence_type="local"` - Storage type: memory, local, session

→ Full callbacks reference: [references/callbacks-advanced.md](references/callbacks-advanced.md)

---

## Multi-Page Apps

Use Dash Pages with DMC AppShell:

```python
# app.py
import dash
from dash import Dash
import dash_mantine_components as dmc

app = Dash(__name__, use_pages=True, pages_folder="pages")

app.layout = dmc.MantineProvider([
    dmc.AppShell(
        [
            dmc.AppShellHeader(dmc.Group([
                dmc.Title("My App", order=3),
                dmc.Switch(id="theme-switch"),
            ], h="100%", px="md")),
            dmc.AppShellNavbar([
                dmc.NavLink(label=page["name"], href=page["path"], active=page["path"] == "/")
                for page in dash.page_registry.values()
            ], p="md"),
            dmc.AppShellMain(dash.page_container),
        ],
        header={"height": 60},
        navbar={"width": 250, "breakpoint": "sm", "collapsed": {"mobile": True}},
        padding="md",
    )
])

if __name__ == "__main__":
    app.run(debug=True)
```

```python
# pages/home.py
import dash
import dash_mantine_components as dmc

dash.register_page(__name__, path="/", name="Home")

layout = dmc.Container([
    dmc.Title("Welcome", order=2),
    dmc.Text("Home page content"),
], py="xl")
```

```python
# pages/analytics.py
import dash
import dash_mantine_components as dmc

dash.register_page(__name__, path="/analytics", name="Analytics")

layout = dmc.Container([
    dmc.Title("Analytics", order=2),
    # Charts, tables, etc.
], py="xl")
```

**Variable Paths**:

```python
# pages/user.py
dash.register_page(__name__, path_template="/user/<user_id>")

def layout(user_id=None):
    return dmc.Container([
        dmc.Title(f"User: {user_id}", order=2),
    ])
```

→ Full multi-page guide: [references/multi-page-apps.md](references/multi-page-apps.md)

---

## Component Categories

Quick links to reference documentation:

| Category | Components | Reference |
| --- | --- | --- |
| **All Components** | 90+ components with props/events | [components-quick-ref.md](references/components-quick-ref.md) |
| **Theming** | MantineProvider, theme object, colors | [theming-patterns.md](references/theming-patterns.md) |
| **Styling** | Style props, Styles API, CSS variables | [styling-guide.md](references/styling-guide.md) |
| **Callbacks** | Pattern-matching, clientside, background | [callbacks-advanced.md](references/callbacks-advanced.md) |
| **Multi-Page** | Dash Pages, routing, AppShell | [multi-page-apps.md](references/multi-page-apps.md) |
| **Charts** | Data formats, series config | [charts-data-formats.md](references/charts-data-formats.md) |
| **Date Pickers** | DatePicker, DatesProvider, localization | [date-pickers-guide.md](references/date-pickers-guide.md) |
| **Dash Core** | dcc.Store, caching, performance | [dash-fundamentals.md](references/dash-fundamentals.md) |
| **Migration** | v1.x to v2.x breaking changes | [migration-v2.md](references/migration-v2.md) |

### Asset Templates

Copy and adapt these templates:

| Template | Description |
| --- | --- |
| [app_single_page.py](assets/app_single_page.py) | Complete single-page DMC app with theme toggle |
| [app_multi_page.py](assets/app_multi_page.py) | Multi-page app with Dash Pages and AppShell |
| [callbacks_patterns.py](assets/callbacks_patterns.py) | All callback pattern examples |
| [theme_presets.py](assets/theme_presets.py) | Pre-built theme configurations |

### Utility Scripts

| Script | Usage |
| --- | --- |
| [fetch_docs.py](scripts/fetch_docs.py) | `python fetch_docs.py "Select"` - Fetch/search official llms.txt |
| [scaffold_app.py](scripts/scaffold_app.py) | `python scaffold_app.py myapp --type multi --shell` |
| [generate_theme.py](scripts/generate_theme.py) | `python generate_theme.py --primary "#0ea5e9"` |
| [component_search.py](scripts/component_search.py) | `python component_search.py "select"` |

---

## Common Tasks

### Form with Validation

```python
@callback(
    Output("submit-btn", "disabled"),
    Output("error-text", "children"),
    Input("email-input", "value"),
    Input("password-input", "value"),
)
def validate_form(email, password):
    errors = []
    if not email or "@" not in email:
        errors.append("Valid email required")
    if not password or len(password) < 8:
        errors.append("Password must be 8+ characters")
    return bool(errors), ", ".join(errors)
```

### Modal Open/Close

```python
app.layout = dmc.MantineProvider([
    dmc.Button("Open Modal", id="open-modal-btn"),
    dmc.Modal(
        id="my-modal",
        title="Confirm Action",
        children=[
            dmc.Text("Are you sure?"),
            dmc.Group([
                dmc.Button("Cancel", id="cancel-btn", variant="outline"),
                dmc.Button("Confirm", id="confirm-btn", color="red"),
            ], justify="flex-end", mt="md"),
        ],
    ),
])

@callback(
    Output("my-modal", "opened"),
    Input("open-modal-btn", "n_clicks"),
    Input("cancel-btn", "n_clicks"),
    Input("confirm-btn", "n_clicks"),
    prevent_initial_call=True,
)
def toggle_modal(open_clicks, cancel, confirm):
    from dash import ctx
    if ctx.triggered_id == "open-modal-btn":
        return True
    return False
```

### Loading State

```python
from dash import dcc

app.layout = dmc.MantineProvider([
    dmc.Button("Load Data", id="load-btn"),
    dcc.Loading(
        id="loading",
        type="circle",
        children=dmc.Container(id="data-container"),
    ),
])

@callback(Output("data-container", "children"), Input("load-btn", "n_clicks"))
def load_data(n):
    import time
    time.sleep(2)  # Simulate slow operation
    return dmc.Text("Data loaded!")
```

### Chart with Data

```python
data = [
    {"month": "Jan", "sales": 100, "profit": 20},
    {"month": "Feb", "sales": 150, "profit": 35},
    {"month": "Mar", "sales": 120, "profit": 25},
]

dmc.BarChart(
    data=data,
    dataKey="month",
    series=[
        {"name": "sales", "color": "blue.6"},
        {"name": "profit", "color": "green.6"},
    ],
    h=300,
    withLegend=True,
    withTooltip=True,
)
```

---

## Troubleshooting

### Common Errors

| Error | Cause | Fix |
| --- | --- | --- |
| `MantineProvider is required` | Component outside provider | Wrap entire layout in `dmc.MantineProvider([...])` |
| `Invalid theme color` | Color not in theme | Use built-in colors (`blue`, `red`) or add to `theme["colors"]` |
| `Callback output not found` | Component not in layout | Ensure component with ID exists in layout |
| `Circular callback detected` | Output also used as Input | Use `State` instead of `Input` for non-triggering values |
| `Pattern-matching ID mismatch` | Dict keys don't match | Ensure `type` and `index` keys match exactly |
| `Duplicate callback outputs` | Same output in multiple callbacks | Add `allow_duplicate=True` to additional callbacks |

### Debug Tips

1. **Check browser console** for JavaScript errors
2. **Use `debug=True`** in `app.run()` for detailed Python errors
3. **Print `ctx.triggered_id`** to see which input fired
4. **Validate JSON-serializable** callback returns (no Python objects)
5. **Test with `prevent_initial_call=True`** to avoid startup errors

### DMC v2.x Gotchas

- `DateTimePicker`: Use `timePickerProps` not `timeInputProps`
- `Carousel`: Embla options need `{"containScroll": "trimSnaps"}` wrapper
- Default `reuseTargetNode=True` may cause Portal issues - set to `False` if overlays misbehave
- Use `MantineProvider` not `MantineProviderV2` (deprecated)

→ Full migration guide: [references/migration-v2.md](references/migration-v2.md)
