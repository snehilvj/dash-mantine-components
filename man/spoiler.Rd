% Auto-generated: do not edit by hand
\name{spoiler}

\alias{spoiler}

\title{Spoiler component}

\description{
Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/
}

\usage{
spoiler(children=NULL, id=NULL, hideLabel=NULL, initialState=NULL,
maxHeight=NULL, showLabel=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{hideLabel}{Character. Label for close spoiler action}

\item{initialState}{Logical. Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount}

\item{maxHeight}{Numeric. Max height of visible content, when this point is reached spoiler appears}

\item{showLabel}{Character. Label for open spoiler action}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

