# AUTO GENERATED FILE - DO NOT EDIT

header <- function(children=NULL, id=NULL, class_name=NULL, fixed=NULL, height=NULL, padding=NULL, position=NULL, style=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, fixed=fixed, height=height, padding=padding, position=position, style=style, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Header',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'fixed', 'height', 'padding', 'position', 'style', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
