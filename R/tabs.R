# AUTO GENERATED FILE - DO NOT EDIT

tabs <- function(children=NULL, id=NULL, active=NULL, className=NULL, color=NULL, grow=NULL, orientation=NULL, position=NULL, tabPadding=NULL, variant=NULL) {
    
    props <- list(children=children, id=id, active=active, className=className, color=color, grow=grow, orientation=orientation, position=position, tabPadding=tabPadding, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tabs',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'active', 'className', 'color', 'grow', 'orientation', 'position', 'tabPadding', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
