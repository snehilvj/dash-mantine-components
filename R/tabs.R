# AUTO GENERATED FILE - DO NOT EDIT

tabs <- function(children=NULL, id=NULL, active=NULL, class_name=NULL, color=NULL, grow=NULL, orientation=NULL, position=NULL, style=NULL, tabPadding=NULL, variant=NULL) {
    
    props <- list(children=children, id=id, active=active, class_name=class_name, color=color, grow=grow, orientation=orientation, position=position, style=style, tabPadding=tabPadding, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tabs',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'active', 'class_name', 'color', 'grow', 'orientation', 'position', 'style', 'tabPadding', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
