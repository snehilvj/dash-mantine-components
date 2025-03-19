from dash import Dash, html, Output, Input, State, _dash_renderer, clientside_callback
import dash_mantine_components as dmc
from dash_iconify import DashIconify
from dash.testing.wait import until
from selenium.webdriver.common.by import By
import time

_dash_renderer._set_react_version("18.2.0")


def test_001oc_optional_components(dash_duo):
    app = Dash(__name__)

    min_step = 0
    max_step = 3
    active = 0

    layout = html.Div(
        [
            dmc.Stepper(
                id="stepper",
                active=active,
                children=[
                    dmc.StepperStep(
                        label="Step 1",
                        description=html.Div(dmc.Button(id='test_button', children='test', disabled=True)),
                        children="Step 1",
                    ),
                    dmc.StepperStep(
                        label="Step 2",
                        description="Verify email",
                        children="Step 2",
                    ),
                    dmc.StepperStep(
                        label="Step 3",
                        description="Get full access",
                        children="Step 3",
                    ),
                    dmc.StepperCompleted(
                        children=dmc.Text(
                            "Completed, click back button to get to previous step",
                            ta="center",
                        )
                    ),
                ],
            ),
            dmc.Group(
                justify="center",
                mt="xl",
                children=[
                    dmc.Button("Back", id="previous-button", variant="default"),
                    dmc.Button("Next step", id="next-button"),
                ],
            ),
            html.Div(id='output')
        ]
    )

    app.layout = dmc.MantineProvider(layout)

    clientside_callback("""(n)=> {
        if (n) {
            return `clicked ${n} times`
        }
    }""",
                        Output('output', 'children'),
    Input('test_button', 'n_clicks'),
    prevent_initial_call=True,
    suppress_callback_exceptions=True)

    clientside_callback(
        """(a) => {
            return a !== 0
        }""",
        Output('test_button', 'disabled'),
        Input('stepper', 'active'),
        suppress_callback_exceptions=True
    )

    clientside_callback(
        """(n, active) => n ? Math.max(active - 1, 0) : active""",
        Output("stepper", "active", allow_duplicate=True),
        Input("previous-button", "n_clicks"),
        State("stepper", "active"),
        prevent_initial_call=True,
    )

    clientside_callback(
        """(n, active) => n ? Math.min(active + 1, 2) : active""",
        Output("stepper", "active", allow_duplicate=True),
        Input("next-button", "n_clicks"),
        State("stepper", "active"),
        prevent_initial_call=True,
    )

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#test_button", "test")
    assert dash_duo.find_element('#test_button').get_attribute('disabled') is None

    step_buttons = dash_duo.find_elements("button.mantine-Stepper-step")
    for i, btn in enumerate(step_buttons):
        btn.click()
        dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", f"Step {i + 1}")

    dash_duo.find_element("#previous-button").click()
    dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", "Step 2")

    assert dash_duo.find_element('#test_button').get_attribute('disabled') == 'true'


    dash_duo.find_element("#previous-button").click()
    dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", "Step 1")

    until(lambda: dash_duo.find_element('#test_button').get_attribute('disabled') is None, timeout=3)

    for i in range(5):
        dash_duo.find_element('#test_button').click()
        dash_duo.wait_for_text_to_equal("#output", f"clicked {i+1} times")

    assert dash_duo.get_logs() == []

