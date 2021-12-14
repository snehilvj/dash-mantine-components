# AUTO GENERATED FILE - DO NOT EDIT

simpleGrid <- function(children=NULL, id=NULL, breakpoints=NULL, className=NULL, cols=NULL, spacing=NULL, style=NULL) {
    
    props <- list(children=children, id=id, breakpoints=breakpoints, className=className, cols=cols, spacing=spacing, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SimpleGrid',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'breakpoints', 'className', 'cols', 'spacing', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
