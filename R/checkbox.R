# AUTO GENERATED FILE - DO NOT EDIT

checkbox <- function(id=NULL, checked=NULL, class_name=NULL, color=NULL, disabled=NULL, label=NULL, size=NULL, style=NULL, transitionDuration=NULL) {
    
    props <- list(id=id, checked=checked, class_name=class_name, color=color, disabled=disabled, label=label, size=size, style=style, transitionDuration=transitionDuration)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Checkbox',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'checked', 'class_name', 'color', 'disabled', 'label', 'size', 'style', 'transitionDuration'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
