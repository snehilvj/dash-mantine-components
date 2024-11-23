import dash_mantine_components as dmc
import plotly.graph_objects as go
import plotly.io as pio
import copy


def create_mantine_figure_templates():
    """
    Create Mantine-styled Plotly templates for both light and dark modes.
    registers templates with plotly.io.templates as "mantine_light" and "mantine_dark"
    """

    colors = dmc.DEFAULT_THEME["colors"]
    font_family = dmc.DEFAULT_THEME["fontFamily"]
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
            "paper_bgcolor": "#f8f9fa",
            "plot_bgcolor": "#ffffff",
            "gridcolor": "#dee2e6",
        },
        "dark": {
            "colorway": [
                colors[color][8]
                for color in ["blue", "red", "green", "violet", "orange", "cyan", "pink", "yellow"]
            ],
            "paper_bgcolor": "#1a1b1e",
            "plot_bgcolor": "#25262b",
            "gridcolor": "#343a40",
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

    return None


# Create and register templates
create_mantine_figure_templates()