# AUTO GENERATED FILE - DO NOT EDIT

center <- function(children=NULL, id=NULL, className=NULL, inline=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, inline=inline, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Center',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'inline', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
