% Auto-generated: do not edit by hand
\name{segmentedControl}

\alias{segmentedControl}

\title{SegmentedControl component}

\description{
Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
}

\usage{
segmentedControl(id=NULL, className=NULL, color=NULL, data=NULL,
fullWidth=NULL, radius=NULL, size=NULL, style=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark}

\item{data}{Data based on which controls are rendered}

\item{fullWidth}{Logical. True if component should have 100\% width}

\item{radius}{Border-radius from theme or number to set border-radius in px}

\item{size}{Controls font-size, paddings and height}

\item{style}{Named list. Inline style override}

\item{value}{Character. Current selected value}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

