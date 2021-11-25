% Auto-generated: do not edit by hand
\name{card}

\alias{card}

\title{Card component}

\description{
Card.Section is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. For more information, see: https://mantine.dev/core/card/
}

\usage{
card(children=NULL, id=NULL, className=NULL, padding=NULL,
radius=NULL, shadow=NULL, withBorder=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Card content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{padding}{Predefined padding value from theme.spacing or number for padding in px}

\item{radius}{Predefined border-radius value from theme.radius or number for border-radius in px}

\item{shadow}{Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property}

\item{withBorder}{Logical. Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

