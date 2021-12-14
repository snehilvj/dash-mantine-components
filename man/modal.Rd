% Auto-generated: do not edit by hand
\name{modal}

\alias{modal}

\title{Modal component}

\description{
Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/modal/
}

\usage{
modal(children=NULL, id=NULL, centered=NULL, className=NULL,
closeOnClickOutside=NULL, hideCloseButton=NULL, opened=NULL,
overflow=NULL, overlayColor=NULL, overlayOpacity=NULL,
padding=NULL, radius=NULL, size=NULL, style=NULL,
title=NULL, zIndex=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content that should be centered vertically and horizontally}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{centered}{Logical. Controls if modal should be centered}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{closeOnClickOutside}{Logical. Should modal be closed when outside click was registered?}

\item{hideCloseButton}{Logical. Hides close button, modal still can be closed with escape key and by clicking outside}

\item{opened}{Logical. Mounts modal if true}

\item{overflow}{A value equal to: "inside", "outside". Control vertical overflow behavior}

\item{overlayColor}{Character. Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme}

\item{overlayOpacity}{Numeric. Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme}

\item{padding}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Modal padding from theme or number value for padding in px}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Modal padding from theme or number value for padding in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric | character. Modal body width}

\item{style}{Named list. Inline style override}

\item{title}{Character. Modal title, displayed in header before close button}

\item{zIndex}{Numeric. Popper zIndex}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

