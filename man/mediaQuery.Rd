% Auto-generated: do not edit by hand
\name{mediaQuery}

\alias{mediaQuery}

\title{MediaQuery component}

\description{
Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/
}

\usage{
mediaQuery(children=NULL, id=NULL, className=NULL, largerThan=NULL,
query=NULL, smallerThan=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Child that should be shown at given breakpoint, it must accept className prop}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{largerThan}{Larger than given breakpoint or value in px, will be hidden on smaller viewport}

\item{query}{Character. Any other media query}

\item{smallerThan}{Smaller than given breakpoint or value in px, will be hidden on larger viewport}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

