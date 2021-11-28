# AUTO GENERATED FILE - DO NOT EDIT

notificationHandler <- function(id=NULL, task=NULL) {
    
    props <- list(id=id, task=task)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NotificationHandler',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'task'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
