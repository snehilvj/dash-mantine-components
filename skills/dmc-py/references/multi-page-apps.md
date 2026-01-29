---
title: Multi-Page Apps with Dash Pages and DMC
description: Dash Pages configuration, routing, and AppShell integration for DMC apps.
tags: pages, multi-page, routing, appshell, navigation, dmc
---

## Multi-Page Apps with Dash Pages and DMC

Comprehensive guide to building multi-page applications using Dash Pages with Dash Mantine Components.

## Table of Contents

- [Setup and Configuration](#setup-and-configuration)
- [Page Registration](#page-registration)
- [Navigation with NavLink](#navigation-with-navlink)
- [AppShell Integration](#appshell-integration)
- [Active Link Styling](#active-link-styling)
- [Advanced Patterns](#advanced-patterns)

## Setup and Configuration

### Basic App Setup

Enable Dash Pages by setting `use_pages=True` in your Dash app initialization:

```python
from dash import Dash
import dash
import dash_mantine_components as dmc

app = Dash(__name__, use_pages=True, pages_folder="pages")
```

**Configuration Options:**

- `use_pages=True` - Enables Dash Pages functionality
- `pages_folder` - Directory containing page modules (default: "pages")
- Can be set to empty string `""` to register pages inline

### Page Container

The `dash.page_container` component renders the content of the active page:

```python
app.layout = dmc.MantineProvider([
    dmc.AppShell([
        dmc.AppShellNavbar(children=[...]),
        dmc.AppShellMain(dash.page_container)
    ])
])
```

## Page Registration

### Using dash.register_page()

Register pages with `dash.register_page()` to define routes and metadata:

```python
import dash
from dash import html

# Register a page
dash.register_page(
    "home",
    path="/",
    layout=html.Div("Home Page Content")
)

dash.register_page(
    "analytics",
    path="/analytics",
    name="Analytics Dashboard",
    layout=html.Div("Analytics Content")
)
```

### Registration Options

```python
dash.register_page(
    module_name,           # Unique identifier for the page
    path="/custom-path",   # URL path (default: "/module-name")
    name="Display Name",   # Used in navigation (default: module_name)
    title="Page Title",    # Browser tab title
    description="...",     # Meta description
    order=1,              # Order in page_registry
    layout=...,           # Page layout (component or function)
)
```

### Page Registry

Access all registered pages via `dash.page_registry`:

```python
from dash import page_registry

# page_registry is a dict with page info:
# {
#     "module_name": {
#         "name": "Display Name",
#         "path": "/path",
#         "relative_path": "/path",
#         ...
#     },
#     ...
# }
```

## Navigation with NavLink

### Basic NavLink

Create navigation links using DMC NavLink component:

```python
import dash_mantine_components as dmc

dmc.NavLink(
    label="Home",
    href="/",
    leftSection=DashIconify(icon="tabler:home")
)
```

### Building Navigation from Page Registry

Automatically generate navigation from registered pages:

```python
from dash import page_registry
import dash_mantine_components as dmc

navbar_links = [
    dmc.NavLink(
        label=page["name"],
        href=page["relative_path"],
        leftSection=DashIconify(icon=page.get("icon", "tabler:file"))
    )
    for page in page_registry.values()
]
```

### NavLink Props

**Common Props:**

- `label` - Link text
- `href` - URL path
- `active` - Controls active styling (True/False/"exact"/"partial")
- `leftSection` - Icon or component on left
- `rightSection` - Icon or component on right
- `description` - Subtitle text below label
- `disabled` - Disable the link
- `n_clicks` - For callbacks
- `variant` - Style variant ("filled"/"light"/"subtle")
- `color` - Theme color

## Active Link Styling

### Automatic Active States (DMC >= 1.0.0)

Set `active` prop to automatically highlight based on current URL:

```python
# Exact match: active only when pathname exactly matches href
dmc.NavLink(label="Home", href="/", active="exact")

# Partial match: active when pathname starts with href (includes subpages)
dmc.NavLink(label="Dashboard", href="/dashboard", active="partial")
```

**Example:**

- User on `/dashboard/analytics`:
  - `href="/dashboard"` with `active="partial"` → Active
  - `href="/dashboard"` with `active="exact"` → Not active
  - `href="/dashboard/analytics"` with `active="exact"` → Active

### Manual Active State (Callbacks)

For DMC < 1.0.0 or custom logic, use callbacks:

```python
from dash import ALL, Input, Output, callback, callback_context

# Create NavLinks with pattern-matching IDs
navbar = [
    dmc.NavLink(
        label=page["name"],
        href=page["relative_path"],
        id={"type": "navlink", "index": page["relative_path"]},
    )
    for page in page_registry.values()
]

# Update active state based on pathname
@callback(
    Output({"type": "navlink", "index": ALL}, "active"),
    Input("_pages_location", "pathname")
)
def update_navlinks(pathname):
    return [
        control["id"]["index"] == pathname
        for control in callback_context.outputs_list
    ]
```

## AppShell Integration

### Complete Multi-Page Layout

Combine AppShell with Dash Pages for a complete app structure:

```python
from dash import Dash, page_container, page_registry
import dash_mantine_components as dmc
from dash_iconify import DashIconify

app = Dash(__name__, use_pages=True)

# Build navigation from page registry
nav_links = [
    dmc.NavLink(
        label=page["name"],
        href=page["path"],
        active="partial",
        leftSection=DashIconify(icon="tabler:file", width=20)
    )
    for page in page_registry.values()
]

app.layout = dmc.MantineProvider([
    dmc.AppShell(
        [
            dmc.AppShellHeader(
                dmc.Group([
                    dmc.Burger(id="burger", size="sm", hiddenFrom="sm"),
                    dmc.Title("My App", c="blue"),
                ], h="100%", px="md")
            ),
            dmc.AppShellNavbar(
                id="navbar",
                children=nav_links,
                p="md"
            ),
            dmc.AppShellMain(page_container)
        ],
        header={"height": 60},
        navbar={
            "width": 300,
            "breakpoint": "sm",
            "collapsed": {"mobile": True},
        },
        id="appshell"
    )
])
```

### Responsive Navigation

Make navbar collapsible on mobile:

```python
from dash import Input, Output, State, callback

@callback(
    Output("appshell", "navbar"),
    Input("burger", "opened"),
    State("appshell", "navbar"),
)
def toggle_navbar(opened, navbar):
    navbar["collapsed"] = {"mobile": not opened}
    return navbar
```

## Advanced Patterns

### Variable Paths

Create dynamic routes with path variables:

```python
# Register page with variable path
dash.register_page(
    "user_profile",
    path="/user/<user_id>",
    layout=lambda user_id: html.Div(f"Profile for user {user_id}")
)
```

### Query Strings

Access query string parameters in page layouts:

```python
from dash import dcc
from urllib.parse import parse_qs, urlparse

def layout(**query_params):
    # query_params contains parsed query string
    return html.Div([
        html.H1(f"Search: {query_params.get('q', [''])[0]}")
    ])

dash.register_page("search", path="/search", layout=layout)
```

### Nested Navigation

Create hierarchical navigation with nested NavLinks:

```python
dmc.NavLink(
    label="Dashboard",
    href="/dashboard",
    active="partial",
    childrenOffset=28,
    children=[
        dmc.NavLink(
            label="Analytics",
            href="/dashboard/analytics",
            active="exact"
        ),
        dmc.NavLink(
            label="Reports",
            href="/dashboard/reports",
            active="exact"
        ),
    ],
)
```

### Nested Layouts and Templates

Share layout components across pages:

```python
# layouts/main_template.py
def main_template(content):
    return dmc.Container([
        dmc.Title("App Header"),
        dmc.Divider(my="md"),
        content
    ])

# pages/dashboard.py
from layouts.main_template import main_template

dash.register_page(
    __name__,
    layout=main_template(html.Div("Dashboard content"))
)
```

### Page Metadata and Ordering

Control page display order and metadata:

```python
# pages/home.py
dash.register_page(
    __name__,
    path="/",
    name="Home",
    title="My App - Home",
    order=0
)

# pages/about.py
dash.register_page(
    __name__,
    name="About",
    order=1
)

# Navigation will be ordered: Home, About
```

## Complete Example

Minimal multi-page app with active links:

```python
import dash
import dash_mantine_components as dmc
from dash import Dash, html

app = Dash(__name__, use_pages=True, pages_folder="")

# Register pages inline
dash.register_page("home", path="/", layout=html.Div("Home Content"))
dash.register_page("page1", path="/page-1", layout=html.Div("Page 1 Content"))
dash.register_page("page1s1", path="/page-1/sub-1", layout=html.Div("Subpage 1"))
dash.register_page("page1s2", path="/page-1/sub-2", layout=html.Div("Subpage 2"))

# Layout with navigation
app.layout = dmc.MantineProvider([
    dmc.Box([
        # Navigation
        dmc.NavLink(label="Home", href="/", active="exact"),
        dmc.NavLink(
            label="Page 1",
            href="/page-1",
            active="partial",
            childrenOffset=28,
            children=[
                dmc.NavLink(label="Sub 1", href="/page-1/sub-1", active="exact"),
                dmc.NavLink(label="Sub 2", href="/page-1/sub-2", active="exact"),
            ],
        ),
        dmc.Divider(my="md"),

        # Page content
        dash.page_container
    ])
])

if __name__ == "__main__":
    app.run(debug=True)
```

## Best Practices

1. **Use page_registry** - Build navigation dynamically from page_registry
2. **Set active states** - Use `active="exact"` or `active="partial"` for automatic highlighting
3. **Consistent naming** - Use clear, consistent page names and paths
4. **Mobile-first** - Make navigation collapsible on mobile devices
5. **Group related pages** - Use nested NavLinks for related sections
6. **Error pages** - Register a 404 page for undefined routes
7. **Loading states** - Consider using dcc.Loading for page transitions

## Common Issues

**Active state not working:**

- Ensure DMC >= 1.0.0 for automatic active states
- Check that `href` matches the actual path structure
- Use "exact" for specific pages, "partial" for parent sections

**Page not rendering:**

- Verify page is registered before app.run()
- Check `path` in page_registry
- Ensure `use_pages=True` in Dash initialization

**Navigation not updating:**

- Confirm `dash.page_container` is in layout
- Check for JavaScript errors in browser console
- Verify callback dependencies are correct
