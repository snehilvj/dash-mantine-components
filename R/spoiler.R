# AUTO GENERATED FILE - DO NOT EDIT

spoiler <- function(children=NULL, id=NULL, hideLabel=NULL, initialState=NULL, loading_state=NULL, maxHeight=NULL, showLabel=NULL) {
    
    props <- list(children=children, id=id, hideLabel=hideLabel, initialState=initialState, loading_state=loading_state, maxHeight=maxHeight, showLabel=showLabel)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Spoiler',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'hideLabel', 'initialState', 'loading_state', 'maxHeight', 'showLabel'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
