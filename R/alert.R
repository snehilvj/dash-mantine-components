# AUTO GENERATED FILE - DO NOT EDIT

alert <- function(children=NULL, id=NULL, className=NULL, color=NULL, duration=NULL, loading_state=NULL, show=NULL, style=NULL, title=NULL, withCloseButton=NULL) {
    
    props <- list(children=children, id=id, className=className, color=color, duration=duration, loading_state=loading_state, show=show, style=style, title=title, withCloseButton=withCloseButton)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Alert',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'color', 'duration', 'loading_state', 'show', 'style', 'title', 'withCloseButton'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
