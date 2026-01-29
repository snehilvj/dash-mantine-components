"""Single-Page Dash Mantine Components Application Template

Compatible with: DMC 2.x (dash-mantine-components>=2.5.0)

Complete template for a single-page DMC app with:
- MantineProvider wrapper with theme persistence
- Theme toggle functionality (clientside callback)
- Basic layout with Container, Stack, Group
- Example form with inputs and submit callback
- Notification system
- Loading states for async operations

Run with: python app_single_page.py
"""

import dash_mantine_components as dmc
from dash import Dash, Input, Output, State, callback, clientside_callback, dcc, html
from dash_iconify import DashIconify

# Initialize app
app = Dash(
    __name__,
    title="DMC Single Page App",
    update_title="Loading...",
    suppress_callback_exceptions=True,
)

# App layout
app.layout = dmc.MantineProvider(
    id="mantine-provider",
    forceColorScheme="light",
    children=[
        # Theme persistence store
        dcc.Store(id="theme-store", storage_type="local", data={"theme": "light"}),
        # Notification container
        dmc.NotificationContainer(position="top-right"),
        html.Div(id="notifications-container"),
        # Main content
        dmc.Container(
            size="md",
            px="lg",
            py="xl",
            children=[
                dmc.Stack(
                    gap="lg",
                    children=[
                        # Header with theme toggle
                        dmc.Group(
                            justify="space-between",
                            mb="xl",
                            children=[
                                dmc.Title("DMC Single Page App", order=1),
                                dmc.ActionIcon(
                                    id="theme-toggle",
                                    variant="subtle",
                                    color="gray",
                                    size="lg",
                                    children=DashIconify(
                                        id="theme-icon",
                                        icon="radix-icons:moon",
                                        width=20,
                                    ),
                                ),
                            ],
                        ),
                        # Welcome card
                        dmc.Card(
                            withBorder=True,
                            shadow="sm",
                            radius="md",
                            children=[
                                dmc.Text(
                                    "Welcome to your DMC app!",
                                    size="lg",
                                    fw=500,
                                    mb="xs",
                                ),
                                dmc.Text(
                                    "This template includes theme switching, form handling, and notifications.",
                                    size="sm",
                                    c="dimmed",
                                ),
                            ],
                        ),
                        # Example form
                        dmc.Paper(
                            withBorder=True,
                            shadow="xs",
                            radius="md",
                            p="xl",
                            children=[
                                dmc.Stack(
                                    gap="md",
                                    children=[
                                        dmc.Title("Example Form", order=3, mb="sm"),
                                        dmc.TextInput(
                                            id="name-input",
                                            label="Name",
                                            placeholder="Enter your name",
                                            required=True,
                                            leftSection=DashIconify(
                                                icon="radix-icons:person"
                                            ),
                                        ),
                                        dmc.Select(
                                            id="category-select",
                                            label="Category",
                                            placeholder="Select a category",
                                            data=[
                                                {
                                                    "label": "Development",
                                                    "value": "dev",
                                                },
                                                {"label": "Design", "value": "design"},
                                                {
                                                    "label": "Marketing",
                                                    "value": "marketing",
                                                },
                                            ],
                                            required=True,
                                        ),
                                        dmc.Textarea(
                                            id="message-input",
                                            label="Message",
                                            placeholder="Enter your message",
                                            minRows=3,
                                            autosize=True,
                                        ),
                                        dmc.Button(
                                            id="submit-button",
                                            children="Submit",
                                            leftSection=DashIconify(
                                                icon="radix-icons:paper-plane"
                                            ),
                                            fullWidth=True,
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        # Results area with loading wrapper
                        dcc.Loading(
                            id="loading",
                            type="default",
                            children=html.Div(id="results-area"),
                        ),
                    ],
                ),
            ],
        ),
    ],
)


# Theme toggle clientside callback
clientside_callback(
    """
    function(n_clicks, data) {
        if (!n_clicks) {
            return window.dash_clientside.no_update;
        }
        const newTheme = data.theme === 'light' ? 'dark' : 'light';
        return [
            newTheme,
            { theme: newTheme },
            newTheme === 'dark' ? 'radix-icons:sun' : 'radix-icons:moon'
        ];
    }
    """,
    [
        Output("mantine-provider", "forceColorScheme"),
        Output("theme-store", "data"),
        Output("theme-icon", "icon"),
    ],
    Input("theme-toggle", "n_clicks"),
    State("theme-store", "data"),
)


# Form submit callback
@callback(
    Output("notifications-container", "children"),
    Output("results-area", "children"),
    Input("submit-button", "n_clicks"),
    State("name-input", "value"),
    State("category-select", "value"),
    State("message-input", "value"),
    prevent_initial_call=True,
)
def handle_submit(n_clicks, name, category, message):
    """Handle form submission and display results."""
    if not all([name, category]):
        notification = dmc.Notification(
            id="error-notification",
            title="Validation Error",
            message="Please fill in all required fields",
            color="red",
            action="show",
            icon=DashIconify(icon="radix-icons:cross-circled"),
        )
        return notification, ""

    # Success notification
    notification = dmc.Notification(
        id="success-notification",
        title="Success!",
        message=f"Form submitted by {name}",
        color="green",
        action="show",
        icon=DashIconify(icon="radix-icons:check-circled"),
    )

    # Display results
    results = dmc.Card(
        withBorder=True,
        shadow="sm",
        radius="md",
        children=[
            dmc.Stack(
                gap="xs",
                children=[
                    dmc.Title("Submission Results", order=4, mb="sm"),
                    dmc.Text([dmc.Text("Name: ", fw=500, span=True), name]),
                    dmc.Text([dmc.Text("Category: ", fw=500, span=True), category]),
                    dmc.Text(
                        [
                            dmc.Text("Message: ", fw=500, span=True),
                            message or "No message",
                        ]
                    ),
                ],
            ),
        ],
    )

    return notification, results


if __name__ == "__main__":
    app.run(debug=True, port=8050)
