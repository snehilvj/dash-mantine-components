# AUTO GENERATED FILE - DO NOT EDIT

segmentedControl <- function(id=NULL, class_name=NULL, color=NULL, data=NULL, fullWidth=NULL, radius=NULL, size=NULL, style=NULL, value=NULL) {
    
    props <- list(id=id, class_name=class_name, color=color, data=data, fullWidth=fullWidth, radius=radius, size=size, style=style, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SegmentedControl',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'class_name', 'color', 'data', 'fullWidth', 'radius', 'size', 'style', 'value'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
