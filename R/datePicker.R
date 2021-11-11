# AUTO GENERATED FILE - DO NOT EDIT

datePicker <- function(id=NULL, className=NULL, clearable=NULL, date=NULL, description=NULL, disabled=NULL, dropdownType=NULL, format=NULL, initialMonth=NULL, label=NULL, maxDate=NULL, minDate=NULL, placeholder=NULL, radius=NULL, required=NULL, size=NULL, style=NULL, withSelect=NULL, yearsRange=NULL) {
    
    props <- list(id=id, className=className, clearable=clearable, date=date, description=description, disabled=disabled, dropdownType=dropdownType, format=format, initialMonth=initialMonth, label=label, maxDate=maxDate, minDate=minDate, placeholder=placeholder, radius=radius, required=required, size=size, style=style, withSelect=withSelect, yearsRange=yearsRange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DatePicker',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'clearable', 'date', 'description', 'disabled', 'dropdownType', 'format', 'initialMonth', 'label', 'maxDate', 'minDate', 'placeholder', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
