from dash import *
import dash_mantine_components as dmc
from dash import _dash_renderer

_dash_renderer._set_react_version("18.2.0")

app = Dash(__name__, use_pages=True)

app.layout = dmc.MantineProvider(page_container)

app.run()