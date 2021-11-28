# AUTO GENERATED FILE - DO NOT EDIT

notificationsProvider <- function(children=NULL, id=NULL, autoClose=NULL, containerWidth=NULL, limit=NULL, notificationMaxHeight=NULL, position=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, autoClose=autoClose, containerWidth=containerWidth, limit=limit, notificationMaxHeight=notificationMaxHeight, position=position, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NotificationsProvider',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'autoClose', 'containerWidth', 'limit', 'notificationMaxHeight', 'position', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
