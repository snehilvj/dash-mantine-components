# AUTO GENERATED FILE - DO NOT EDIT

export prism

"""
    prism(;kwargs...)

A Prism component.
Code highlight with Mantine theme colors and styles. For more information, see: https://mantine.dev/others/prism/
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks
- `class_name` (String; optional): Often used with CSS to style elements with common properties
- `code` (String; required): Code which will be highlighted
- `colorScheme` (a value equal to: "light", "dark"; optional): Force color scheme, defaults to theme.colorScheme
- `copiedLabel` (String; optional): Copy button tooltip in copied state
- `copyLabel` (String; optional): Copy button tooltip
- `highlightLines` (optional): Highlight line at given line number with color from theme.colors. highlightLines has the following type: Dict with Strings as keys and values of type lists containing elements 'color', 'label'.
Those elements have the following types:
  - `color` (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional)
  - `label` (String; optional)
- `language` (a value equal to: "markup", "bash", "clike", "c", "cpp", "css", "javascript", "jsx", "coffeescript", "actionscript", "css-extr", "diff", "git", "go", "graphql", "handlebars", "json", "less", "makefile", "markdown", "objectivec", "ocaml", "python", "reason", "sass", "scss", "sql", "stylus", "tsx", "typescript", "wasm", "yaml"; required): Programming language that should be highlighted
- `noCopy` (Bool; optional): True to remove copy to clipboard button
- `style` (Dict; optional): Inline style override
- `withLineNumbers` (Bool; optional): Display line numbers
"""
function prism(; kwargs...)
        available_props = Symbol[:id, :class_name, :code, :colorScheme, :copiedLabel, :copyLabel, :highlightLines, :language, :noCopy, :style, :withLineNumbers]
        wild_props = Symbol[]
        return Component("prism", "Prism", "dash_mantine_components", available_props, wild_props; kwargs...)
end

