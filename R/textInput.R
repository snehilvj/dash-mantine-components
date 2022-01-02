# AUTO GENERATED FILE - DO NOT EDIT

textInput <- function(id=NULL, class_name=NULL, description=NULL, disabled=NULL, error=NULL, label=NULL, multiline=NULL, placeholder=NULL, radius=NULL, required=NULL, size=NULL, style=NULL, type=NULL, value=NULL, variant=NULL) {
    
    props <- list(id=id, class_name=class_name, description=description, disabled=disabled, error=error, label=label, multiline=multiline, placeholder=placeholder, radius=radius, required=required, size=size, style=style, type=type, value=value, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TextInput',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'class_name', 'description', 'disabled', 'error', 'label', 'multiline', 'placeholder', 'radius', 'required', 'size', 'style', 'type', 'value', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
