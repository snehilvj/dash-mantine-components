% Auto-generated: do not edit by hand
\name{radioGroup}

\alias{radioGroup}

\title{RadioGroup component}

\description{
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/
}

\usage{
radioGroup(id=NULL, className=NULL, color=NULL, data=NULL,
description=NULL, error=NULL, label=NULL, required=NULL,
size=NULL, spacing=NULL, style=NULL, value=NULL,
variant=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{Active radio color from theme.colors}

\item{data}{RadioGroup options}

\item{description}{Character. Input description, displayed after label}

\item{error}{Character. Displays error message after input}

\item{label}{Character. Input label, displayed before input}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{size}{Predefined label fontSize, radio width, height and border-radius}

\item{spacing}{Spacing between radios in horizontal variant}

\item{style}{Named list. Inline style override}

\item{value}{Character. Value of currently selected radio (controlled)}

\item{variant}{A value equal to: "horizontal", "vertical". Radios position}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

