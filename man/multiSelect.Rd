% Auto-generated: do not edit by hand
\name{multiSelect}

\alias{multiSelect}

\title{MultiSelect component}

\description{
Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
}

\usage{
multiSelect(id=NULL, class_name=NULL, clearSearchOnBlur=NULL,
clearSearchOnChange=NULL, clearable=NULL, data=NULL,
description=NULL, disabled=NULL, error=NULL,
initiallyOpened=NULL, label=NULL, limit=NULL,
maxDropdownHeight=NULL, maxSelectedValues=NULL,
multiline=NULL, nothingFound=NULL, placeholder=NULL,
radius=NULL, required=NULL, searchable=NULL, size=NULL,
style=NULL, switchDirectionOnFlip=NULL, value=NULL,
variant=NULL, withinPortal=NULL, zIndex=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{clearSearchOnBlur}{Logical. Clear search field value on blur}

\item{clearSearchOnChange}{Logical. Clear search value when item is selected}

\item{clearable}{Logical. Allow to clear value}

\item{data}{List of lists containing elements 'label', 'value', 'disabled'.
those elements have the following types:
  - label (character; required): the option's label
  - value (character; required): option's value
  - disabled (logical; optional): if true, this option is disabled and cannot be selecteds. Select options used to renderer items in dropdown}

\item{description}{Character. Input description, displayed after label}

\item{disabled}{Logical. The component can show it is currently unable to be interacted with}

\item{error}{Character. Displays error message after input}

\item{initiallyOpened}{Logical. Initial dropdown opened state}

\item{label}{Character. Input label, displayed before input}

\item{limit}{Numeric. Limit amount of items displayed at a time for searchable select}

\item{maxDropdownHeight}{Numeric. Maximum dropdown height in px}

\item{maxSelectedValues}{Numeric. Limit amount of items selected}

\item{multiline}{Logical. Will input have multiple lines?}

\item{nothingFound}{Character. Nothing found label}

\item{placeholder}{Character. Placeholder, displayed when date is not selected}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Input border-radius from theme or number to set border-radius in px}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{searchable}{Logical. Set to true to enable search}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Input size}

\item{style}{Named list. Inline style override}

\item{switchDirectionOnFlip}{Logical. Whether to switch item order and keyboard navigation on dropdown position flip}

\item{value}{List of characters. Selected value}

\item{variant}{A value equal to: "default", "filled", "unstyled", "headless". Defines input appearance, defaults to default in light color scheme and filled in dark}

\item{withinPortal}{Logical. Whether to render the dropdown in a Portal}

\item{zIndex}{Numeric. Dropdown z-index}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

