% Auto-generated: do not edit by hand
\name{progress}

\alias{progress}

\title{Progress component}

\description{
Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/
}

\usage{
progress(id=NULL, className=NULL, color=NULL, loading_state=NULL,
radius=NULL, sections=NULL, size=NULL, striped=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Progress color from theme}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Predefined progress radius from theme.radius or number for height in px}

\item{sections}{List of lists containing elements 'value', 'color'.
those elements have the following types:
  - value (numeric; optional)
  - color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional)s. Replaces value if present, renders multiple sections instead of single one}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined progress height or number for height in px}

\item{striped}{Logical. Adds stripes}

\item{value}{Numeric. Current value for controlled slider}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

