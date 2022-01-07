# AUTO GENERATED FILE - DO NOT EDIT

colorPicker <- function(id=NULL, alphaLabel=NULL, class_name=NULL, focusable=NULL, format=NULL, fullWidth=NULL, hueLabel=NULL, saturationLabel=NULL, size=NULL, style=NULL, swatches=NULL, swatchesPerRow=NULL, value=NULL, withPicker=NULL) {
    
    props <- list(id=id, alphaLabel=alphaLabel, class_name=class_name, focusable=focusable, format=format, fullWidth=fullWidth, hueLabel=hueLabel, saturationLabel=saturationLabel, size=size, style=style, swatches=swatches, swatchesPerRow=swatchesPerRow, value=value, withPicker=withPicker)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ColorPicker',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'alphaLabel', 'class_name', 'focusable', 'format', 'fullWidth', 'hueLabel', 'saturationLabel', 'size', 'style', 'swatches', 'swatchesPerRow', 'value', 'withPicker'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
