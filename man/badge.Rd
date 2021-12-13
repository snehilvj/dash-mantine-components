% Auto-generated: do not edit by hand
\name{badge}

\alias{badge}

\title{Badge component}

\description{
Display badge, pill or tag. For more information, see: https://mantine.dev/core/badge/
}

\usage{
badge(children=NULL, id=NULL, className=NULL, color=NULL,
fullWidth=NULL, gradient=NULL, loading_state=NULL,
radius=NULL, size=NULL, style=NULL, variant=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Badge color from theme}

\item{fullWidth}{Logical. Sets badge width to 100\% of parent element, hides overflow text with text-overflow: ellipsis}

\item{gradient}{Lists containing elements 'from', 'to', 'deg'.
those elements have the following types:
  - from (character; required)
  - to (character; required)
  - deg (numeric; optional). Controls gradient settings in gradient variant only}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Predefined border-radius value from theme.radius or number for border-radius in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined badge size}

\item{style}{Named list. Inline style override}

\item{variant}{A value equal to: "light", "filled", "outline", "dot", "gradient". Controls badge background, color and border styles}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

