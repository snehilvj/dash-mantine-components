# AUTO GENERATED FILE - DO NOT EDIT

affix <- function(children=NULL, id=NULL, className=NULL, position=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, position=position, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Affix',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'position', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
