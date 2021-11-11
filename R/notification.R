# AUTO GENERATED FILE - DO NOT EDIT

notification <- function(children=NULL, id=NULL, className=NULL, color=NULL, loading=NULL, title=NULL) {
    
    props <- list(children=children, id=id, className=className, color=color, loading=loading, title=title)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Notification',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'color', 'loading', 'title'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
