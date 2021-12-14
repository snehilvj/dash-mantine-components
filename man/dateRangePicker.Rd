% Auto-generated: do not edit by hand
\name{dateRangePicker}

\alias{dateRangePicker}

\title{DateRangePicker component}

\description{
Capture date input from user. For more information, see: https://mantine.dev/dates/date-range-picker/
}

\usage{
dateRangePicker(id=NULL, allowLevelChange=NULL, allowSingleDateInRange=NULL,
amountOfMonths=NULL, className=NULL, clearable=NULL,
closeCalendarOnChange=NULL, closeDropdownOnScroll=NULL,
dates=NULL, description=NULL, disableOutsideEvents=NULL,
disabled=NULL, dropdownType=NULL, error=NULL,
firstDayOfWeek=NULL, fixOnBlur=NULL, focusable=NULL,
format=NULL, fullWidth=NULL, hideOutsideDates=NULL,
hideWeekdays=NULL, initialLevel=NULL, initialMonth=NULL,
initiallyOpened=NULL, label=NULL, labelSeparator=NULL,
locale=NULL, maxDate=NULL, minDate=NULL, multiline=NULL,
placeholder=NULL, preventFocus=NULL, radius=NULL,
required=NULL, size=NULL, style=NULL, variant=NULL,
withinPortal=NULL, zIndex=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{allowLevelChange}{Logical. Allow to change level (date – month – year)}

\item{allowSingleDateInRange}{Logical. Allow one date to be selected as range}

\item{amountOfMonths}{Numeric. Amount of displayed months}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{clearable}{Logical. Allow to clear value}

\item{closeCalendarOnChange}{Logical. Set to false to force dropdown to stay open after date was selected}

\item{closeDropdownOnScroll}{Logical. Set to true to disable dropdown closing on scroll}

\item{dates}{List of characters. Selected date}

\item{description}{Character. Input description, displayed after label}

\item{disableOutsideEvents}{Logical. When true dates that are outside of given month cannot be clicked or focused}

\item{disabled}{Logical. A Datepicker can show it is currently unable to be interacted with}

\item{dropdownType}{A value equal to: "modal", "popover". Where to show calendar in modal or popover}

\item{error}{Character. Displays error message after input}

\item{firstDayOfWeek}{A value equal to: "sunday", "monday". Set first day of the week}

\item{fixOnBlur}{Logical. call onChange with last valid value onBlur}

\item{focusable}{Logical. Should focusable days have tabIndex={0}?}

\item{format}{Character. DatePicker display format}

\item{fullWidth}{Logical. Set to true to make calendar take 100\% of container width}

\item{hideOutsideDates}{Logical. Remove outside dates}

\item{hideWeekdays}{Logical. Set to false to remove weekdays row}

\item{initialLevel}{A value equal to: "date", "month", "year". Initial date selection level}

\item{initialMonth}{Character. Initial selected month}

\item{initiallyOpened}{Logical. Control initial dropdown opened state}

\item{label}{Character. Input label, displayed before input}

\item{labelSeparator}{Character. Separator between dates}

\item{locale}{Character. Locale used for all labels formatting}

\item{maxDate}{Character. Maximum possible date}

\item{minDate}{Character. Minimum possible date}

\item{multiline}{Logical. Will input have multiple lines?}

\item{placeholder}{Character. Placeholder, displayed when date is not selected}

\item{preventFocus}{Logical. Prevent focusing upon clicking}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Input border-radius from theme or number to set border-radius in px}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Input size}

\item{style}{Named list. Inline style override}

\item{variant}{A value equal to: "default", "filled", "unstyled", "headless". Defines input appearance, defaults to default in light color scheme and filled in dark}

\item{withinPortal}{Logical. Whether to render the dropdown in a Portal}

\item{zIndex}{Numeric. Popper zIndex}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

