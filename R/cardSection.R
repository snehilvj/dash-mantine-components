# AUTO GENERATED FILE - DO NOT EDIT

cardSection <- function(children=NULL, id=NULL, className=NULL) {
    
    props <- list(children=children, id=id, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CardSection',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
