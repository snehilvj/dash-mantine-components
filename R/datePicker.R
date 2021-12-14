# AUTO GENERATED FILE - DO NOT EDIT

datePicker <- function(id=NULL, allowFreeInput=NULL, allowLevelChange=NULL, amountOfMonths=NULL, className=NULL, clearable=NULL, closeCalendarOnChange=NULL, closeDropdownOnScroll=NULL, date=NULL, description=NULL, disableOutsideEvents=NULL, disabled=NULL, dropdownType=NULL, error=NULL, firstDayOfWeek=NULL, fixOnBlur=NULL, focusable=NULL, format=NULL, fullWidth=NULL, hideWeekdays=NULL, initialLevel=NULL, initialMonth=NULL, initiallyOpened=NULL, label=NULL, locale=NULL, maxDate=NULL, minDate=NULL, multiline=NULL, placeholder=NULL, preventFocus=NULL, radius=NULL, required=NULL, size=NULL, style=NULL, variant=NULL, withinPortal=NULL, zIndex=NULL) {
    
    props <- list(id=id, allowFreeInput=allowFreeInput, allowLevelChange=allowLevelChange, amountOfMonths=amountOfMonths, className=className, clearable=clearable, closeCalendarOnChange=closeCalendarOnChange, closeDropdownOnScroll=closeDropdownOnScroll, date=date, description=description, disableOutsideEvents=disableOutsideEvents, disabled=disabled, dropdownType=dropdownType, error=error, firstDayOfWeek=firstDayOfWeek, fixOnBlur=fixOnBlur, focusable=focusable, format=format, fullWidth=fullWidth, hideWeekdays=hideWeekdays, initialLevel=initialLevel, initialMonth=initialMonth, initiallyOpened=initiallyOpened, label=label, locale=locale, maxDate=maxDate, minDate=minDate, multiline=multiline, placeholder=placeholder, preventFocus=preventFocus, radius=radius, required=required, size=size, style=style, variant=variant, withinPortal=withinPortal, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DatePicker',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'allowFreeInput', 'allowLevelChange', 'amountOfMonths', 'className', 'clearable', 'closeCalendarOnChange', 'closeDropdownOnScroll', 'date', 'description', 'disableOutsideEvents', 'disabled', 'dropdownType', 'error', 'firstDayOfWeek', 'fixOnBlur', 'focusable', 'format', 'fullWidth', 'hideWeekdays', 'initialLevel', 'initialMonth', 'initiallyOpened', 'label', 'locale', 'maxDate', 'minDate', 'multiline', 'placeholder', 'preventFocus', 'radius', 'required', 'size', 'style', 'variant', 'withinPortal', 'zIndex'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
