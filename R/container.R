# AUTO GENERATED FILE - DO NOT EDIT

container <- function(children=NULL, id=NULL, className=NULL, fluid=NULL, loading_state=NULL, padding=NULL, size=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, fluid=fluid, loading_state=loading_state, padding=padding, size=size, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Container',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'fluid', 'loading_state', 'padding', 'size', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
