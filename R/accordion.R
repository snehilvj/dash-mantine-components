# AUTO GENERATED FILE - DO NOT EDIT

accordion <- function(children=NULL, id=NULL, class_name=NULL, disableIconRotation=NULL, iconPosition=NULL, multiple=NULL, offsetIcon=NULL, state=NULL) {
    
    props <- list(children=children, id=id, class_name=class_name, disableIconRotation=disableIconRotation, iconPosition=iconPosition, multiple=multiple, offsetIcon=offsetIcon, state=state)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Accordion',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'class_name', 'disableIconRotation', 'iconPosition', 'multiple', 'offsetIcon', 'state'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
