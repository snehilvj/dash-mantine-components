% Auto-generated: do not edit by hand
\name{tooltip}

\alias{tooltip}

\title{Tooltip component}

\description{
Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/
}

\usage{
tooltip(children=NULL, id=NULL, arrowSize=NULL, className=NULL,
color=NULL, delay=NULL, disabled=NULL, gutter=NULL,
label=NULL, loading_state=NULL, placement=NULL,
position=NULL, style=NULL, width=NULL, withArrow=NULL,
wrapLines=NULL, zIndex=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Any react node that should trigger tooltip}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{arrowSize}{Numeric. Arrow size in px}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Any color from theme.colors, defaults to gray in light color scheme and dark in dark colors scheme}

\item{delay}{Numeric. Close delay in ms, 0 to disable delay}

\item{disabled}{Logical. True to disable tooltip}

\item{gutter}{Numeric. Spacing between element and popper in px}

\item{label}{Character. Tooltip content}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{placement}{A value equal to: "center", "end", "start". Placement relative to reference element}

\item{position}{A value equal to: "right", "center", "left", "apart". Position relative to reference element}

\item{style}{Named list. Inline style override}

\item{width}{Numeric | a value equal to: "auto". Tooltip width in px or auto}

\item{withArrow}{Logical. Renders arrow if true}

\item{wrapLines}{Logical. Allow multiline tooltip content}

\item{zIndex}{Numeric. Popper z-index}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

