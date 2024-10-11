from dash import *
import dash_mantine_components as dmc

layout = [
    html.Div('Hi PyCafe'),
    dmc.MultiSelect(data=['Test1', 'Test2'])
    ]

register_page(__name__, path='/')