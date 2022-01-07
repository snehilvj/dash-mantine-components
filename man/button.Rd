% Auto-generated: do not edit by hand
\name{button}

\alias{button}

\title{Button component}

\description{
Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
}

\usage{
button(children=NULL, id=NULL, class_name=NULL, color=NULL,
compact=NULL, disabled=NULL, fullWidth=NULL, gradient=NULL,
loaderPosition=NULL, loading=NULL, loading_state=NULL,
n_clicks=NULL, radius=NULL, size=NULL, style=NULL,
uppercase=NULL, variant=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Primary content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{color}{Character | a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange". Button color from theme}

\item{compact}{Logical. Reduces vertical and horizontal spacing}

\item{disabled}{Logical. The component can show it is currently unable to be interacted with}

\item{fullWidth}{Logical. Sets button width to 100\% of parent element}

\item{gradient}{Lists containing elements 'from', 'to', 'deg'.
those elements have the following types:
  - from (character; required)
  - to (character; required)
  - deg (numeric; optional). Controls gradient settings in gradient variant only}

\item{loaderPosition}{A value equal to: "left", "right". Loader position relative to button label}

\item{loading}{Logical. Indicate loading state}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{n_clicks}{Numeric. An integer that represents the number of times that this element has been clicked on}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Button border-radius from theme or number to set border-radius in px}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Predefined button size}

\item{style}{Named list. Inline style override}

\item{uppercase}{Logical. Set text-transform to uppercase}

\item{variant}{A value equal to: "link", "filled", "outline", "light", "gradient", "white", "default". Controls button appearance}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

