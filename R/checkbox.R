# AUTO GENERATED FILE - DO NOT EDIT

checkbox <- function(id=NULL, checked=NULL, className=NULL, color=NULL, disabled=NULL, label=NULL, size=NULL, style=NULL) {
    
    props <- list(id=id, checked=checked, className=className, color=color, disabled=disabled, label=label, size=size, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Checkbox',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'checked', 'className', 'color', 'disabled', 'label', 'size', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
