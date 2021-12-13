% Auto-generated: do not edit by hand
\name{segmentedControl}

\alias{segmentedControl}

\title{SegmentedControl component}

\description{
Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
}

\usage{
segmentedControl(id=NULL, className=NULL, color=NULL, data=NULL,
fullWidth=NULL, loading_state=NULL, radius=NULL, size=NULL,
style=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark}

\item{data}{List of lists containing elements 'label', 'value'.
those elements have the following types:
  - label (character; required): the option's label
  - value (character; required): option's values. Data based on which controls are rendered}

\item{fullWidth}{Logical. True if component should have 100\% width}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Border-radius from theme or number to set border-radius in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Controls font-size, paddings and height}

\item{style}{Named list. Inline style override}

\item{value}{Character. Current selected value}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

