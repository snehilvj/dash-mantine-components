% Auto-generated: do not edit by hand
\name{textInput}

\alias{textInput}

\title{TextInput component}

\description{
Custom input with label and description. For more information, see: https://mantine.dev/core/text-input/
}

\usage{
textInput(id=NULL, className=NULL, description=NULL, disabled=NULL,
error=NULL, label=NULL, loading_state=NULL, multiline=NULL,
placeholder=NULL, radius=NULL, required=NULL, size=NULL,
style=NULL, type=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{description}{Character. Input description, displayed after label}

\item{disabled}{Logical. The component can show it is currently unable to be interacted with}

\item{error}{Character. Displays error message after input}

\item{label}{Character. Input label, displayed before input}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{multiline}{Logical. Will input have multiple lines?}

\item{placeholder}{Character. Placeholder, displayed when date is not selected}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Input border-radius from theme or number to set border-radius in px}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Input size}

\item{style}{Named list. Inline style override}

\item{type}{A value equal to: "number", "text", "password". The type of control to render.}

\item{value}{A list of or a singular dash component, string or number. Input value}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

