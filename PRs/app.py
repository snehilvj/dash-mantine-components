from dash import *
import dash_mantine_components as dmc
from dash import _dash_renderer

_dash_renderer._set_react_version("18.2.0")

app = Dash(__name__)

app.layout = dmc.MantineProvider([
    html.Div('Hi PyCafe'),
    dmc.MultiSelect(data=['Test1', 'Test2'])
    ])

app.run()