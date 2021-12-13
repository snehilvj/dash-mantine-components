% Auto-generated: do not edit by hand
\name{tabs}

\alias{tabs}

\title{Tabs component}

\description{
Switch between different views. For more information, see: https://mantine.dev/core/tabs/
}

\usage{
tabs(children=NULL, id=NULL, active=NULL, className=NULL,
color=NULL, grow=NULL, loading_state=NULL, orientation=NULL,
position=NULL, tabPadding=NULL, variant=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. <Tab /> components only}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{active}{Numeric. Index of active tab, overrides internal state}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Active tab color from theme.colors}

\item{grow}{Logical. True if tabs should take all available space}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{orientation}{A value equal to: "horizontal", "vertical". Controls tab orientation}

\item{position}{A value equal to: "right", "center", "left", "apart". Tab controls position}

\item{tabPadding}{A value equal to: "xs", "sm", "md", "lg", "xl". Controls tab content padding-top}

\item{variant}{A value equal to: "default", "outline", "pills". Controls appearance}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

