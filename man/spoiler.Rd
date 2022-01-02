% Auto-generated: do not edit by hand
\name{spoiler}

\alias{spoiler}

\title{Spoiler component}

\description{
Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/
}

\usage{
spoiler(children=NULL, id=NULL, class_name=NULL, hideLabel=NULL,
initialState=NULL, loading_state=NULL, maxHeight=NULL,
showLabel=NULL, style=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{hideLabel}{Character. Label for close spoiler action}

\item{initialState}{Logical. Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{maxHeight}{Numeric. Max height of visible content, when this point is reached spoiler appears}

\item{showLabel}{Character. Label for open spoiler action}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

