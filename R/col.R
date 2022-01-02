# AUTO GENERATED FILE - DO NOT EDIT

col <- function(children=NULL, id=NULL, class_name=NULL, lg=NULL, md=NULL, offset=NULL, sm=NULL, span=NULL, style=NULL, xl=NULL, xs=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, lg=lg, md=md, offset=offset, sm=sm, span=span, style=style, xl=xl, xs=xs)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Col',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'lg', 'md', 'offset', 'sm', 'span', 'style', 'xl', 'xs'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
