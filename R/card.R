# AUTO GENERATED FILE - DO NOT EDIT

card <- function(children=NULL, id=NULL, className=NULL, padding=NULL, radius=NULL, shadow=NULL, withBorder=NULL) {
    
    props <- list(children=children, id=id, className=className, padding=padding, radius=radius, shadow=shadow, withBorder=withBorder)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Card',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'padding', 'radius', 'shadow', 'withBorder'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
