% Auto-generated: do not edit by hand
\name{notificationsProvider}

\alias{notificationsProvider}

\title{NotificationsProvider component}

\description{
Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
}

\usage{
notificationsProvider(children=NULL, id=NULL, autoClose=NULL, containerWidth=NULL,
limit=NULL, notificationMaxHeight=NULL, position=NULL,
zIndex=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{autoClose}{Numeric | a value equal to: false. Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function}

\item{containerWidth}{Numeric. Notification width in px, cannot exceed 100\%}

\item{limit}{Numeric. Maximum amount of notifications displayed at a time, other new notifications will be added to queue}

\item{notificationMaxHeight}{Numeric. Notification max-height in px, used for transitions}

\item{position}{A value equal to: "top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center". Notifications position}

\item{zIndex}{Numeric. Notifications container z-index}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

