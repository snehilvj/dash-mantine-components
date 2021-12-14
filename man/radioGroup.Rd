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

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Active radio color from theme.colors}

\item{data}{List of lists containing elements 'label', 'value'.
those elements have the following types:
  - label (character; required): the option's label
  - value (character; required): option's values. RadioGroup options}

\item{description}{Character. Input description, displayed after label}

\item{error}{Character. Displays error message after input}

\item{label}{Character. Input label, displayed before input}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined label fontSize, radio width, height and border-radius}

\item{spacing}{A value equal to: "xs", "sm", "md", "lg", "xl". Spacing between radios in horizontal variant}

\item{style}{Named list. Inline style override}

\item{value}{Character. Value of currently selected radio (controlled)}

\item{variant}{A value equal to: "horizontal", "vertical". Radios position}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

