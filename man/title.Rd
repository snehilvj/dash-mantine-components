% Auto-generated: do not edit by hand
\name{title}

\alias{title}

\title{Title component}

\description{
h1-h6 headings. For more information, see: https://mantine.dev/core/title/
}

\usage{
title(children=NULL, id=NULL, align=NULL, className=NULL,
loading_state=NULL, order=NULL, style=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{align}{A value equal to: "left", "right", "center". Sets text-align css property}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{order}{Numeric. Defines component and styles which will be used}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