def test_002oc_optional_components(dash_duo):
    ## tests async rendering and also compares after callbacks to the icon
    styles_css = """
    .dmc-api-demo-root {
      border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
      padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
      border-radius: var(--mantine-radius-md);
      font-weight: 500;
      cursor: pointer;
    
      &[data-checked] {
        background-color: var(--mantine-color-blue-filled);
        border-color: var(--mantine-color-blue-filled);
        color: var(--mantine-color-white);
      }
    }"""

    demo_py = """
    import dash_mantine_components as dmc
    
     dmc.Checkbox(
        classNames={"root": "dmc-api-demo-root"},
        label="Checkbox button",
        w=180
    )"""


    code = [
        {
            "fileName": "demo.py",
            "code": demo_py,
            "language": "python",
            "icon": html.Div(id='test-0-holder', children=DashIconify(icon="vscode-icons:file-type-reactts", width=20, id='test-0-icon')),
        },
        {
            "fileName": "styles.css",
            "code":styles_css,
            "language": "css",
            "icon": html.Div(id='test-1-holder', children=DashIconify(icon="vscode-icons:file-type-css", width=20, id='test-1-icon')),
        },
    ]


    app = Dash(external_stylesheets=dmc.styles.ALL)


    component = dmc.CodeHighlightTabs(
        code=code,
        withExpandButton=True,
        expandCodeLabel="Show full code",
        collapseCodeLabel="Show less",
        defaultExpanded=False,
        maxCollapsedHeight=100,
        m="lg"
    )


    app.layout = dmc.MantineProvider(
        [component,
         dmc.Button(id='test-0', children='Change Python Icon'),
         dmc.Button(id='test-1', children='Change CSS Icon')],
        id="mantine-provider",
        forceColorScheme="light",
    )

    for i in range(2):
        clientside_callback(
            """(n) => {
                return 'dashicons:money-alt'
            }""",
            Output(f'test-{i}-icon', 'icon'),
            Input(f'test-{i}', 'n_clicks'),
            prevent_initial_call=True,
            suppress_callback_exceptions=True
        )

    dash_duo.start_server(app)

    icons = dash_duo.find_elements('svg.iconify')

    assert len(icons) == 2

    for i in range(len(icons)):
        icon_selector = f'#test-{i}-holder svg.iconify'
        old_html = dash_duo.find_element(icon_selector).get_attribute('innerHTML')
        dash_duo.find_element(f'#test-{i}').click()
        until(lambda: dash_duo.find_element(icon_selector).get_attribute('innerHTML') != old_html, timeout=3)


def test_003oc_optional_components(dash_duo):
    ## test prop rendering
    theme_toggle = dmc.ActionIcon(
        [
            dmc.Paper(DashIconify(icon="radix-icons:sun", width=25), darkHidden=True),
            dmc.Paper(DashIconify(icon="radix-icons:moon", width=25), lightHidden=True),
        ],
        variant="transparent",
        color="yellow",
        id="color-scheme-toggle",
        size="lg",
        ms="auto",
    )

    styles_css = """
    .dmc-api-demo-root {
      border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
      padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
      border-radius: var(--mantine-radius-md);
      font-weight: 500;
      cursor: pointer;

      &[data-checked] {
        background-color: var(--mantine-color-blue-filled);
        border-color: var(--mantine-color-blue-filled);
        color: var(--mantine-color-white);
      }
    }"""

    demo_py = """
    import dash_mantine_components as dmc

     dmc.Checkbox(
        classNames={"root": "dmc-api-demo-root"},
        label="Checkbox button",
        w=180
    )"""

    code = [
        {
            "fileName": "demo.py",
            "code": demo_py,
            "language": "python",
            "icon": DashIconify(icon="vscode-icons:file-type-reactts", width=20),
        },
        {
            "fileName": "styles.css",
            "code": styles_css,
            "language": "css",
            "icon": DashIconify(icon="vscode-icons:file-type-css", width=20),
        },
    ]

    app = Dash(external_stylesheets=dmc.styles.ALL)

    component = dmc.CodeHighlightTabs(
        code=code,
        withExpandButton=True,
        expandCodeLabel="Show full code",
        collapseCodeLabel="Show less",
        defaultExpanded=False,
        maxCollapsedHeight=100,
        m="lg"
    )

    app.layout = dmc.MantineProvider(
        [theme_toggle, dmc.Text("Your page content", id='text'), component],
        id="mantine-provider",
        forceColorScheme="light",
    )

    @app.callback(
        Output("mantine-provider", "forceColorScheme"),
        Input("color-scheme-toggle", "n_clicks"),
        State("mantine-provider", "forceColorScheme"),
        prevent_initial_call=True,
    )
    def switch_theme(_, theme):
        return "dark" if theme == "light" else "light"

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#text", "Your page content")
    icons = dash_duo.find_elements('svg.iconify')

    assert len(icons) == 2

    dash_duo.find_element('#color-scheme-toggle').click()
    ## make sure switch to dark
    until(lambda: dash_duo.driver.find_element(By.TAG_NAME, 'html').get_attribute('data-mantine-color-scheme') == 'dark', timeout=3)
    time.sleep(2)
    
    ## make sure no issues causing a reload
    until(
        lambda: dash_duo.driver.find_element(By.TAG_NAME, 'html').get_attribute('data-mantine-color-scheme') == 'dark',
        timeout=3)
    assert dash_duo.get_logs() == []