# AUTO GENERATED FILE - DO NOT EDIT

navbar <- function(children=NULL, id=NULL, class_name=NULL, fixed=NULL, height=NULL, hidden=NULL, hiddenBreakpoint=NULL, padding=NULL, position=NULL, style=NULL, width=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, fixed=fixed, height=height, hidden=hidden, hiddenBreakpoint=hiddenBreakpoint, padding=padding, position=position, style=style, width=width, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Navbar',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'fixed', 'height', 'hidden', 'hiddenBreakpoint', 'padding', 'position', 'style', 'width', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
