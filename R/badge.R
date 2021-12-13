# AUTO GENERATED FILE - DO NOT EDIT

badge <- function(children=NULL, id=NULL, className=NULL, color=NULL, fullWidth=NULL, gradient=NULL, loading_state=NULL, radius=NULL, size=NULL, style=NULL, variant=NULL) {
    
    props <- list(children=children, id=id, className=className, color=color, fullWidth=fullWidth, gradient=gradient, loading_state=loading_state, radius=radius, size=size, style=style, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Badge',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'color', 'fullWidth', 'gradient', 'loading_state', 'radius', 'size', 'style', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
