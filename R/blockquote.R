# AUTO GENERATED FILE - DO NOT EDIT

blockquote <- function(children=NULL, id=NULL, cite=NULL, className=NULL, color=NULL, loading_state=NULL, style=NULL) {
    
    props <- list(children=children, id=id, cite=cite, className=className, color=color, loading_state=loading_state, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Blockquote',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'cite', 'className', 'color', 'loading_state', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
