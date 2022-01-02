# AUTO GENERATED FILE - DO NOT EDIT

badge <- function(children=NULL, id=NULL, class_name=NULL, color=NULL, fullWidth=NULL, gradient=NULL, radius=NULL, size=NULL, style=NULL, variant=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, color=color, fullWidth=fullWidth, gradient=gradient, radius=radius, size=size, style=style, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Badge',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'color', 'fullWidth', 'gradient', 'radius', 'size', 'style', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
