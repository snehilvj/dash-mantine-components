# AUTO GENERATED FILE - DO NOT EDIT

paper <- function(children=NULL, id=NULL, class_name=NULL, padding=NULL, radius=NULL, shadow=NULL, style=NULL, withBorder=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, padding=padding, radius=radius, shadow=shadow, style=style, withBorder=withBorder)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Paper',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'padding', 'radius', 'shadow', 'style', 'withBorder'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
