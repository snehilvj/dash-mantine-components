# AUTO GENERATED FILE - DO NOT EDIT

multiSelect <- function(id=NULL, class_name=NULL, clearSearchOnBlur=NULL, clearSearchOnChange=NULL, clearable=NULL, data=NULL, description=NULL, disabled=NULL, error=NULL, initiallyOpened=NULL, label=NULL, limit=NULL, maxDropdownHeight=NULL, maxSelectedValues=NULL, multiline=NULL, nothingFound=NULL, placeholder=NULL, radius=NULL, required=NULL, searchable=NULL, size=NULL, style=NULL, switchDirectionOnFlip=NULL, value=NULL, variant=NULL, withinPortal=NULL, zIndex=NULL) {
    
    props <- list(id=id, class_name=class_name, clearSearchOnBlur=clearSearchOnBlur, clearSearchOnChange=clearSearchOnChange, clearable=clearable, data=data, description=description, disabled=disabled, error=error, initiallyOpened=initiallyOpened, label=label, limit=limit, maxDropdownHeight=maxDropdownHeight, maxSelectedValues=maxSelectedValues, multiline=multiline, nothingFound=nothingFound, placeholder=placeholder, radius=radius, required=required, searchable=searchable, size=size, style=style, switchDirectionOnFlip=switchDirectionOnFlip, value=value, variant=variant, withinPortal=withinPortal, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MultiSelect',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'class_name', 'clearSearchOnBlur', 'clearSearchOnChange', 'clearable', 'data', 'description', 'disabled', 'error', 'initiallyOpened', 'label', 'limit', 'maxDropdownHeight', 'maxSelectedValues', 'multiline', 'nothingFound', 'placeholder', 'radius', 'required', 'searchable', 'size', 'style', 'switchDirectionOnFlip', 'value', 'variant', 'withinPortal', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
