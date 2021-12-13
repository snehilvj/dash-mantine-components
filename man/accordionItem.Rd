% Auto-generated: do not edit by hand
\name{accordionItem}

\alias{accordionItem}

\title{AccordionItem component}

\description{
Utility component to pass to Accordion. For more information, see: https://mantine.dev/core/accordion/
}

\usage{
accordionItem(children=NULL, id=NULL, className=NULL, description=NULL,
label=NULL, loading_state=NULL, style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Accordion content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{description}{Character. Accordion description}

\item{label}{Character. Accordion label}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

