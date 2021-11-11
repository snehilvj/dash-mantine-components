# AUTO GENERATED FILE - DO NOT EDIT

radioGroup <- function(id=NULL, className=NULL, color=NULL, description=NULL, error=NULL, label=NULL, options=NULL, required=NULL, size=NULL, spacing=NULL, style=NULL, value=NULL, variant=NULL) {
    
    props <- list(id=id, className=className, color=color, description=description, error=error, label=label, options=options, required=required, size=size, spacing=spacing, style=style, value=value, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RadioGroup',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'color', 'description', 'error', 'label', 'options', 'required', 'size', 'spacing', 'style', 'value', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
