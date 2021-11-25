# AUTO GENERATED FILE - DO NOT EDIT

group <- function(children=NULL, id=NULL, align=NULL, className=NULL, direction=NULL, grow=NULL, noWrap=NULL, position=NULL, spacing=NULL, style=NULL, withGutter=NULL) {
    
    props <- list(children=children, id=id, align=align, className=className, direction=direction, grow=grow, noWrap=noWrap, position=position, spacing=spacing, style=style, withGutter=withGutter)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Group',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'align', 'className', 'direction', 'grow', 'noWrap', 'position', 'spacing', 'style', 'withGutter'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
