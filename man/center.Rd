% Auto-generated: do not edit by hand
\name{center}

\alias{center}

\title{Center component}

\description{
Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/center/
}

\usage{
center(children=NULL, id=NULL, className=NULL, inline=NULL,
loading_state=NULL, style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content that should be centered vertically and horizontally}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{inline}{Logical. Set to true to use inline-flex instead of flex}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

