# AUTO GENERATED FILE - DO NOT EDIT

divider <- function(id=NULL, className=NULL, color=NULL, label=NULL, labelPosition=NULL, orientation=NULL, size=NULL, style=NULL, variant=NULL) {
    
    props <- list(id=id, className=className, color=color, label=label, labelPosition=labelPosition, orientation=orientation, size=size, style=style, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Divider',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'color', 'label', 'labelPosition', 'orientation', 'size', 'style', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
