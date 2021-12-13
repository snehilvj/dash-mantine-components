% Auto-generated: do not edit by hand
\name{breadcrumbs}

\alias{breadcrumbs}

\title{Breadcrumbs component}

\description{
Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/
}

\usage{
breadcrumbs(id=NULL, items=NULL, loading_state=NULL, separator=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{items}{List of lists containing elements 'title', 'href'.
those elements have the following types:
  - title (character; required)
  - href (character; required)s. Link items}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{separator}{Character. Separator between breadcrumbs}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

