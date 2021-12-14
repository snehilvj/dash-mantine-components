# AUTO GENERATED FILE - DO NOT EDIT

prism <- function(id=NULL, className=NULL, code=NULL, colorScheme=NULL, copiedLabel=NULL, copyLabel=NULL, highlightLines=NULL, language=NULL, noCopy=NULL, style=NULL, withLineNumbers=NULL) {
    
    props <- list(id=id, className=className, code=code, colorScheme=colorScheme, copiedLabel=copiedLabel, copyLabel=copyLabel, highlightLines=highlightLines, language=language, noCopy=noCopy, style=style, withLineNumbers=withLineNumbers)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Prism',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'code', 'colorScheme', 'copiedLabel', 'copyLabel', 'highlightLines', 'language', 'noCopy', 'style', 'withLineNumbers'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
