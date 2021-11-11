% Auto-generated: do not edit by hand
\name{button}

\alias{button}

\title{Button component}

\description{
Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
}

\usage{
button(children=NULL, id=NULL, className=NULL, color=NULL,
compact=NULL, disabled=NULL, fullWidth=NULL, gradient=NULL,
loaderPosition=NULL, loading=NULL, n_clicks=NULL,
radius=NULL, size=NULL, style=NULL, type=NULL,
uppercase=NULL, variant=NULL)
}

\arguments{
\item{children}{Character. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{color}{Button color from theme}

\item{compact}{Logical. Reduces vertical and horizontal spacing}

\item{disabled}{Logical. The component can show it is currently unable to be interacted with}

\item{fullWidth}{Logical. Sets button width to 100\% of parent element}

\item{gradient}{Controls gradient settings in gradient variant only}

\item{loaderPosition}{A value equal to: "left", "right". Loader position relative to button label}

\item{loading}{Logical. Indicate loading state}

\item{n_clicks}{Numeric. An integer that represents the number of times that this element has been clicked on}

\item{radius}{Button border-radius from theme or number to set border-radius in px}

\item{size}{Predefined button size}

\item{style}{Named list. Inline style override}

\item{type}{A value equal to: "submit", "button", "reset". Button type attribute}

\item{uppercase}{Logical. Set text-transform to uppercase}

\item{variant}{A value equal to: "link", "filled", "outline", "light", "gradient", "white", "default". Controls button appearance}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

