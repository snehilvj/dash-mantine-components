from dash import Dash, Input, Output, State, html

import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Skeleton(height=50, circle=True),
        dmc.Space(h=20),
        dmc.Skeleton(
            id="overlay",
            children=[
                html.Div(
                    children=[
                        dmc.Text(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio? Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque."
                        )
                    ],
                ),
            ],
            visible=True,
        ),
        dmc.Space(h=20),
        dmc.Button("Toggle Overlay", id="button"),
    ]
)


@app.callback(
    Output("overlay", "visible"),
    Input("button", "n_clicks"),
    State("overlay", "visible"),
    prevent_initial_call=True,
)
def hide_skeleton(n_clicks, visible):
    return not visible


if __name__ == "__main__":
    app.run_server(debug=True)
