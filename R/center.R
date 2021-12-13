# AUTO GENERATED FILE - DO NOT EDIT

center <- function(children=NULL, id=NULL, className=NULL, inline=NULL, loading_state=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, inline=inline, loading_state=loading_state, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Center',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'inline', 'loading_state', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
