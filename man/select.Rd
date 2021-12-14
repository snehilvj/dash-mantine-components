% Auto-generated: do not edit by hand
\name{select}

\alias{select}

\title{Select component}

\description{
Custom searchable select. For more information, see: https://mantine.dev/core/select/
}

\usage{
select(id=NULL, className=NULL, clearable=NULL, data=NULL,
description=NULL, disabled=NULL, dropdownPosition=NULL,
error=NULL, initiallyOpened=NULL, label=NULL, limit=NULL,
maxDropdownHeight=NULL, multiline=NULL, nothingFound=NULL,
placeholder=NULL, radius=NULL, required=NULL,
searchable=NULL, size=NULL, style=NULL, value=NULL,
withinPortal=NULL, zIndex=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{clearable}{Logical. Allow to clear value}

\item{data}{List of lists containing elements 'label', 'value', 'disabled'.
those elements have the following types:
  - label (character; required): the option's label
  - value (character; required): option's value
  - disabled (logical; optional): if true, this option is disabled and cannot be selecteds. Select options used to renderer items in dropdown}

\item{description}{Character. Input description, displayed after label}

\item{disabled}{Logical. The component can show it is currently unable to be interacted with}

\item{dropdownPosition}{A value equal to: "bottom", "top", "flip". Dropdown positioning behavior}

\item{error}{Character. Displays error message after input}

\item{initiallyOpened}{Logical. Initial dropdown opened state}

\item{label}{Character. Input label, displayed before input}

\item{limit}{Numeric. Limit amount of items displayed at a time for searchable select}

\item{maxDropdownHeight}{Numeric. Maximum dropdown height in px}

\item{multiline}{Logical. Will input have multiple lines?}

\item{nothingFound}{Character. Nothing found label}

\item{placeholder}{Character. Placeholder, displayed when date is not selected}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Input border-radius from theme or number to set border-radius in px}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{searchable}{Logical. Set to true to enable search}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Input size}

\item{style}{Named list. Inline style override}

\item{value}{Character. Selected value}

\item{withinPortal}{Logical. Whether to render the dropdown in a Portal}

\item{zIndex}{Numeric. Dropdown z-index}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

