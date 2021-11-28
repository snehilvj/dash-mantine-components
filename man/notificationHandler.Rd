% Auto-generated: do not edit by hand
\name{notificationHandler}

\alias{notificationHandler}

\title{NotificationHandler component}

\description{
Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
}

\usage{
notificationHandler(id=NULL, task=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{task}{Lists containing elements 'command', 'id', 'props'.
those elements have the following types:
  - command (a value equal to: "hide", "show", "update"; required)
  - id (character; required)
  - props (optional): . props has the following type: lists containing elements 'color', 'style', 'title', 'loading', 'message', 'autoclose', 'disallowclose'.
those elements have the following types:
  - color (character; optional)
  - style (named list; optional)
  - title (a list of or a singular dash component, string or number; optional)
  - loading (logical; optional)
  - message (a list of or a singular dash component, string or number; optional)
  - autoclose (numeric | a value equal to: false; optional)
  - disallowclose (logical; optional). Task for notification handler along with notification props}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

