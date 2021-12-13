# AUTO GENERATED FILE - DO NOT EDIT

tooltip <- function(children=NULL, id=NULL, arrowSize=NULL, className=NULL, color=NULL, delay=NULL, disabled=NULL, gutter=NULL, label=NULL, loading_state=NULL, placement=NULL, position=NULL, style=NULL, width=NULL, withArrow=NULL, wrapLines=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, arrowSize=arrowSize, className=className, color=color, delay=delay, disabled=disabled, gutter=gutter, label=label, loading_state=loading_state, placement=placement, position=position, style=style, width=width, withArrow=withArrow, wrapLines=wrapLines, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tooltip',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'arrowSize', 'className', 'color', 'delay', 'disabled', 'gutter', 'label', 'loading_state', 'placement', 'position', 'style', 'width', 'withArrow', 'wrapLines', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
