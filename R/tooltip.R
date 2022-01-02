# AUTO GENERATED FILE - DO NOT EDIT

tooltip <- function(children=NULL, id=NULL, arrowSize=NULL, class_name=NULL, color=NULL, delay=NULL, disabled=NULL, gutter=NULL, label=NULL, placement=NULL, position=NULL, style=NULL, width=NULL, withArrow=NULL, withinPortal=NULL, wrapLines=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, arrowSize=arrowSize, class_name=class_name, color=color, delay=delay, disabled=disabled, gutter=gutter, label=label, placement=placement, position=position, style=style, width=width, withArrow=withArrow, withinPortal=withinPortal, wrapLines=wrapLines, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tooltip',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'arrowSize', 'class_name', 'color', 'delay', 'disabled', 'gutter', 'label', 'placement', 'position', 'style', 'width', 'withArrow', 'withinPortal', 'wrapLines', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
