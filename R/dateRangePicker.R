# AUTO GENERATED FILE - DO NOT EDIT

dateRangePicker <- function(id=NULL, allowSingleDateInRange=NULL, amountOfMonths=NULL, className=NULL, clearable=NULL, closeCalendarOnChange=NULL, closeDropdownOnScroll=NULL, dates=NULL, description=NULL, disableOutsideDayStyle=NULL, disableOutsideEvents=NULL, disabled=NULL, dropdownType=NULL, error=NULL, firstDayOfWeek=NULL, format=NULL, fullWidth=NULL, hideWeekdays=NULL, initialMonth=NULL, initiallyOpened=NULL, label=NULL, loading_state=NULL, locale=NULL, maxDate=NULL, minDate=NULL, multiline=NULL, placeholder=NULL, preventFocus=NULL, radius=NULL, required=NULL, size=NULL, style=NULL, variant=NULL, withSelect=NULL, yearsRange=NULL, zIndex=NULL) {
    
    props <- list(id=id, allowSingleDateInRange=allowSingleDateInRange, amountOfMonths=amountOfMonths, className=className, clearable=clearable, closeCalendarOnChange=closeCalendarOnChange, closeDropdownOnScroll=closeDropdownOnScroll, dates=dates, description=description, disableOutsideDayStyle=disableOutsideDayStyle, disableOutsideEvents=disableOutsideEvents, disabled=disabled, dropdownType=dropdownType, error=error, firstDayOfWeek=firstDayOfWeek, format=format, fullWidth=fullWidth, hideWeekdays=hideWeekdays, initialMonth=initialMonth, initiallyOpened=initiallyOpened, label=label, loading_state=loading_state, locale=locale, maxDate=maxDate, minDate=minDate, multiline=multiline, placeholder=placeholder, preventFocus=preventFocus, radius=radius, required=required, size=size, style=style, variant=variant, withSelect=withSelect, yearsRange=yearsRange, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateRangePicker',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'allowSingleDateInRange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'dates', 'description', 'disableOutsideDayStyle', 'disableOutsideEvents', 'disabled', 'dropdownType', 'error', 'firstDayOfWeek', 'format', 'fullWidth', 'hideWeekdays', 'initialMonth', 'initiallyOpened', 'label', 'loading_state', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'variant', 'withSelect', 'yearsRange', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
