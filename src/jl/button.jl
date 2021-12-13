# AUTO GENERATED FILE - DO NOT EDIT

export button

"""
    button(;kwargs...)
    button(children::Any;kwargs...)
    button(children_maker::Function;kwargs...)


A Button component.
Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional): Button color from theme
- `compact` (Bool; optional): Reduces vertical and horizontal spacing
- `disabled` (Bool; optional): The component can show it is currently unable to be interacted with
- `fullWidth` (Bool; optional): Sets button width to 100% of parent element
- `gradient` (optional): Controls gradient settings in gradient variant only. gradient has the following type: lists containing elements 'from', 'to', 'deg'.
Those elements have the following types:
  - `from` (String; required)
  - `to` (String; required)
  - `deg` (Real; optional)
- `loaderPosition` (a value equal to: "left", "right"; optional): Loader position relative to button label
- `loading` (Bool; optional): Indicate loading state
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `n_clicks` (Real; optional): An integer that represents the number of times that this element has been clicked on
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Button border-radius from theme or number to set border-radius in px
- `size` (a value equal to: "xs", "sm", "md", "lg", "xl"; optional): Predefined button size
- `style` (Dict; optional): Inline style override
- `uppercase` (Bool; optional): Set text-transform to uppercase
- `variant` (a value equal to: "link", "filled", "outline", "light", "gradient", "white", "default"; optional): Controls button appearance
"""
function button(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :compact, :disabled, :fullWidth, :gradient, :loaderPosition, :loading, :loading_state, :n_clicks, :radius, :size, :style, :uppercase, :variant]
        wild_props = Symbol[]
        return Component("button", "Button", "dash_mantine_components", available_props, wild_props; kwargs...)
end

button(children::Any; kwargs...) = button(;kwargs..., children = children)
button(children_maker::Function; kwargs...) = button(children_maker(); kwargs...)

