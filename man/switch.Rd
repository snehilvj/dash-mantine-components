% Auto-generated: do not edit by hand
\name{switch}

\alias{switch}

\title{Switch component}

\description{
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/switch/
}

\usage{
switch(id=NULL, checked=NULL, className=NULL, color=NULL,
disabled=NULL, label=NULL, loading_state=NULL, radius=NULL,
size=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{checked}{Logical. State of check box}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Checkbox color}

\item{disabled}{Logical. A checkbox can show it is currently unable to be interacted with}

\item{label}{Character. Checkbox label}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Predefined border-radius value from theme.radius or number for border-radius in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined label font-size and checkbox width and height in px}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

