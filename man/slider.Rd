% Auto-generated: do not edit by hand
\name{slider}

\alias{slider}

\title{Slider component}

\description{
Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
}

\usage{
slider(id=NULL, className=NULL, color=NULL, drag_value=NULL,
labelAlwaysOn=NULL, marks=NULL, max=NULL, min=NULL,
radius=NULL, size=NULL, step=NULL, style=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{Slider color}

\item{drag_value}{Numeric. Current drag value for controlled slider}

\item{labelAlwaysOn}{Logical. If true label will be not be hidden when user stops dragging}

\item{marks}{List of lists containing elements 'label', 'value'.
those elements have the following types:
  - label (character; required): the option's label
  - value (numeric; required): option's values. Marks which will be placed on the track}

\item{max}{Numeric. Maximum possible value}

\item{min}{Numeric. Minimal possible value}

\item{radius}{Track border-radius from theme or number to set border-radius in px}

\item{size}{Predefined track and thumb size, number to set sizes in px}

\item{step}{Numeric. Number by which value will be incremented/decremented with thumb drag and arrows}

\item{style}{Named list. Inline style override}

\item{value}{Numeric. Current value for controlled slider}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

