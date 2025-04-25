from dash import Dash, html, Output, Input, State, _dash_renderer, clientside_callback, no_update
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

    step_buttons = dash_duo.find_elements("button.mantine-Stepper-step .mantine-Stepper-stepIcon")
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
    dash_duo.wait_for_text_to_equal(".mantine-CodeHighlightTabs-files span:nth-child(2)", "demo.py")

    until(lambda: len(dash_duo.find_elements('svg.iconify')) == 4, timeout=3)

    dash_duo.find_element('#color-scheme-toggle').click()
    ## make sure switch to dark
    until(lambda: dash_duo.driver.find_element(By.TAG_NAME, 'html').get_attribute('data-mantine-color-scheme') == 'dark', timeout=3)
    time.sleep(2)

    ## make sure no issues causing a reload
    until(
        lambda: dash_duo.driver.find_element(By.TAG_NAME, 'html').get_attribute('data-mantine-color-scheme') == 'dark',
        timeout=3)
    assert dash_duo.get_logs() == []


def test_003oc_optional_components(dash_duo):
    app = Dash(external_stylesheets=dmc.styles.ALL)

    app.layout = dmc.MantineProvider(
        dmc.Timeline(
            children=[
                dmc.TimelineItem(
                    title="Default bullet",
                    children=dmc.Text("Default bullet without anything", c="dimmed", size="sm")
                ),
                dmc.TimelineItem(
                    title="Avatar",
                    bullet=dmc.Avatar(
                        size=22,
                        radius="xl",
                        src="https://avatars.githubusercontent.com/u/91216500?v=4"
                    ),
                    children=dmc.Text("Timeline bullet as avatar image", c="dimmed", size="sm")
                ),
                dmc.TimelineItem(
                    title="Icon",
                    bullet=DashIconify(icon="tabler:sun", width=13),
                    children=dmc.Text("Timeline bullet as icon", c="dimmed", size="sm")
                ),
                dmc.TimelineItem(
                    title="ThemeIcon",
                    bullet=dmc.ThemeIcon(
                        size=22,
                        variant="gradient",
                        gradient={"from": "lime", "to": "cyan"},
                        radius="xl",
                        children=DashIconify(icon="tabler:video", width=13)
                    ),
                    children=dmc.Text("Timeline bullet as ThemeIcon component", c="dimmed", size="sm")
                )
            ],
            bulletSize=24
        )
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal(".mantine-Timeline-itemTitle", "Default bullet")
    items = dash_duo.find_elements(".mantine-Timeline-item")
    assert len(items) == 4

    tests = [
        {'.mantine-Timeline-itemTitle': 'Default bullet', '.mantine-Timeline-itemBullet': ''},
        {'.mantine-Timeline-itemTitle': 'Avatar', '.mantine-Timeline-itemBullet img': {'attribute': 'src', 'value': 'https://avatars.githubusercontent.com/u/91216500?v=4'}},
        {'.mantine-Timeline-itemTitle': 'Icon', '.mantine-Timeline-itemBullet svg': ''},
        {'.mantine-Timeline-itemTitle': 'ThemeIcon', '.mantine-Timeline-itemBullet > .mantine-ThemeIcon-root': ''}
    ]

    for i, item in enumerate(items):
        for k, v in tests[i].items():
            if isinstance(v, str):
                try:
                    assert item.find_element(By.CSS_SELECTOR, k).text == v, f'{i} {k} expected {v}'
                except Exception as e:
                    assert 'test' == k, str(e)
            else:
                assert item.find_element(By.CSS_SELECTOR, k).get_attribute(v['attribute']) == v['value'], f'{i} {k} expected {v}'

def test_004oc_optional_components(dash_duo):
    app = Dash(external_stylesheets=dmc.styles.ALL)

    data = [
        ["Preview", "tabler:eye"],
        ["Code", "tabler:code"],
        ["Export", "tabler:external-link"],
    ]

    app.layout = dmc.MantineProvider(
        [dmc.SegmentedControl(
            id="segmented-with-react-nodes",
            value="Preview",
            data=[
                {
                    "value": v,
                    "label": dmc.Center(
                        [DashIconify(icon=icon, width=16, id=f'icon-{i}'), html.Span(v)],
                        style={"gap": 10},
                    ),
                }
                for i, [v, icon] in enumerate(data)
            ],
            mb=10,
        ),
            dmc.Button(id='update_icons')
        ]
    )

    def shift_array(array):
        if not array:
            return array  # Return the array as is if it's empty

        # Shift elements by one position
        shifted_array = array[-1:] + array[:-1]
        return shifted_array

    @app.callback(
        [Output(f'icon-{i}', 'icon') for i in range(3)],
        Input('update_icons', 'n_clicks'),
        [State(f'icon-{i}', 'icon') for i in range(3)],
        prevent_initial_call=True
    )
    def update_icons(n, *args):
        return shift_array(list(args))

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal(".mantine-SegmentedControl-innerLabel span", "Preview")
    items = dash_duo.find_elements(".mantine-SegmentedControl-control")
    assert len(items) == 3

    tests = [
        {'.mantine-SegmentedControl-innerLabel span': 'Preview', 'svg': ''},
        {'.mantine-SegmentedControl-innerLabel span': 'Code', 'svg': ''},
        {'.mantine-SegmentedControl-innerLabel span': 'Export', 'svg': ''},
    ]

    htmls = {}
    for x in range(3):
        old_html = ''
        for i, item in enumerate(items):
            for k, v in tests[i].items():
                if isinstance(v, str):
                    try:
                        assert item.find_element(By.CSS_SELECTOR, k).text == v, f'{i} {k} expected {v}'
                    except Exception as e:
                        assert 'test' == k, str(e)
            until(lambda: item.find_element(By.CSS_SELECTOR, 'svg').get_attribute('outerHTML') != htmls.get(f'.mantine-SegmentedControl-control{i}', ''), 3)
            current_html = item.find_element(By.CSS_SELECTOR, 'svg').get_attribute('outerHTML')
            htmls[f'.mantine-SegmentedControl-control{i}'] = current_html
            assert old_html != current_html
            old_html = current_html
        dash_duo.find_element('#update_icons').click()

def test_005oc_optional_components(dash_duo):
    import random

    # prepare the timeline items
    timeline_items = [
        dmc.TimelineItem(
            title=char,
            children=dmc.Text(char)
        )
        for char in list('ABCDE')
    ]

    app = Dash()
    app.layout = dmc.MantineProvider(
        html.Div(
            [
                dmc.Button("Shuffle timeline-items", id="button"),
                dmc.Text(id='output_num'),
                dmc.Timeline(
                    # active=1,
                    bulletSize=15,
                    lineWidth=2,
                    id="timeline-items",
                    children=timeline_items,
                )
            ]
        )
    )


    @app.callback(
        Output('timeline-items', 'children'),
        Output('timeline-items', 'active'),
        Output('output_num', 'children'),
        Input('button', 'n_clicks'),
        prevent_initial_call=True
    )
    def update_output(n_clicks):
        if n_clicks:
            number_displayed = random.randint(0, len(timeline_items))
            print(f"Chose to display {number_displayed} timeline item(s).")
            return random.sample(timeline_items, number_displayed), random.randint(0, number_displayed), n_clicks
        else:
            return no_update, no_update, no_update

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal('#button', 'Shuffle timeline-items')
    assert len(dash_duo.get_logs()) == 0
    for i in range(1,15):
        dash_duo.find_element('#button').click()
        dash_duo.wait_for_text_to_equal('#output_num', f'{i}')
        assert len(dash_duo.get_logs()) == 0