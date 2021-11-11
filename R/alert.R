# AUTO GENERATED FILE - DO NOT EDIT

alert <- function(children=NULL, id=NULL, className=NULL, color=NULL, style=NULL, title=NULL) {
    
    props <- list(children=children, id=id, className=className, color=color, style=style, title=title)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Alert',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'color', 'style', 'title'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
