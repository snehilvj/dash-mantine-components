% Auto-generated: do not edit by hand
\name{accordion}

\alias{accordion}

\title{Accordion component}

\description{
Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
}

\usage{
accordion(children=NULL, id=NULL, className=NULL,
disableIconRotation=NULL, iconPosition=NULL,
loading_state=NULL, multiple=NULL, offsetIcon=NULL,
state=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. <AccordionItem /> components only}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{disableIconRotation}{Logical. Should icon rotation be disabled}

\item{iconPosition}{A value equal to: "right", "left". Change icon position: left or right}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{multiple}{Logical. Allow multiple items to be opened at the same time}

\item{offsetIcon}{Logical. Should icon be offset with padding, applicable only when iconPosition is left}

\item{state}{List with named elements and values of type logical. Controlled state (controls opened state of accordion items)}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

