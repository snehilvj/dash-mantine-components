# AUTO GENERATED FILE - DO NOT EDIT

table <- function(id=NULL, caption=NULL, captionSide=NULL, className=NULL, columns=NULL, highlightOnHover=NULL, rows=NULL, striped=NULL, style=NULL) {
    
    props <- list(id=id, caption=caption, captionSide=captionSide, className=className, columns=columns, highlightOnHover=highlightOnHover, rows=rows, striped=striped, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Table',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'caption', 'captionSide', 'className', 'columns', 'highlightOnHover', 'rows', 'striped', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
