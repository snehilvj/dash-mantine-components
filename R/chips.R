# AUTO GENERATED FILE - DO NOT EDIT

chips <- function(id=NULL, align=NULL, className=NULL, color=NULL, direction=NULL, grow=NULL, noWrap=NULL, options=NULL, position=NULL, radius=NULL, size=NULL, spacing=NULL, style=NULL, value=NULL, variant=NULL) {
    
    props <- list(id=id, align=align, className=className, color=color, direction=direction, grow=grow, noWrap=noWrap, options=options, position=position, radius=radius, size=size, spacing=spacing, style=style, value=value, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Chips',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'align', 'className', 'color', 'direction', 'grow', 'noWrap', 'options', 'position', 'radius', 'size', 'spacing', 'style', 'value', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
