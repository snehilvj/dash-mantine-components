# AUTO GENERATED FILE - DO NOT EDIT

alert <- function(children=NULL, id=NULL, class_name=NULL, color=NULL, duration=NULL, hide=NULL, style=NULL, title=NULL, withCloseButton=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, color=color, duration=duration, hide=hide, style=style, title=title, withCloseButton=withCloseButton)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Alert',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'color', 'duration', 'hide', 'style', 'title', 'withCloseButton'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
