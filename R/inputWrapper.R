# AUTO GENERATED FILE - DO NOT EDIT

inputWrapper <- function(children=NULL, id=NULL, class_name=NULL, description=NULL, error=NULL, label=NULL, required=NULL, size=NULL, style=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, description=description, error=error, label=label, required=required, size=size, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'InputWrapper',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'description', 'error', 'label', 'required', 'size', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
