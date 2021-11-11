% Auto-generated: do not edit by hand
\name{modal}

\alias{modal}

\title{Modal component}

\description{
Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/modal/
}

\usage{
modal(children=NULL, id=NULL, className=NULL,
hideCloseButton=NULL, opened=NULL, overflow=NULL,
padding=NULL, size=NULL, style=NULL, title=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content that should be centered vertically and horizontally}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{hideCloseButton}{Logical. Hides close button, modal still can be closed with escape key and by clicking outside}

\item{opened}{Logical. Mounts modal if true}

\item{overflow}{A value equal to: "inside", "outside". Control vertical overflow behavior}

\item{padding}{Modal padding from theme or number value for padding in px}

\item{size}{Numeric | character. Modal body width}

\item{style}{Named list. Inline style override}

\item{title}{Character. Modal title, displayed in header before close button}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

