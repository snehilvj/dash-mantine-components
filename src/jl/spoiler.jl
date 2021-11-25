# AUTO GENERATED FILE - DO NOT EDIT

export spoiler

"""
    spoiler(;kwargs...)
    spoiler(children::Any;kwargs...)
    spoiler(children_maker::Function;kwargs...)


A Spoiler component.
Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/
Keyword arguments:
- `children` (String; optional): Primary content
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `hideLabel` (String; optional): Label for close spoiler action
- `initialState` (Bool; optional): Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount
- `maxHeight` (Real; optional): Max height of visible content, when this point is reached spoiler appears
- `showLabel` (String; optional): Label for open spoiler action
"""
function spoiler(; kwargs...)
        available_props = Symbol[:children, :id, :hideLabel, :initialState, :maxHeight, :showLabel]
        wild_props = Symbol[]
        return Component("spoiler", "Spoiler", "dash_mantine_components", available_props, wild_props; kwargs...)
end

spoiler(children::Any; kwargs...) = spoiler(;kwargs..., children = children)
spoiler(children_maker::Function; kwargs...) = spoiler(children_maker(); kwargs...)

