% Auto-generated: do not edit by hand
\name{grid}

\alias{grid}

\title{Grid component}

\description{
Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/
}

\usage{
grid(children=NULL, id=NULL, align=NULL, className=NULL,
columns=NULL, grow=NULL, gutter=NULL, justify=NULL,
style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{align}{A value equal to: "stretch", "center", "flex-end", "flex-start". Set grid align-content property}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{columns}{Numeric. Amount of columns in each row}

\item{grow}{Logical. Should columns in the last row take 100\% of grid width}

\item{gutter}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Spacing between columns predefined value from theme.spacing or number for gutter in px}

\item{justify}{A value equal to: "space-between", "space-around", "center", "flex-end", "flex-start". Set grid justify-content property}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

