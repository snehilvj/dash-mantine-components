# AUTO GENERATED FILE - DO NOT EDIT

text <- function(children=NULL, id=NULL, align=NULL, class_name=NULL, color=NULL, gradient=NULL, inherit=NULL, inline=NULL, lineClamp=NULL, size=NULL, style=NULL, transform=NULL, variant=NULL, weight=NULL) {
    
    props <- list(children=children, id=id, align=align, class_name=class_name, color=color, gradient=gradient, inherit=inherit, inline=inline, lineClamp=lineClamp, size=size, style=style, transform=transform, variant=variant, weight=weight)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Text',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'align', 'class_name', 'color', 'gradient', 'inherit', 'inline', 'lineClamp', 'size', 'style', 'transform', 'variant', 'weight'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
