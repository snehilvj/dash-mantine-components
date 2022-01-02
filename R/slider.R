# AUTO GENERATED FILE - DO NOT EDIT

slider <- function(id=NULL, class_name=NULL, color=NULL, drag_value=NULL, labelAlwaysOn=NULL, marks=NULL, max=NULL, min=NULL, radius=NULL, showLabelOnHover=NULL, size=NULL, step=NULL, style=NULL, value=NULL) {
    
    props <- list(id=id, class_name=class_name, color=color, drag_value=drag_value, labelAlwaysOn=labelAlwaysOn, marks=marks, max=max, min=min, radius=radius, showLabelOnHover=showLabelOnHover, size=size, step=step, style=style, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Slider',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'class_name', 'color', 'drag_value', 'labelAlwaysOn', 'marks', 'max', 'min', 'radius', 'showLabelOnHover', 'size', 'step', 'style', 'value'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
