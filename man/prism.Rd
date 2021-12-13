% Auto-generated: do not edit by hand
\name{prism}

\alias{prism}

\title{Prism component}

\description{
Code highlight with Mantine theme colors and styles. For more information, see: https://mantine.dev/others/prism/
}

\usage{
prism(id=NULL, className=NULL, code=NULL, colorScheme=NULL,
copiedLabel=NULL, copyLabel=NULL, highlightLines=NULL,
language=NULL, loading_state=NULL, noCopy=NULL, style=NULL,
withLineNumbers=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{code}{Character. Code which will be highlighted}

\item{colorScheme}{A value equal to: "light", "dark". Force color scheme, defaults to theme.colorScheme}

\item{copiedLabel}{Character. Copy button tooltip in copied state}

\item{copyLabel}{Character. Copy button tooltip}

\item{highlightLines}{List with named elements and values of type lists containing elements 'color', 'label'.
those elements have the following types:
  - color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional)
  - label (character; optional). Highlight line at given line number with color from theme.colors}

\item{language}{A value equal to: "markup", "bash", "clike", "c", "cpp", "css", "javascript", "jsx", "coffeescript", "actionscript", "css-extr", "diff", "git", "go", "graphql", "handlebars", "json", "less", "makefile", "markdown", "objectivec", "ocaml", "python", "reason", "sass", "scss", "sql", "stylus", "tsx", "typescript", "wasm", "yaml". Programming language that should be highlighted}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{noCopy}{Logical. True to remove copy to clipboard button}

\item{style}{Named list. Inline style override}

\item{withLineNumbers}{Logical. Display line numbers}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

