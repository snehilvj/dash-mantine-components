# AUTO GENERATED FILE - DO NOT EDIT

blockquote <- function(children=NULL, id=NULL, cite=NULL, class_name=NULL, color=NULL, style=NULL) {
    
    props <- list(children=children, id=id, cite=cite, class_name=class_name, color=color, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Blockquote',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'cite', 'class_name', 'color', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
