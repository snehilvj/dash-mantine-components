# AUTO GENERATED FILE - DO NOT EDIT

select <- function(id=NULL, className=NULL, clearable=NULL, description=NULL, disabled=NULL, error=NULL, label=NULL, limit=NULL, maxDropdownHeight=NULL, nothingFound=NULL, options=NULL, placeholder=NULL, radius=NULL, required=NULL, searchable=NULL, size=NULL, style=NULL, value=NULL) {
    
    props <- list(id=id, className=className, clearable=clearable, description=description, disabled=disabled, error=error, label=label, limit=limit, maxDropdownHeight=maxDropdownHeight, nothingFound=nothingFound, options=options, placeholder=placeholder, radius=radius, required=required, searchable=searchable, size=size, style=style, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Select',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'clearable', 'description', 'disabled', 'error', 'label', 'limit', 'maxDropdownHeight', 'nothingFound', 'options', 'placeholder', 'radius', 'required', 'searchable', 'size', 'style', 'value'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
