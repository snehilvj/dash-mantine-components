% Auto-generated: do not edit by hand
\name{image}

\alias{image}

\title{Image component}

\description{
Image with optional placeholder for loading and error state. For more information, see: https://mantine.dev/core/image/
}

\usage{
image(id=NULL, alt=NULL, caption=NULL, class_name=NULL, fit=NULL,
height=NULL, radius=NULL, src=NULL, style=NULL, width=NULL,
withPlaceholder=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{alt}{Character. Image alt text, used as title for placeholder if image was not loaded}

\item{caption}{Character. Image figcaption, displayed bellow image}

\item{class_name}{Character. Often used with CSS to style elements with common properties}

\item{fit}{A value equal to: "cover", "contain". Image object-fit property}

\item{height}{Character | numeric. Image height, defaults to original image height adjusted to given width}

\item{radius}{A value equal to: "xs", "sm", "md", "lg", "xl" | numeric. Predefined border-radius value from theme.radius or number for border-radius in px}

\item{src}{Character. Image src}

\item{style}{Named list. Inline style override}

\item{width}{Character | numeric. Image width, defaults to 100\%, cannot exceed 100\%}

\item{withPlaceholder}{Logical. Enable placeholder when image is loading and when image fails to load}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

