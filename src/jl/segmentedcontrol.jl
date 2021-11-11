# AUTO GENERATED FILE - DO NOT EDIT

export segmentedcontrol

"""
    segmentedcontrol(;kwargs...)

A SegmentedControl component.
Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `className` (String; optional): Often used with CSS to style elements with common properties
- `color` (optional): Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark
- `data` (optional): Data based on which controls are rendered
- `fullWidth` (Bool; optional): True if component should have 100% width
- `radius` (optional): Border-radius from theme or number to set border-radius in px
- `size` (optional): Controls font-size, paddings and height
- `style` (Dict; optional): Inline style override
- `value` (String; optional): Current selected value
"""
function segmentedcontrol(; kwargs...)
        available_props = Symbol[:id, :className, :color, :data, :fullWidth, :radius, :size, :style, :value]
        wild_props = Symbol[]
        return Component("segmentedcontrol", "SegmentedControl", "dash_mantine_components", available_props, wild_props; kwargs...)
end

