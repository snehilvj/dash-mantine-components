# AUTO GENERATED FILE - DO NOT EDIT

select <- function(id=NULL, className=NULL, clearable=NULL, data=NULL, description=NULL, disabled=NULL, error=NULL, initiallyOpened=NULL, label=NULL, limit=NULL, maxDropdownHeight=NULL, multiline=NULL, nothingFound=NULL, placeholder=NULL, radius=NULL, required=NULL, searchable=NULL, size=NULL, style=NULL, value=NULL, zIndex=NULL) {
    
    props <- list(id=id, className=className, clearable=clearable, data=data, description=description, disabled=disabled, error=error, initiallyOpened=initiallyOpened, label=label, limit=limit, maxDropdownHeight=maxDropdownHeight, multiline=multiline, nothingFound=nothingFound, placeholder=placeholder, radius=radius, required=required, searchable=searchable, size=size, style=style, value=value, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Select',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'clearable', 'data', 'description', 'disabled', 'error', 'initiallyOpened', 'label', 'limit', 'maxDropdownHeight', 'multiline', 'nothingFound', 'placeholder', 'radius', 'required', 'searchable', 'size', 'style', 'value', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
