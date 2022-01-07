% Auto-generated: do not edit by hand
\name{inputWrapper}

\alias{inputWrapper}

\title{InputWrapper component}

\description{
Enhance custom inputs with label, error and description. For more information, see: https://mantine.dev/core/input-wrapper/
}

\usage{
inputWrapper(children=NULL, id=NULL, class_name=NULL, description=NULL,
error=NULL, label=NULL, required=NULL, size=NULL, style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Input that should be wrapped}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{description}{Character. Input description, displayed after label}

\item{error}{Character. Displays error message after input}

\item{label}{Character. Input label, displayed before input}

\item{required}{Logical. Adds red asterisk on the right side of label}

\item{size}{A value equal to: "xs", "sm", "md", "lg", "xl". Input size}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

