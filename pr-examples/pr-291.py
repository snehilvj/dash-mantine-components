import dash_mantine_components as dmc
import dash
from dash import dcc, Input, Output, callback


dash._dash_renderer._set_react_version("18.2.0")
app = dash.Dash(__name__, prevent_initial_callbacks=True)

all_types = {L: [f"{L}{i}" for i in range(5)] for L in ["A", "B", "C", "D"]}

all_types_label_value = {
    L: [{"label": f"Label {L}{i}", "value": f"{L}{i}"} for i in range(5)]
    for L in ["A", "B", "C", "D"]
}


all_types_list = [f"{L}{i}" for L in ["A", "B", "C", "D"] for i in range(5)]


app.layout = dmc.MantineProvider(
    dmc.Container(
        [
            dcc.Markdown(
                """
    In Issue #291 the values were not updated correctly when data is updated in a callback.
    
    This PR verifies that #291 is fixed for all valid formats of the `data` prop
      
    The `data` in dropdowns can be either:  
    
    1.  an array of strings - use when label and value are same.
    2.  an array of dicts with label and value properties.
    3.  an array of dict with group and items as keys where items are one of the previous two types.
    
    """
            ),
            dmc.Text("STEP 1", my=10),
            dmc.MultiSelect(
                w="47%",
                searchable=True,
                hidePickedOptions=True,
                clearable=True,
                label="Select Category",
                id="n_search_in_category",
                data=["A", "B", "C", "D"],
                value=[],
            ),
            dmc.Text("STEP 2 Verify that all the dropdowns below update the values correctly regardless of the format of the `data`.", my=20),
            dmc.MultiSelect(
                w="47%",
                searchable=True,
                hidePickedOptions=True,
                clearable=True,
                label="1. Data is array of strings",
                id="n_search_in_types",
                value=[],
                mb=60,
            ),
            dmc.MultiSelect(
                w="47%",
                searchable=True,
                hidePickedOptions=True,
                clearable=True,
                label="2. Data is dict with labels and values",
                id="n_search_in_types_dict",
                value=[],
                mb=60,
            ),
            dmc.MultiSelect(
                w="47%",
                searchable=True,
                hidePickedOptions=True,
                clearable=True,
                label="3a. Data is dict with group and items keys, where items is array of strings",
                id="n_search_in_types_groups",
                value=[],
                mb=60,
            ),
            dmc.MultiSelect(
                w="47%",
                searchable=True,
                hidePickedOptions=True,
                clearable=True,
                label="3b. Data is dict with group and items keys, where items is a dict with labels and values",
                id="n_search_in_types_groups_3b",
                value=[],
                mb=60,
            ),
        ], mb=200
    )
)


# 1. Data is array of strings
@callback(
    Output("n_search_in_types", "data"),
    Input("n_search_in_category", "value"),
)
def add_types_in_search(category_id):
    return [i for i in all_types_list if i[0] in category_id]


# 2. Data is dict with labels and values
@callback(
    Output("n_search_in_types_dict", "data"),
    Input("n_search_in_category", "value"),
)
def add_types_in_search(category_id):
    return [item for L in category_id for item in all_types_label_value[L]]


# 3a. Data is dict with group and items keys, where items are an array
@callback(
    Output("n_search_in_types_groups", "data"), Input("n_search_in_category", "value")
)
def add_types_in_search(category_id):
    return [{"group": L, "items": all_types[L]} for L in category_id]


# 3b. Data is dict with group and items keys, where items is a dict with label and value
@callback(
    Output("n_search_in_types_groups_3b", "data"),
    Input("n_search_in_category", "value"),
)
def add_types_in_search(category_id):
    return [{"group": L, "items": all_types_label_value[L]} for L in category_id]


if __name__ == "__main__":
    app.run(debug=True)
