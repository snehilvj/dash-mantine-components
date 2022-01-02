# AUTO GENERATED FILE - DO NOT EDIT

breadcrumbs <- function(id=NULL, class_name=NULL, items=NULL, separator=NULL, style=NULL) {
    
    props <- list(id=id, class_name=class_name, items=items, separator=separator, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Breadcrumbs',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'class_name', 'items', 'separator', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
