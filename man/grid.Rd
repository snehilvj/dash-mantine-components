% Auto-generated: do not edit by hand
\name{grid}

\alias{grid}

\title{Grid component}

\description{
Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/
}

\usage{
grid(children=NULL, id=NULL, align=NULL, className=NULL,
columns=NULL, grow=NULL, gutter=NULL, justify=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{align}{Set grid align-content property}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{columns}{Numeric. Amount of columns in each row}

\item{grow}{Logical. Should columns in the last row take 100\% of grid width}

\item{gutter}{Spacing between columns predefined value from theme.spacing or number for gutter in px}

\item{justify}{Set grid justify-content property}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

