# AUTO GENERATED FILE - DO NOT EDIT

grid <- function(children=NULL, id=NULL, align=NULL, className=NULL, columns=NULL, grow=NULL, gutter=NULL, justify=NULL, loading_state=NULL, style=NULL) {
    
    props <- list(children=children, id=id, align=align, className=className, columns=columns, grow=grow, gutter=gutter, justify=justify, loading_state=loading_state, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Grid',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'align', 'className', 'columns', 'grow', 'gutter', 'justify', 'loading_state', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
