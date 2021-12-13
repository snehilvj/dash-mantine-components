# AUTO GENERATED FILE - DO NOT EDIT

paper <- function(children=NULL, id=NULL, className=NULL, loading_state=NULL, padding=NULL, radius=NULL, shadow=NULL, withBorder=NULL) {
    
    props <- list(children=children, id=id, className=className, loading_state=loading_state, padding=padding, radius=radius, shadow=shadow, withBorder=withBorder)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Paper',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'loading_state', 'padding', 'radius', 'shadow', 'withBorder'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
