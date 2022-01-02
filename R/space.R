# AUTO GENERATED FILE - DO NOT EDIT

space <- function(children=NULL, id=NULL, class_name=NULL, h=NULL, style=NULL, w=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, h=h, style=style, w=w)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Space',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'h', 'style', 'w'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
