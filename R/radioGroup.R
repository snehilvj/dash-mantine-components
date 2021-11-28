# AUTO GENERATED FILE - DO NOT EDIT

radioGroup <- function(id=NULL, className=NULL, color=NULL, data=NULL, description=NULL, error=NULL, label=NULL, required=NULL, size=NULL, spacing=NULL, style=NULL, value=NULL, variant=NULL) {
    
    props <- list(id=id, className=className, color=color, data=data, description=description, error=error, label=label, required=required, size=size, spacing=spacing, style=style, value=value, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RadioGroup',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'color', 'data', 'description', 'error', 'label', 'required', 'size', 'spacing', 'style', 'value', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
