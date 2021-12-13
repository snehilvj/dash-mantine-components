# AUTO GENERATED FILE - DO NOT EDIT

anchor <- function(children=NULL, id=NULL, align=NULL, className=NULL, color=NULL, gradient=NULL, href=NULL, inherit=NULL, inline=NULL, lineClamp=NULL, loading_state=NULL, size=NULL, style=NULL, target=NULL, transform=NULL, variant=NULL, weight=NULL) {
    
    props <- list(children=children, id=id, align=align, className=className, color=color, gradient=gradient, href=href, inherit=inherit, inline=inline, lineClamp=lineClamp, loading_state=loading_state, size=size, style=style, target=target, transform=transform, variant=variant, weight=weight)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Anchor',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'align', 'className', 'color', 'gradient', 'href', 'inherit', 'inline', 'lineClamp', 'loading_state', 'size', 'style', 'target', 'transform', 'variant', 'weight'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
