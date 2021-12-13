% Auto-generated: do not edit by hand
\name{blockquote}

\alias{blockquote}

\title{Blockquote component}

\description{
Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/
}

\usage{
blockquote(children=NULL, id=NULL, cite=NULL, className=NULL,
color=NULL, loading_state=NULL, style=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{cite}{Character. Describe a reference to a cited quote}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Badge color from theme}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

