% Auto-generated: do not edit by hand
\name{rangeSlider}

\alias{rangeSlider}

\title{RangeSlider component}

\description{
Capture user feedback from a range of values
}

\usage{
rangeSlider(id=NULL, className=NULL, color=NULL, labelAlwaysOn=NULL,
marks=NULL, max=NULL, min=NULL, minRange=NULL, radius=NULL,
size=NULL, step=NULL, style=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: 'dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'. Slider color}

\item{labelAlwaysOn}{Logical. If true label will be not be hidden when user stops dragging}

\item{marks}{List of lists containing elements 'label', 'value'.
those elements have the following types:
  - label (character; required): mark's label
  - value (numeric; required): mark's values. Marks which will be placed on the track}

\item{max}{Numeric. Maximum possible value}

\item{min}{Numeric. Minimal possible value}

\item{minRange}{Numeric. Minimal range interval}

\item{radius}{A value equal to: 'xs', 'sm', 'md', 'lg', 'xl' | numeric. Track border-radius from theme or number to set border-radius in px}

\item{size}{A value equal to: 'xs', 'sm', 'md', 'lg', 'xl'. Predefined track and thumb size, number to set sizes in px}

\item{step}{Numeric. Number by which value will be incremented/decremented with thumb drag and arrows}

\item{style}{Named list. Inline style override}

\item{value}{List of numerics. Current value for controlled slider}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

