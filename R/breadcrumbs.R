# AUTO GENERATED FILE - DO NOT EDIT

breadcrumbs <- function(id=NULL, items=NULL, separator=NULL, style=NULL) {
    
    props <- list(id=id, items=items, separator=separator, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Breadcrumbs',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'items', 'separator', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
