# AUTO GENERATED FILE - DO NOT EDIT

scrollArea <- function(children=NULL, id=NULL, className=NULL, dir=NULL, offsetScrollbars=NULL, scrollHideDelay=NULL, scrollbarSize=NULL, style=NULL, type=NULL) {
    
    props <- list(children=children, id=id, className=className, dir=dir, offsetScrollbars=offsetScrollbars, scrollHideDelay=scrollHideDelay, scrollbarSize=scrollbarSize, style=style, type=type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ScrollArea',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'dir', 'offsetScrollbars', 'scrollHideDelay', 'scrollbarSize', 'style', 'type'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
