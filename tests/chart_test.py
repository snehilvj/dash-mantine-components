from dash import callback, dcc, Input, Output, html, MATCH

import dash_mantine_components as dmc




from dash import Dash, _dash_renderer
_dash_renderer._set_react_version("18.2.0")

data = [
    {"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200},
    {"month": "February", "Smartphones": 1900, "Laptops": 1200, "Tablets": 400},
    {"month": "March", "Smartphones": 400, "Laptops": 1000, "Tablets": 200},
    {"month": "April", "Smartphones": 1000, "Laptops": 200, "Tablets": 800},
    {"month": "May", "Smartphones": 800, "Laptops": 1400, "Tablets": 1200},
    {"month": "June", "Smartphones": 750, "Laptops": 600, "Tablets": 1000}
]

bubble_data = [
  { "hour": '08:00', "index": 1, "value": 150 },
  { "hour": '10:00', "index": 1, "value": 166 },
  { "hour": '12:00', "index": 1, "value": 170 },
  { "hour": '14:00', "index": 1, "value": 150 },
  { "hour": '16:00', "index": 1, "value": 200 },
  { "hour": '18:00', "index": 1, "value": 400 },
  { "hour": '20:00', "index": 1, "value": 100 },
  { "hour": '22:00', "index": 1, "value": 160 },
]

bubbleChart = dmc.BubbleChart(
    h=60,
    id={"type": "chart", "index": "bubble"},
    data=bubble_data,
    range=[16, 225],
    label="Sales/hour",
    color="lime.6",
    dataKey={ "x": 'hour', "y": 'index', "z": 'value' }
)

barChart = dmc.BarChart(
    id={"type": "chart", "index": "bar"},
    h=300,
    dataKey="month",
    data=data,
    withLegend=True,
    highlightHover=True,   
    #type="stacked",
    series=[
        {"name": "Smartphones", "color": "violet.6", "inactiveColor": "violet.1"},
        {"name": "Laptops", "color": "blue.6", "inactiveColor": "blue.1"},
        {"name": "Tablets", "color": "teal.6", "inactiveColor": "teal.1"},
    ],
)



areaChart = dmc.AreaChart(
    id={"type": "chart", "index": "area"},
    h=300,
    dataKey="month",
    data=data,
    series=[
        {"name": "Smartphones", "color": "violet.6", "inactiveColor": "violet.1"},
        {"name": "Laptops", "color": "blue.6", "inactiveColor": "blue.1"},
        {"name": "Tablets", "color": "teal.6", "inactiveColor": "teal.1"},
    ],
    curveType="linear",
    tickLine="xy",
    withGradient=False,
    withXAxis=False,
    withDots=False,
    withLegend=True,
)

lineChart = dmc.LineChart(
    id={"type": "chart", "index": "line"},
    h=300,
    dataKey="month",
    data=data,
    withLegend=True,
    series=[
        {"name": "Smartphones", "color": "violet.6", "inactiveColor": "violet.1"},
        {"name": "Laptops", "color": "blue.6", "inactiveColor": "blue.1"},
        {"name": "Tablets", "color": "teal.6", "inactiveColor": "teal.1"},
    ],
)

scatter_data = data2 = [
    {
        "color": "blue.5",
        "name": "Group 1",
        "data": [
            {"age": 25, "BMI": 20},
            {"age": 30, "BMI": 22},
            {"age": 35, "BMI": 18},
            {"age": 40, "BMI": 25},
            {"age": 45, "BMI": 30},
            {"age": 28, "BMI": 15},
            {"age": 22, "BMI": 12},
            {"age": 50, "BMI": 28},
            {"age": 32, "BMI": 19},
            {"age": 48, "BMI": 31},
            {"age": 26, "BMI": 24},
            {"age": 38, "BMI": 27},
            {"age": 42, "BMI": 29},
            {"age": 29, "BMI": 16},
            {"age": 34, "BMI": 23},
            {"age": 44, "BMI": 33},
            {"age": 23, "BMI": 14},
            {"age": 37, "BMI": 26},
            {"age": 49, "BMI": 34},
            {"age": 27, "BMI": 17},
            {"age": 41, "BMI": 32},
            {"age": 31, "BMI": 21},
            {"age": 46, "BMI": 35},
            {"age": 24, "BMI": 13},
            {"age": 33, "BMI": 22},
            {"age": 39, "BMI": 28},
            {"age": 47, "BMI": 30},
            {"age": 36, "BMI": 25},
            {"age": 43, "BMI": 29},
            {"age": 21, "BMI": 11}
        ]
    },
    {
        "color": "red.5",
        "name": "Group 2",
        "data": [
            {"age": 26, "BMI": 21},
            {"age": 31, "BMI": 24},
            {"age": 37, "BMI": 19},
            {"age": 42, "BMI": 27},
            {"age": 29, "BMI": 32},
            {"age": 35, "BMI": 18},
            {"age": 40, "BMI": 23},
            {"age": 45, "BMI": 30},
            {"age": 27, "BMI": 15},
            {"age": 33, "BMI": 20},
            {"age": 38, "BMI": 25},
            {"age": 43, "BMI": 29},
            {"age": 30, "BMI": 16},
            {"age": 36, "BMI": 22},
            {"age": 41, "BMI": 28},
            {"age": 46, "BMI": 33},
            {"age": 28, "BMI": 17},
            {"age": 34, "BMI": 22},
            {"age": 39, "BMI": 26},
            {"age": 44, "BMI": 31},
            {"age": 32, "BMI": 18},
            {"age": 38, "BMI": 23},
            {"age": 43, "BMI": 28},
            {"age": 48, "BMI": 35},
            {"age": 25, "BMI": 14},
            {"age": 31, "BMI": 20},
            {"age": 36, "BMI": 25},
            {"age": 41, "BMI": 30},
            {"age": 29, "BMI": 16}
        ]
    }
]

scatterChart = dmc.ScatterChart(
    h=300,
    id={"type": "chart", "index": "scatter"},
    data=scatter_data,
    dataKey={"x": "age", "y": "BMI"},
    xAxisLabel="Age",
    yAxisLabel="BMI",
)

data_donut = [
  { "name": "USA", "value": 400, "color": "indigo.6", "inactiveColor": "indigo.1" },
  { "name": "India", "value": 300, "color": "yellow.6", "inactiveColor": "yellow.1" },
  { "name": "Japan", "value": 100, "color": "teal.6", "inactiveColor": "teal.1" },
  { "name": "Other", "value": 200, "color": "gray.6", "inactiveColor": "gray.1" }
]

donutChart = dmc.DonutChart(id={"type": "chart", "index": "donut"}, data=data_donut, withTooltip=False, highlightHover=False),
pieChart = dmc.PieChart(id={"type": "chart", "index": "pie"}, data=data_donut)
    
compositeChart =  dmc.CompositeChart(               
    id={"type": "chart", "index": "composite"},
    h=300,
    dataKey="month",
    data=data,                    
    series=[
        {"name": "Smartphones", "color": "violet.6", "type": "bar"},
        {"name": "Laptops", "color": "blue.6", "type": "line"},
        {"name": "Tablets", "color": "teal.6", "type": "area"},
    ],
),


def create_chart(chart_type):

    if chart_type == "bar":
        chart = barChart
    elif chart_type == "donut":
        chart = donutChart
    elif chart_type == "pie":
        chart = pieChart
    elif chart_type == "line":
        chart = lineChart
    elif chart_type == "bubble":
        chart = bubbleChart
    elif chart_type == "scatter":
        chart = scatterChart
    elif chart_type == "composite":
        chart = compositeChart
    else:
        chart = areaChart
    return (
        dmc.Grid(
            [
                dmc.GridCol(
                    span=12,
                    children=chart
                ),
                dmc.GridCol(
                    span=2,
                    children=dmc.Text("clickData")
                ),
                dmc.GridCol(
                    span=10,
                    children=dmc.Text(id={"type": "output_clickData", "index": chart_type})
                ),
                dmc.GridCol(
                    span=2,
                    children=dmc.Text("hoverData")
                ),
                dmc.GridCol(
                    span=10,
                    children=dmc.Text(id={"type": "output_hoverData", "index": chart_type})
                ),
                dmc.GridCol(
                    span=2,
                    children=dmc.Text("clickSeriesName")
                ),
                dmc.GridCol(
                    span=10,
                    children=dmc.Text(id={"type": "output_clickSeriesName", "index": chart_type})
                ),
                dmc.GridCol(
                    span=2,
                    children=dmc.Text("hoverSeriesName")
                ),
                dmc.GridCol(
                    span=10,
                    children=dmc.Text(id={"type": "output_hoverSeriesName", "index": chart_type})
                ),               
            ]
        )
    )
app = Dash(external_stylesheets=dmc.styles.ALL)

app.layout = dmc.MantineProvider(     
     children=[
        dmc.Tabs(
            [
                dmc.TabsList(
                    [
                        dmc.TabsTab("Area", value="tab_area"),                        
                        dmc.TabsTab("Bar", value="tab_bar"),   
                        dmc.TabsTab("Bubble", value="tab_bubble"),
                        dmc.TabsTab("Composite", value="tab_composite"),                     
                        dmc.TabsTab("Donut", value="tab_donut"),     
                        dmc.TabsTab("Line", value="tab_line"),     
                        dmc.TabsTab("Pie", value="tab_pie"),                                 
                        dmc.TabsTab("Scatter", value="tab_scatter"),                             
                    ]
                ),
                dmc.TabsPanel(create_chart("area"), value="tab_area"),
                dmc.TabsPanel(create_chart("bar"), value="tab_bar"),
                dmc.TabsPanel(create_chart("bubble"), value="tab_bubble"),
                dmc.TabsPanel(create_chart("composite"), value="tab_composite"),
                dmc.TabsPanel(create_chart("donut"), value="tab_donut"),
                dmc.TabsPanel(create_chart("line"), value="tab_line"),
                dmc.TabsPanel(create_chart("pie"), value="tab_pie"),
                dmc.TabsPanel(create_chart("scatter"), value="tab_scatter"),                
            ],
            color="red",
            orientation="vertical",
        )
         
     ],
 )
 
@callback(
    Output({"type": "output_hoverSeriesName", "index": MATCH}, "children"),
    Input({"type": "chart", "index": MATCH}, "hoverSeriesName"),
)
def update_hoverSeriesName(data): 
    return str(data)       

@callback(
    Output({"type": "output_hoverData", "index": MATCH}, "children"),
    Input({"type": "chart", "index": MATCH}, "hoverData"),
)
def update_hoverData(data): 
    return str(data)  

@callback(
    Output({"type": "output_clickSeriesName", "index": MATCH}, "children"),
    Input({"type": "chart", "index": MATCH}, "clickSeriesName"),
)
def update_clickSeriesName(data): 
    return str(data)  

@callback(
    Output({"type": "output_clickData", "index": MATCH}, "children"),
    Input({"type": "chart", "index": MATCH}, "clickData"),
)
def update_clickData(data): 
    return str(data)  
    

if __name__ == "__main__":
    app.run(debug=True)
