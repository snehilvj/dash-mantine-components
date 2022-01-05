% Auto-generated: do not edit by hand
\name{navbar}

\alias{navbar}

\title{Navbar component}

\description{
Navbar. For more information, see: https://mantine.dev/core/app-shell/
}

\usage{
navbar(children=NULL, id=NULL, class_name=NULL, fixed=NULL,
height=NULL, hidden=NULL, hiddenBreakpoint=NULL,
padding=NULL, position=NULL, style=NULL, width=NULL,
zIndex=NULL)
}

\arguments{
\item{children}{Character. Navbar content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{fixed}{Logical. Changes position to fixed, controlled by AppShell component if rendered inside}

\item{height}{Character | numeric. Navbar height}

\item{hidden}{Logical. Set to true to hide breakpoint at hiddenBreakpoint}

\item{hiddenBreakpoint}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Breakpoint at which navbar will be hidden if hidden prop is true}

\item{padding}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Navbar padding from theme.spacing or number to set padding in px}

\item{position}{Lists containing elements 'top', 'left', 'bottom', 'right'.
those elements have the following types:
  - top (numeric; optional)
  - left (numeric; optional)
  - bottom (numeric; optional)
  - right (numeric; optional). Control top, left, right or bottom position values, controlled by AppShell component if rendered inside}

\item{style}{Named list. Inline style override}

\item{width}{Named list. Navbar width with breakpoints}

\item{zIndex}{Numeric. z-index}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

