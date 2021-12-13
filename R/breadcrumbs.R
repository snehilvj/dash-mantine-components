# AUTO GENERATED FILE - DO NOT EDIT

breadcrumbs <- function(id=NULL, items=NULL, loading_state=NULL, separator=NULL) {
    
    props <- list(id=id, items=items, loading_state=loading_state, separator=separator)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Breadcrumbs',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'items', 'loading_state', 'separator'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
