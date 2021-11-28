# AUTO GENERATED FILE - DO NOT EDIT

button <- function(children=NULL, id=NULL, className=NULL, color=NULL, compact=NULL, disabled=NULL, fullWidth=NULL, gradient=NULL, loaderPosition=NULL, loading=NULL, n_clicks=NULL, radius=NULL, size=NULL, style=NULL, uppercase=NULL, variant=NULL) {
    
    props <- list(children=children, id=id, className=className, color=color, compact=compact, disabled=disabled, fullWidth=fullWidth, gradient=gradient, loaderPosition=loaderPosition, loading=loading, n_clicks=n_clicks, radius=radius, size=size, style=style, uppercase=uppercase, variant=variant)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Button',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'color', 'compact', 'disabled', 'fullWidth', 'gradient', 'loaderPosition', 'loading', 'n_clicks', 'radius', 'size', 'style', 'uppercase', 'variant'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
