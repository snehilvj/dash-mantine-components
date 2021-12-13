% Auto-generated: do not edit by hand
\name{drawer}

\alias{drawer}

\title{Drawer component}

\description{
Display overlay area at any side of the screen. For more information, see: https://mantine.dev/core/drawer/
}

\usage{
drawer(children=NULL, id=NULL, className=NULL,
hideCloseButton=NULL, loading_state=NULL,
noCloseOnClickOutside=NULL, noCloseOnEscape=NULL,
noFocusTrap=NULL, noOverlay=NULL, noScrollLock=NULL,
opened=NULL, overlayColor=NULL, overlayOpacity=NULL,
padding=NULL, position=NULL, size=NULL, title=NULL,
zIndex=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Drawer children components}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{hideCloseButton}{Logical. Hides close button, modal still can be closed with escape key and by clicking outside}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{noCloseOnClickOutside}{Logical. Disable onClock trigger for outside events}

\item{noCloseOnEscape}{Logical. Disable onClock trigger for escape key press}

\item{noFocusTrap}{Logical. Disables focus trap}

\item{noOverlay}{Logical. Removes overlay entirely}

\item{noScrollLock}{Logical. Disables scroll lock}

\item{opened}{Logical. If true drawer is mounted to the dom}

\item{overlayColor}{Character. Sets overlay color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme}

\item{overlayOpacity}{Numeric. Sets overlay opacity, defaults to 0.75 in light theme and to 0.85 in dark theme}

\item{padding}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Drawer body padding from theme or number for padding in px}

\item{position}{A value equal to: "right", "center", "left", "apart". Drawer body position}

\item{size}{A value equal to: "right", "center", "left", "apart" | character | numeric. Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100\% for width}

\item{title}{Character. Drawer title, displayed in header before close button}

\item{zIndex}{Numeric. Popper zIndex}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

