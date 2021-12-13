# AUTO GENERATED FILE - DO NOT EDIT

skeleton <- function(children=NULL, id=NULL, circle=NULL, height=NULL, loading_state=NULL, radius=NULL, visible=NULL, width=NULL) {
    
    props <- list(children=children, id=id, circle=circle, height=height, loading_state=loading_state, radius=radius, visible=visible, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Skeleton',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'circle', 'height', 'loading_state', 'radius', 'visible', 'width'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
