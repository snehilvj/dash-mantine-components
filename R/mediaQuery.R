# AUTO GENERATED FILE - DO NOT EDIT

mediaQuery <- function(children=NULL, id=NULL, inline=NULL, largerThan=NULL, query=NULL, smallerThan=NULL) {
    
    props <- list(children=children, id=id, inline=inline, largerThan=largerThan, query=query, smallerThan=smallerThan)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MediaQuery',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'inline', 'largerThan', 'query', 'smallerThan'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
