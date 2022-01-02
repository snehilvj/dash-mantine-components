% Auto-generated: do not edit by hand
\name{paper}

\alias{paper}

\title{Paper component}

\description{
Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
}

\usage{
paper(children=NULL, id=NULL, class_name=NULL, padding=NULL,
radius=NULL, shadow=NULL, withBorder=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Paper content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{padding}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Predefined padding value from theme.spacing or number for padding in px}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Predefined border-radius value from theme.radius or number for border-radius in px}

\item{shadow}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property}

\item{withBorder}{Logical. Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

