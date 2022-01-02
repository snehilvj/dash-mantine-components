# AUTO GENERATED FILE - DO NOT EDIT

drawer <- function(children=NULL, id=NULL, class_name=NULL, hideCloseButton=NULL, noCloseOnClickOutside=NULL, noCloseOnEscape=NULL, noFocusTrap=NULL, noOverlay=NULL, noScrollLock=NULL, opened=NULL, overlayColor=NULL, overlayOpacity=NULL, padding=NULL, position=NULL, size=NULL, title=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, hideCloseButton=hideCloseButton, noCloseOnClickOutside=noCloseOnClickOutside, noCloseOnEscape=noCloseOnEscape, noFocusTrap=noFocusTrap, noOverlay=noOverlay, noScrollLock=noScrollLock, opened=opened, overlayColor=overlayColor, overlayOpacity=overlayOpacity, padding=padding, position=position, size=size, title=title, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Drawer',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'hideCloseButton', 'noCloseOnClickOutside', 'noCloseOnEscape', 'noFocusTrap', 'noOverlay', 'noScrollLock', 'opened', 'overlayColor', 'overlayOpacity', 'padding', 'position', 'size', 'title', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
