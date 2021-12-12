# AUTO GENERATED FILE - DO NOT EDIT

datePicker <- function(id=NULL, allowFreeInput=NULL, amountOfMonths=NULL, className=NULL, clearable=NULL, date=NULL, description=NULL, disableOutsideEvents=NULL, disabled=NULL, dropdownType=NULL, firstDayOfWeek=NULL, format=NULL, initialMonth=NULL, initiallyOpened=NULL, label=NULL, locale=NULL, maxDate=NULL, minDate=NULL, multiline=NULL, placeholder=NULL, preventFocus=NULL, radius=NULL, required=NULL, size=NULL, style=NULL, withSelect=NULL, yearsRange=NULL, zIndex=NULL) {
    
    props <- list(id=id, allowFreeInput=allowFreeInput, amountOfMonths=amountOfMonths, className=className, clearable=clearable, date=date, description=description, disableOutsideEvents=disableOutsideEvents, disabled=disabled, dropdownType=dropdownType, firstDayOfWeek=firstDayOfWeek, format=format, initialMonth=initialMonth, initiallyOpened=initiallyOpened, label=label, locale=locale, maxDate=maxDate, minDate=minDate, multiline=multiline, placeholder=placeholder, preventFocus=preventFocus, radius=radius, required=required, size=size, style=style, withSelect=withSelect, yearsRange=yearsRange, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DatePicker',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'allowFreeInput', 'amountOfMonths', 'className', 'clearable', 'date', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'firstDayOfWeek', 'format', 'initialMonth', 'initiallyOpened', 'label', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
