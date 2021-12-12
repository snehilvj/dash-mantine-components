% Auto-generated: do not edit by hand
\name{dateRangePicker}

\alias{dateRangePicker}

\title{DateRangePicker component}

\description{
Capture date input from user. For more information, see: https://mantine.dev/dates/date-range-picker/
}

\usage{
dateRangePicker(id=NULL, allowSingleDateInRange=NULL, amountOfMonths=NULL,
className=NULL, clearable=NULL, closeCalendarOnChange=NULL,
closeDropdownOnScroll=NULL, dates=NULL, description=NULL,
disableOutsideEvents=NULL, disabled=NULL, dropdownType=NULL,
firstDayOfWeek=NULL, format=NULL, initialMonth=NULL,
initiallyOpened=NULL, label=NULL, locale=NULL, maxDate=NULL,
minDate=NULL, placeholder=NULL, preventFocus=NULL,
radius=NULL, required=NULL, size=NULL, style=NULL,
withSelect=NULL, yearsRange=NULL, zIndex=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{allowSingleDateInRange}{Logical. Allow one date to be selected as range}

\item{amountOfMonths}{Numeric. Amount of displayed months}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{clearable}{Logical. Allow to clear value}

\item{closeCalendarOnChange}{Logical. Set to false to force dropdown to stay open after date was selected}

\item{closeDropdownOnScroll}{Logical. Set to true to disable dropdown closing on scroll}

\item{dates}{List of characters. Selected date}

\item{description}{Character. Input description, displayed after label}

\item{disableOutsideEvents}{Logical. When true dates that are outside of given month cannot be clicked or focused}

\item{disabled}{Logical. A DateRangePicker can show it is currently unable to be interacted with}

\item{dropdownType}{A value equal to: "modal", "popover". Where to show calendar in modal or popover}

\item{firstDayOfWeek}{A value equal to: "sunday", "monday". Set first day of the week}

\item{format}{Character. DateRangePicker display format}

\item{initialMonth}{Character. Initial selected month}

\item{initiallyOpened}{Logical. Control initial dropdown opened state}

\item{label}{Character. Input label, displayed before input}

\item{locale}{Character. Locale used for all labels formatting}

\item{maxDate}{Character. Maximum possible date}

\item{minDate}{Character. Minimum possible date}

\item{placeholder}{Character. Placeholder, displayed when date is not selected}

\item{preventFocus}{Logical. Prevent focusing upon clicking}

\item{radius}{Input border-radius from theme or number to set border-radius in px}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{size}{Input size}

\item{style}{Named list. Inline style override}

\item{withSelect}{Logical. Replace calendar label with month and year selects}

\item{yearsRange}{Lists containing elements 'from', 'to'.
those elements have the following types:
  - from (numeric; optional)
  - to (numeric; optional). Years range for year select}

\item{zIndex}{Numeric. Popper zIndex}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

