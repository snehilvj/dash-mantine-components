# AUTO GENERATED FILE - DO NOT EDIT

dateRangePicker <- function(id=NULL, allowSingleDateInRange=NULL, amountOfMonths=NULL, className=NULL, clearable=NULL, closeCalendarOnChange=NULL, closeDropdownOnScroll=NULL, dates=NULL, description=NULL, disableOutsideEvents=NULL, disabled=NULL, dropdownType=NULL, firstDayOfWeek=NULL, format=NULL, initialMonth=NULL, initiallyOpened=NULL, label=NULL, locale=NULL, maxDate=NULL, minDate=NULL, placeholder=NULL, preventFocus=NULL, radius=NULL, required=NULL, size=NULL, style=NULL, withSelect=NULL, yearsRange=NULL, zIndex=NULL) {
    
    props <- list(id=id, allowSingleDateInRange=allowSingleDateInRange, amountOfMonths=amountOfMonths, className=className, clearable=clearable, closeCalendarOnChange=closeCalendarOnChange, closeDropdownOnScroll=closeDropdownOnScroll, dates=dates, description=description, disableOutsideEvents=disableOutsideEvents, disabled=disabled, dropdownType=dropdownType, firstDayOfWeek=firstDayOfWeek, format=format, initialMonth=initialMonth, initiallyOpened=initiallyOpened, label=label, locale=locale, maxDate=maxDate, minDate=minDate, placeholder=placeholder, preventFocus=preventFocus, radius=radius, required=required, size=size, style=style, withSelect=withSelect, yearsRange=yearsRange, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateRangePicker',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'allowSingleDateInRange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'dates', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'firstDayOfWeek', 'format', 'initialMonth', 'initiallyOpened', 'label', 'locale', 'maxDate', 'minDate', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'withSelect', 'yearsRange', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
