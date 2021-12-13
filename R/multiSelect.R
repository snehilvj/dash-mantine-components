# AUTO GENERATED FILE - DO NOT EDIT

multiSelect <- function(id=NULL, className=NULL, clearSearchOnBlur=NULL, clearSearchOnChange=NULL, clearable=NULL, data=NULL, description=NULL, disabled=NULL, error=NULL, initiallyOpened=NULL, label=NULL, limit=NULL, loading_state=NULL, maxDropdownHeight=NULL, maxSelectedValues=NULL, multiline=NULL, nothingFound=NULL, placeholder=NULL, radius=NULL, required=NULL, searchable=NULL, shadow=NULL, size=NULL, style=NULL, value=NULL, variant=NULL, zIndex=NULL) {
    
    props <- list(id=id, className=className, clearSearchOnBlur=clearSearchOnBlur, clearSearchOnChange=clearSearchOnChange, clearable=clearable, data=data, description=description, disabled=disabled, error=error, initiallyOpened=initiallyOpened, label=label, limit=limit, loading_state=loading_state, maxDropdownHeight=maxDropdownHeight, maxSelectedValues=maxSelectedValues, multiline=multiline, nothingFound=nothingFound, placeholder=placeholder, radius=radius, required=required, searchable=searchable, shadow=shadow, size=size, style=style, value=value, variant=variant, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MultiSelect',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'clearSearchOnBlur', 'clearSearchOnChange', 'clearable', 'data', 'description', 'disabled', 'error', 'initiallyOpened', 'label', 'limit', 'loading_state', 'maxDropdownHeight', 'maxSelectedValues', 'multiline', 'nothingFound', 'placeholder', 'radius', 'required', 'searchable', 'shadow', 'size', 'style', 'value', 'variant', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
