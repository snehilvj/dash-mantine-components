# AUTO GENERATED FILE - DO NOT EDIT

image <- function(id=NULL, alt=NULL, caption=NULL, class_name=NULL, fit=NULL, height=NULL, radius=NULL, src=NULL, style=NULL, width=NULL, withPlaceholder=NULL) {
    
    props <- list(id=id, alt=alt, caption=caption, class_name=class_name, fit=fit, height=height, radius=radius, src=src, style=style, width=width, withPlaceholder=withPlaceholder)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Image',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'alt', 'caption', 'class_name', 'fit', 'height', 'radius', 'src', 'style', 'width', 'withPlaceholder'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
