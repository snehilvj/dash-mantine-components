# AUTO GENERATED FILE - DO NOT EDIT

accordionItem <- function(children=NULL, description=NULL, label=NULL) {
    
    props <- list(children=children, description=description, label=label)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AccordionItem',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'description', 'label'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
