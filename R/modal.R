# AUTO GENERATED FILE - DO NOT EDIT

modal <- function(children=NULL, id=NULL, centered=NULL, class_name=NULL, closeOnClickOutside=NULL, hideCloseButton=NULL, opened=NULL, overflow=NULL, overlayColor=NULL, overlayOpacity=NULL, padding=NULL, radius=NULL, size=NULL, style=NULL, title=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, centered=centered, class_name=class_name, closeOnClickOutside=closeOnClickOutside, hideCloseButton=hideCloseButton, opened=opened, overflow=overflow, overlayColor=overlayColor, overlayOpacity=overlayOpacity, padding=padding, radius=radius, size=size, style=style, title=title, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Modal',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'centered', 'class_name', 'closeOnClickOutside', 'hideCloseButton', 'opened', 'overflow', 'overlayColor', 'overlayOpacity', 'padding', 'radius', 'size', 'style', 'title', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
