# AUTO GENERATED FILE - DO NOT EDIT

space <- function(children=NULL, id=NULL, className=NULL, h=NULL, w=NULL) {
    
    props <- list(children=children, id=id, className=className, h=h, w=w)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Space',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'h', 'w'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
