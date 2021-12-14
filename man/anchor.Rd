% Auto-generated: do not edit by hand
\name{anchor}

\alias{anchor}

\title{Anchor component}

\description{
Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
}

\usage{
anchor(children=NULL, id=NULL, align=NULL, className=NULL,
color=NULL, gradient=NULL, href=NULL, inherit=NULL,
inline=NULL, lineClamp=NULL, size=NULL, style=NULL,
target=NULL, transform=NULL, variant=NULL, weight=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{align}{A value equal to: "left", "right", "center". Sets text-align css property}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{A value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Text color from theme}

\item{gradient}{Lists containing elements 'from', 'to', 'deg'.
those elements have the following types:
  - from (character; required)
  - to (character; required)
  - deg (numeric; optional). Controls gradient settings in gradient variant only}

\item{href}{Character. href}

\item{inherit}{Logical. Inherit font properties from parent element}

\item{inline}{Logical. Sets line-height to 1 for centering}

\item{lineClamp}{Numeric. CSS -webkit-line-clamp property}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined font-size from theme.fontSizes}

\item{style}{Named list. Inline style override}

\item{target}{A value equal to: "_blank", "_self". Target}

\item{transform}{A value equal to: "capitalize", "uppercase", "lowercase". Sets text-transform css property}

\item{variant}{A value equal to: "link", "gradient", "text". Link or text variant}

\item{weight}{A value equal to: "normal", "bold", "bolder", "lighter", "initial", "inherit" | numeric. Sets font-weight css property}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

