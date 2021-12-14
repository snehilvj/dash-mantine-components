# AUTO GENERATED FILE - DO NOT EDIT

export image

"""
    image(;kwargs...)

An Image component.
Image with optional placeholder for loading and error state. For more information, see: https://mantine.dev/core/image/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `alt` (String; optional): Image alt text, used as title for placeholder if image was not loaded
- `caption` (String; optional): Image figcaption, displayed bellow image
- `className` (String; optional): Often used with CSS to style elements with common properties
- `fit` (a value equal to: "cover", "contain"; optional): Image object-fit property
- `height` (String | Real; optional): Image height, defaults to original image height adjusted to given width
- `radius` (a value equal to: "xs", "sm", "md", "lg", "xl" | Real; optional): Predefined border-radius value from theme.radius or number for border-radius in px
- `src` (String; optional): Image src
- `style` (Dict; optional): Inline style override
- `width` (String | Real; optional): Image width, defaults to 100%, cannot exceed 100%
- `withPlaceholder` (Bool; optional): Enable placeholder when image is loading and when image fails to load
"""
function image(; kwargs...)
        available_props = Symbol[:id, :alt, :caption, :className, :fit, :height, :radius, :src, :style, :width, :withPlaceholder]
        wild_props = Symbol[]
        return Component("image", "Image", "dash_mantine_components", available_props, wild_props; kwargs...)
end

