# AUTO GENERATED FILE - DO NOT EDIT

simpleGrid <- function(children=NULL, id=NULL, breakpoints=NULL, class_name=NULL, cols=NULL, spacing=NULL, style=NULL) {
    
    props <- list(children=children, id=id, breakpoints=breakpoints, class_name=class_name, cols=cols, spacing=spacing, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SimpleGrid',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'breakpoints', 'class_name', 'cols', 'spacing', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
