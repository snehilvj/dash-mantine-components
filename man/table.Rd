% Auto-generated: do not edit by hand
\name{table}

\alias{table}

\title{Table component}

\description{
A simple table component. For more information, see: https://mantine.dev/core/table/
}

\usage{
table(id=NULL, caption=NULL, captionSide=NULL, className=NULL,
columns=NULL, highlightOnHover=NULL, loading_state=NULL,
rows=NULL, striped=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{caption}{Character. Table description}

\item{captionSide}{A value equal to: "bottom", "top". Table caption position}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{columns}{List of characters. Table columns}

\item{highlightOnHover}{Logical. If true row will have hover color}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{rows}{List of unnamed lists. Table rows}

\item{striped}{Logical. If true every odd row of table will have gray background color}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

