# AUTO GENERATED FILE - DO NOT EDIT

switch <- function(id=NULL, checked=NULL, class_name=NULL, color=NULL, disabled=NULL, label=NULL, offLabel=NULL, onLabel=NULL, radius=NULL, size=NULL, style=NULL) {
    
    props <- list(id=id, checked=checked, class_name=class_name, color=color, disabled=disabled, label=label, offLabel=offLabel, onLabel=onLabel, radius=radius, size=size, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Switch',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'checked', 'class_name', 'color', 'disabled', 'label', 'offLabel', 'onLabel', 'radius', 'size', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
