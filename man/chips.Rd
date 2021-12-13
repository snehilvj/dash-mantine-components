% Auto-generated: do not edit by hand
\name{chips}

\alias{chips}

\title{Chips component}

\description{
Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/chips/
}

\usage{
chips(id=NULL, align=NULL, className=NULL, color=NULL, data=NULL,
direction=NULL, grow=NULL, multiple=NULL, noWrap=NULL,
position=NULL, radius=NULL, size=NULL, spacing=NULL,
style=NULL, value=NULL, variant=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{align}{A value equal to: "stretch", "center", "flex-end", "flex-start". Defines align-items css property}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Active chip color, defaults to theme.primaryColor}

\item{data}{List of lists containing elements 'label', 'value', 'disabled'.
those elements have the following types:
  - label (character; required): the option's label
  - value (character; required): option's value
  - disabled (logical; optional): if true, this option is disabled and cannot be selecteds. Chips}

\item{direction}{A value equal to: "row", "column". Defines flex-direction property, row for horizontal, column for vertical}

\item{grow}{Logical. Defines flex-grow property for each element, true -> 1, false -> 0}

\item{multiple}{Logical. Allow multiple values to be picked}

\item{noWrap}{Logical. Defined flex-wrap property}

\item{position}{A value equal to: "right", "center", "left", "apart". Defines justify-content property}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Chip border-radius from theme or number to set value in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined chip size}

\item{spacing}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Spacing between chips from theme or number to set value in px}

\item{style}{Named list. Inline style override}

\item{value}{Character | list of characters. Controlled component value}

\item{variant}{A value equal to: "outline", "filled". Controls chip appearance, defaults to filled with dark theme and to outline in light theme}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

