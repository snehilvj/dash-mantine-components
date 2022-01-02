% Auto-generated: do not edit by hand
\name{alert}

\alias{alert}

\title{Alert component}

\description{
Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/
}

\usage{
alert(children=NULL, id=NULL, class_name=NULL, color=NULL,
duration=NULL, hide=NULL, style=NULL, title=NULL,
withCloseButton=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Alert message}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Alert title and line colors from theme}

\item{duration}{Numeric. Duration in milliseconds after which the Alert dismisses itself.}

\item{hide}{Logical. Whether to hide the alert}

\item{style}{Named list. Inline style override}

\item{title}{Character. Optional alert title}

\item{withCloseButton}{Logical. Display close button}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

