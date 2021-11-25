# AUTO GENERATED FILE - DO NOT EDIT

accordion <- function(children=NULL, id=NULL, className=NULL, disableIconRotation=NULL, iconPosition=NULL, initialItem=NULL, multiple=NULL) {
    
    props <- list(children=children, id=id, className=className, disableIconRotation=disableIconRotation, iconPosition=iconPosition, initialItem=initialItem, multiple=multiple)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Accordion',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'disableIconRotation', 'iconPosition', 'initialItem', 'multiple'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
