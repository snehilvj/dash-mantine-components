"""Multi-Page Dash Mantine Components Application Template

Complete template for a multi-page DMC app with:
- Dash Pages integration
- AppShell layout (header, navbar, main content)
- NavLink navigation from page_registry
- Theme toggle with persistence
- Responsive sidebar

Directory structure:
app_multi_page.py (this file)
pages/
    __init__.py
    home.py
    analytics.py
    settings.py

Example page file (pages/home.py):
```python
import dash
from dash import html, callback, Input, Output
import dash_mantine_components as dmc

dash.register_page(__name__, path="/", name="Home", icon="radix-icons:home")

layout = dmc.Container(
    size="lg",
    py="xl",
    children=[
        dmc.Title("Home Page", order=1),
        dmc.Text("Welcome to the home page!", mt="md"),
    ],
)
```

Run with: python app_multi_page.py
"""

import dash_mantine_components as dmc
from dash import (
    Dash,
    Input,
    Output,
    State,
    clientside_callback,
    dcc,
    page_container,
)
from dash_iconify import DashIconify

# Initialize app with pages
app = Dash(
    __name__,
    title="DMC Multi-Page App",
    use_pages=True,
    suppress_callback_exceptions=True,
)

# Server for deployment
server = app.server


def create_navbar():
    """Create navigation sidebar with links from page_registry."""
    from dash import page_registry

    nav_links = []
    for page_path, page_info in page_registry.items():
        # Skip the not_found_404 page
        if page_path == "dash.page_registry.not_found_404":
            continue

        nav_links.append(
            dmc.NavLink(
                label=page_info.get("name", "Page"),
                href=page_info.get("path", "/"),
                leftSection=DashIconify(
                    icon=page_info.get("icon", "radix-icons:dot-filled"),
                    width=20,
                ),
                variant="subtle",
                active="exact",
            )
        )

    return dmc.Stack(
        gap="xs",
        p="md",
        children=[
            dmc.Title("Navigation", order=5, c="dimmed", mb="sm"),
            *nav_links,
        ],
    )


def create_header():
    """Create app header with title and theme toggle."""
    return dmc.Group(
        justify="space-between",
        h="100%",
        px="md",
        children=[
            dmc.Group(
                gap="sm",
                children=[
                    dmc.ActionIcon(
                        id="navbar-toggle",
                        variant="subtle",
                        color="gray",
                        size="lg",
                        hiddenFrom="sm",
                        children=DashIconify(
                            icon="radix-icons:hamburger-menu", width=20
                        ),
                    ),
                    dmc.Title("DMC Multi-Page App", order=3),
                ],
            ),
            dmc.Group(
                gap="sm",
                children=[
                    dmc.Switch(
                        id="theme-switch",
                        onLabel=DashIconify(icon="radix-icons:sun", width=20),
                        offLabel=DashIconify(icon="radix-icons:moon", width=20),
                        size="lg",
                        persistence=True,
                        persistence_type="local",
                    ),
                ],
            ),
        ],
    )


# App layout with AppShell
app.layout = dmc.MantineProvider(
    id="mantine-provider",
    forceColorScheme="light",
    children=[
        # Theme persistence
        dcc.Store(id="theme-store", storage_type="local", data={"theme": "light"}),
        dmc.AppShell(
            id="app-shell",
            children=[
                # Header
                dmc.AppShellHeader(create_header()),
                # Navbar (sidebar)
                dmc.AppShellNavbar(
                    id="navbar",
                    children=create_navbar(),
                ),
                # Main content area
                dmc.AppShellMain(
                    dmc.Container(
                        size="xl",
                        py="md",
                        children=page_container,
                    )
                ),
            ],
            header={"height": 60},
            navbar={
                "width": 250,
                "breakpoint": "sm",
                "collapsed": {"mobile": True},
            },
            padding="md",
        ),
    ],
)


# Theme toggle callback
@app.callback(
    Output("mantine-provider", "forceColorScheme"),
    Output("theme-store", "data"),
    Input("theme-switch", "checked"),
    prevent_initial_call=True,
)
def toggle_theme(checked):
    """Toggle between light and dark theme."""
    theme = "dark" if checked else "light"
    return theme, {"theme": theme}


# Initialize theme from storage
clientside_callback(
    """
    function(data) {
        if (data && data.theme) {
            return data.theme === 'dark';
        }
        return false;
    }
    """,
    Output("theme-switch", "checked"),
    Input("theme-store", "data"),
)


# Navbar toggle for mobile
clientside_callback(
    """
    function(n_clicks, opened) {
        if (n_clicks) {
            return !opened;
        }
        return opened || false;
    }
    """,
    Output("navbar", "collapsed"),
    Input("navbar-toggle", "n_clicks"),
    State("navbar", "collapsed"),
    prevent_initial_call=True,
)


