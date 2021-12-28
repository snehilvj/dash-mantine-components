% Auto-generated: do not edit by hand
\name{simpleGrid}

\alias{simpleGrid}

\title{SimpleGrid component}

\description{
Responsive grid where each item takes equal amount of space. For more information, see: https://mantine.dev/core/simple-grid/
}

\usage{
simpleGrid(children=NULL, id=NULL, breakpoints=NULL, className=NULL,
cols=NULL, spacing=NULL, style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Children}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{breakpoints}{Lists containing elements 'maxwidth', 'cols', 'spacing'.
those elements have the following types:
  - maxwidth (numeric; required)
  - cols (numeric; required)
  - spacing (a value equal to: "xs", "sm", "md", "lg", "xl" | numeric; optional). Breakpoints data to change items per row and spacing based on max-width}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{cols}{Numeric. Default amount of columns, used when none of breakpoints can be applied}

\item{spacing}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Default spacing between columns, used when none of breakpoints can be applied}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

