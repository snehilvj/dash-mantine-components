% Auto-generated: do not edit by hand
\name{alert}

\alias{alert}

\title{Alert component}

\description{
Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/
}

\usage{
alert(children=NULL, id=NULL, className=NULL, color=NULL,
duration=NULL, loading_state=NULL, show=NULL, style=NULL,
title=NULL, withCloseButton=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Alert message}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Alert title and line colors from theme}

\item{duration}{Numeric. Duration in milliseconds after which the Alert dismisses itself.}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{show}{Logical. Whether to show the alert}

\item{style}{Named list. Inline style override}

\item{title}{Character. Optional alert title}

\item{withCloseButton}{Logical. Display close button}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

