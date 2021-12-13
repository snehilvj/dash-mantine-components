# AUTO GENERATED FILE - DO NOT EDIT

title <- function(children=NULL, id=NULL, align=NULL, className=NULL, loading_state=NULL, order=NULL, style=NULL) {
    
    props <- list(children=children, id=id, align=align, className=className, loading_state=loading_state, order=order, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Title',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'align', 'className', 'loading_state', 'order', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
