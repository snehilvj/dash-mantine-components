% Auto-generated: do not edit by hand
\name{segmentedControl}

\alias{segmentedControl}

\title{SegmentedControl component}

\description{
Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
}

\usage{
segmentedControl(id=NULL, class_name=NULL, color=NULL, data=NULL,
fullWidth=NULL, radius=NULL, size=NULL, style=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{color}{Character | a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark}

\item{data}{List of lists containing elements 'label', 'value'.
those elements have the following types:
  - label (character; required): the option's label
  - value (character; required): option's values. Data based on which controls are rendered}

\item{fullWidth}{Logical. True if component should have 100\% width}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Border-radius from theme or number to set border-radius in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Controls font-size, paddings and height}

\item{style}{Named list. Inline style override}

\item{value}{Character. Current selected value}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

