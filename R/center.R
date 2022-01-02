# AUTO GENERATED FILE - DO NOT EDIT

center <- function(children=NULL, id=NULL, class_name=NULL, inline=NULL, style=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, inline=inline, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Center',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'inline', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
