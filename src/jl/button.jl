# AUTO GENERATED FILE - DO NOT EDIT

export button

"""
    button(;kwargs...)
    button(children::Any;kwargs...)
    button(children_maker::Function;kwargs...)


A Button component.
Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Button color from theme
- `compact` (Bool; optional): Reduces vertical and horizontal spacing
- `disabled` (Bool; optional): The component can show it is currently unable to be interacted with
- `fullWidth` (Bool; optional): Sets button width to 100% of parent element
- `gradient` (optional): Controls gradient settings in gradient variant only
- `loaderPosition` (a value equal to: "left", "right"; optional): Loader position relative to button label
- `loading` (Bool; optional): Indicate loading state
- `n_clicks` (Real; optional): An integer that represents the number of times that this element has been clicked on
- `radius` (optional): Button border-radius from theme or number to set border-radius in px
- `size` (optional): Predefined button size
- `style` (Dict; optional): Inline style override
- `type` (a value equal to: "submit", "button", "reset"; optional): Button type attribute
- `uppercase` (Bool; optional): Set text-transform to uppercase
- `variant` (a value equal to: "link", "filled", "outline", "light", "gradient", "white", "default"; optional): Controls button appearance
"""
function button(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :compact, :disabled, :fullWidth, :gradient, :loaderPosition, :loading, :n_clicks, :radius, :size, :style, :type, :uppercase, :variant]
        wild_props = Symbol[]
        return Component("button", "Button", "dash_mantine_components", available_props, wild_props; kwargs...)
end

button(children::Any; kwargs...) = button(;kwargs..., children = children)
button(children_maker::Function; kwargs...) = button(children_maker(); kwargs...)

