# AUTO GENERATED FILE - DO NOT EDIT

breadcrumbs <- function(id=NULL, items=NULL, separator=NULL) {
    
    props <- list(id=id, items=items, separator=separator)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Breadcrumbs',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'items', 'separator'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
