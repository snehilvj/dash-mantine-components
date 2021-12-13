# AUTO GENERATED FILE - DO NOT EDIT

accordionItem <- function(children=NULL, id=NULL, className=NULL, description=NULL, label=NULL, loading_state=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, description=description, label=label, loading_state=loading_state, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AccordionItem',
        namespace = 'dash_mantine_components',
        propNames = c('children', 'id', 'className', 'description', 'label', 'loading_state', 'style'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
