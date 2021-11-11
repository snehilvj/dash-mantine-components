# AUTO GENERATED FILE - DO NOT EDIT

rangeSlider <- function(id=NULL, className=NULL, color=NULL, labelAlwaysOn=NULL, marks=NULL, max=NULL, min=NULL, minRange=NULL, radius=NULL, size=NULL, step=NULL, style=NULL, value=NULL) {
    
    props <- list(id=id, className=className, color=color, labelAlwaysOn=labelAlwaysOn, marks=marks, max=max, min=min, minRange=minRange, radius=radius, size=size, step=step, style=style, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RangeSlider',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'color', 'labelAlwaysOn', 'marks', 'max', 'min', 'minRange', 'radius', 'size', 'step', 'style', 'value'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
