% Auto-generated: do not edit by hand
\name{skeleton}

\alias{skeleton}

\title{Skeleton component}

\description{
Indicate content loading state. For more information, see: https://mantine.dev/core/skeleton/
}

\usage{
skeleton(children=NULL, id=NULL, circle=NULL, height=NULL,
loading_state=NULL, radius=NULL, style=NULL, visible=NULL,
width=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{circle}{Logical. If Skeleton is a circle, it's width and border-radius will be equal to height}

\item{height}{Character | numeric. Skeleton height}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Radius from theme.radius or number to set border-radius in px}

\item{style}{Named list. Inline style override}

\item{visible}{Logical. Should skeleton overlay be displayed}

\item{width}{Character | numeric. Skeleton width}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