if __name__ == "__main__":
    # Import pages (create these files in a pages/ directory)
    # The pages will be automatically registered if they use dash.register_page()

    app.run(debug=True, port=8050)


# ============================================================================
# Example Page Files
# ============================================================================

"""
Create these files in a 'pages/' directory:

--- pages/__init__.py ---
(empty file)

--- pages/home.py ---
import dash
from dash import html, callback, Input, Output
import dash_mantine_components as dmc
from dash_iconify import DashIconify

dash.register_page(
    __name__,
    path="/",
    name="Home",
    icon="radix-icons:home",
)

layout = dmc.Container(
    size="lg",
    py="xl",
    children=[
        dmc.Stack(
            gap="md",
            children=[
                dmc.Title("Welcome Home", order=1),
                dmc.Text(
                    "This is a multi-page Dash Mantine Components application.",
                    size="lg",
                ),
                dmc.Card(
                    withBorder=True,
                    shadow="sm",
                    radius="md",
                    p="xl",
                    children=[
                        dmc.Text("Quick Stats", fw=500, size="lg", mb="md"),
                        dmc.SimpleGrid(
                            cols={"base": 1, "sm": 3},
                            children=[
                                dmc.Paper(
                                    p="md",
                                    radius="md",
                                    withBorder=True,
                                    children=[
                                        dmc.Group(gap="xs", mb="xs", children=[
                                            DashIconify(icon="radix-icons:dashboard", width=20),
                                            dmc.Text("Metric 1", size="sm", c="dimmed"),
                                        ]),
                                        dmc.Title("1,234", order=3),
                                    ],
                                ),
                                dmc.Paper(
                                    p="md",
                                    radius="md",
                                    withBorder=True,
                                    children=[
                                        dmc.Group(gap="xs", mb="xs", children=[
                                            DashIconify(icon="radix-icons:activity-log", width=20),
                                            dmc.Text("Metric 2", size="sm", c="dimmed"),
                                        ]),
                                        dmc.Title("567", order=3),
                                    ],
                                ),
                                dmc.Paper(
                                    p="md",
                                    radius="md",
                                    withBorder=True,
                                    children=[
                                        dmc.Group(gap="xs", mb="xs", children=[
                                            DashIconify(icon="radix-icons:bar-chart", width=20),
                                            dmc.Text("Metric 3", size="sm", c="dimmed"),
                                        ]),
                                        dmc.Title("89", order=3),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)

--- pages/analytics.py ---
import dash
from dash import html, callback, Input, Output, dcc
import dash_mantine_components as dmc
import plotly.express as px
import pandas as pd

dash.register_page(
    __name__,
    path="/analytics",
    name="Analytics",
    icon="radix-icons:bar-chart",
)

# Sample data
df = pd.DataFrame({
    "Month": ["Jan", "Feb", "Mar", "Apr", "May"],
    "Sales": [100, 150, 120, 180, 200],
})

layout = dmc.Container(
    size="lg",
    py="xl",
    children=[
        dmc.Stack(
            gap="md",
            children=[
                dmc.Title("Analytics Dashboard", order=1),
                dmc.Card(
                    withBorder=True,
                    shadow="sm",
                    radius="md",
                    p="xl",
                    children=[
                        dmc.Text("Sales Over Time", fw=500, size="lg", mb="md"),
                        dcc.Graph(
                            figure=px.line(
                                df,
                                x="Month",
                                y="Sales",
                                markers=True,
                            ).update_layout(
                                template="plotly_white",
                                margin=dict(l=0, r=0, t=0, b=0),
                            )
                        ),
                    ],
                ),
            ],
        ),
    ],
)

--- pages/settings.py ---
import dash
from dash import html, callback, Input, Output
import dash_mantine_components as dmc
from dash_iconify import DashIconify

dash.register_page(
    __name__,
    path="/settings",
    name="Settings",
    icon="radix-icons:gear",
)

layout = dmc.Container(
    size="lg",
    py="xl",
    children=[
        dmc.Stack(
            gap="md",
            children=[
                dmc.Title("Settings", order=1),
                dmc.Card(
                    withBorder=True,
                    shadow="sm",
                    radius="md",
                    p="xl",
                    children=[
                        dmc.Stack(
                            gap="lg",
                            children=[
                                dmc.TextInput(
                                    label="Username",
                                    placeholder="Enter username",
                                    leftSection=DashIconify(icon="radix-icons:person"),
                                ),
                                dmc.TextInput(
                                    label="Email",
                                    placeholder="Enter email",
                                    leftSection=DashIconify(icon="radix-icons:envelope-closed"),
                                ),
                                dmc.Switch(
                                    label="Email notifications",
                                    description="Receive email updates",
                                ),
                                dmc.Switch(
                                    label="Marketing emails",
                                    description="Receive promotional content",
                                ),
                                dmc.Button(
                                    "Save Settings",
                                    leftSection=DashIconify(icon="radix-icons:check"),
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
"""
