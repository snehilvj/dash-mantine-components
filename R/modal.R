# AUTO GENERATED FILE - DO NOT EDIT

modal <- function(children=NULL, id=NULL, className=NULL, hideCloseButton=NULL, opened=NULL, overflow=NULL, padding=NULL, size=NULL, style=NULL, title=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, className=className, hideCloseButton=hideCloseButton, opened=opened, overflow=overflow, padding=padding, size=size, style=style, title=title, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Modal',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'hideCloseButton', 'opened', 'overflow', 'padding', 'size', 'style', 'title', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
