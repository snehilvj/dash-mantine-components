# AUTO GENERATED FILE - DO NOT EDIT

tab <- function(children=NULL, id=NULL, className=NULL, disabled=NULL, label=NULL) {
    
    props <- list(children=children, id=id, className=className, disabled=disabled, label=label)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tab',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'disabled', 'label'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
