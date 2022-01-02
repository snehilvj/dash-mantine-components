# AUTO GENERATED FILE - DO NOT EDIT

spoiler <- function(children=NULL, id=NULL, class_name=NULL, hideLabel=NULL, initialState=NULL, loading_state=NULL, maxHeight=NULL, showLabel=NULL, style=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, hideLabel=hideLabel, initialState=initialState, loading_state=loading_state, maxHeight=maxHeight, showLabel=showLabel, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Spoiler',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'hideLabel', 'initialState', 'loading_state', 'maxHeight', 'showLabel', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
