% Auto-generated: do not edit by hand
\name{divider}

\alias{divider}

\title{Divider component}

\description{
Horizontal line with optional label or vertical divider. For more information, see: https://mantine.dev/core/divider/
}

\usage{
divider(id=NULL, class_name=NULL, color=NULL, label=NULL,
labelPosition=NULL, orientation=NULL, size=NULL, style=NULL,
variant=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{color}{Character | a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme}

\item{label}{Character. Adds text after line in horizontal orientation}

\item{labelPosition}{A value equal to: "right", "left", "center". Label position}

\item{orientation}{A value equal to: "horizontal", "vertical". Line orientation}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Sets height in horizontal orientation and width in vertical}

\item{style}{Named list. Inline style override}

\item{variant}{A value equal to: "dashed", "dotted", "solid". Divider borderStyle}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

