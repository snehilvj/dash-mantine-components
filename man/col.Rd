% Auto-generated: do not edit by hand
\name{col}

\alias{col}

\title{Col component}

\description{
Utility component to pass to Grid. For more information, see: https://mantine.dev/core/grid/
}

\usage{
col(children=NULL, id=NULL, className=NULL, lg=NULL,
loading_state=NULL, md=NULL, offset=NULL, sm=NULL,
span=NULL, style=NULL, xl=NULL, xs=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Col content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{lg}{Numeric. Col span at (min-width: theme.breakpoints.lg)}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{md}{Numeric. Col span at (min-width: theme.breakpoints.md)}

\item{offset}{Numeric. Column left offset}

\item{sm}{Numeric. Col span at (min-width: theme.breakpoints.sm)}

\item{span}{Numeric. Default col span}

\item{style}{Named list. Inline style override}

\item{xl}{Numeric. Col span at (min-width: theme.breakpoints.xl)}

\item{xs}{Numeric. Col span at (min-width: theme.breakpoints.xs)}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

