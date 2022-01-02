# AUTO GENERATED FILE - DO NOT EDIT

grid <- function(children=NULL, id=NULL, align=NULL, class_name=NULL, columns=NULL, grow=NULL, gutter=NULL, justify=NULL, style=NULL) {
    
    props <- list(children=children, id=id, align=align, class_name=class_name, columns=columns, grow=grow, gutter=gutter, justify=justify, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Grid',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'align', 'class_name', 'columns', 'grow', 'gutter', 'justify', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
