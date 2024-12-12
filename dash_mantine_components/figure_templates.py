from .theme import DEFAULT_THEME
import plotly.graph_objects as go
import plotly.io as pio
import copy


def add_figure_templates(default=None):

    """
    Create and register Plotly figure templates styled to match the Mantine default theme.

    This function generates two custom Plotly templates:
    - "mantine_light" for light mode
    - "mantine_dark" for dark mode

    Templates are registered with `plotly.io.templates`, allowing you to apply them to Plotly figures
    using the template names "mantine_light" or "mantine_dark". These templates include Mantine-inspired
    color palettes, background colors, and other layout customizations.

    Parameters:
    - default (str): The default template to apply globally. Must be either "mantine_light" or "mantine_dark".
                      If not set, the default Plotly template remains unchanged.

    Returns:
    - None: The templates are registered and optionally set as the default, but no value is returned.

    """

    colors = DEFAULT_THEME["colors"]
    font_family = DEFAULT_THEME["fontFamily"]
    # pallet generated from https://www.learnui.design/tools/data-color-picker.html#palette
    custom_colorscale = [
        "#1864ab",  # blue[9]
        "#7065b9",
        "#af61b7",
        "#e35ea5",
        "#ff6587",
        "#ff7c63",
        "#ff9e3d",
        "#fcc419",  # yellow[5]
    ]

    # Default theme configurations
    default_themes = {
        "light": {
            "colorway": [
                colors[color][6]
                for color in ["blue", "red", "green", "violet", "orange", "cyan", "pink", "yellow"]
            ],
            "paper_bgcolor":  "#ffffff",  # mantine background color
            "plot_bgcolor": "#ffffff",
            "gridcolor": "#dee2e6",
            "button_bg": colors["gray"][5],
            "button_active": colors["gray"][6],
            "button_text": "white"
        },
        "dark": {
            "colorway": [
                colors[color][8]
                for color in ["blue", "red", "green", "violet", "orange", "cyan", "pink", "yellow"]
            ],
            "paper_bgcolor":  colors["dark"][7], # mantine background color
            "plot_bgcolor":  colors["dark"][7],
            "gridcolor": "#343a40",
            "button_bg": colors["gray"][7],
            "button_active": colors["gray"][6],
            "button_text": "white"
        }
    }

    def make_template(name):
        #Start with either a light or dark Plotly template
        base = "plotly_white" if name == "light" else "plotly_dark"
        template = copy.deepcopy(pio.templates[base])

        layout = template.layout
        theme_config = default_themes[name]

        # Apply theme settings
        layout.colorway = theme_config["colorway"]
        layout.colorscale.sequential = custom_colorscale
        layout.piecolorway = theme_config["colorway"]
        layout.paper_bgcolor = theme_config["paper_bgcolor"]
        layout.plot_bgcolor = theme_config["plot_bgcolor"]
        layout.font.family = font_family

        # Grid settings
        for axis in (layout.xaxis, layout.yaxis):
            axis.gridcolor = theme_config["gridcolor"]
            axis.gridwidth = 0.5
            axis.zerolinecolor = theme_config["gridcolor"]

        # Range selector buttons settings
        layout.xaxis.rangeselector.font.color = theme_config["button_text"]
        layout.xaxis.rangeselector.activecolor = theme_config["button_active"]
        layout.xaxis.rangeselector.bgcolor = theme_config["button_bg"]

        # Geo settings
        layout.geo.bgcolor = theme_config["plot_bgcolor"]
        layout.geo.lakecolor = theme_config["plot_bgcolor"]
        layout.geo.landcolor = theme_config["plot_bgcolor"]

        # Hover label settings
        layout.hoverlabel.font.family = font_family

        # Scatter plot settings
        template.data.scatter = (go.Scatter(marker_line_color=theme_config["plot_bgcolor"]),)
        template.data.scattergl = (go.Scattergl(marker_line_color=theme_config["plot_bgcolor"]),)

        return template


    # #register templates
    pio.templates["mantine_light"] = make_template("light")
    pio.templates["mantine_dark"] = make_template("dark")

    # set the default
    if default in ["mantine_light", "mantine_dark"]:
        pio.templates.default = default
    elif default:
        raise ValueError(f"unrecognized {default=}, allowed values are 'mantine_light' and 'mantine_dark'")

    return None