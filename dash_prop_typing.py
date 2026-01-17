# This file is automatically loaded on build time to generate types.
# For more info see https://github.com/plotly/dash/pull/3152 and https://github.com/plotly/dash/pull/3220


def style_prop(type_info, component_name, prop_name):
    """All generic style props accept scalar values or a dict for responsive styles."""
    return "typing.Union[str, NumberType, typing.Dict[str, typing.Any]]"

custom_props = {
    "*": {
        # Visibility
        "hiddenFrom": lambda t, c, p: "typing.Union[str, Literal['xs','sm','md','lg','xl'], typing.Dict[str, typing.Any]]",
        "visibleFrom": lambda t, c, p: "typing.Union[ str, Literal['xs','sm','md','lg','xl'], typing.Dict[str, typing.Any]]",


        # Margin
        "m": style_prop,
        "my": style_prop,
        "mx": style_prop,
        "mt": style_prop,
        "mb": style_prop,
        "ms": style_prop,
        "me": style_prop,
        "ml": style_prop,
        "mr": style_prop,

        # Padding
        "p": style_prop,
        "py": style_prop,
        "px": style_prop,
        "pt": style_prop,
        "pb": style_prop,
        "ps": style_prop,
        "pe": style_prop,
        "pl": style_prop,
        "pr": style_prop,

        # Borders / Backgrounds / Colors
        "bd": style_prop,
        "bdrs": style_prop,
        "bg": lambda t, c, p: "typing.Union[str, Literal['blue','cyan','gray','green','indigo','lime','orange','pink','red','teal','violet','yellow','dark','grape'], typing.Dict[str, typing.Any]]",
        "c": lambda t, c, p: "typing.Union[str, Literal['blue','cyan','gray','green','indigo','lime','orange','pink','red','teal','violet','yellow','dark','grape'], typing.Dict[str, typing.Any]]",
        "opacity": style_prop,

        # Typography
        "ff": lambda t, c, p: "typing.Union[str, Literal['monospace','text','heading'], typing.Dict[str, typing.Any]]",
        "fz": lambda t, c, p: "typing.Union[str, NumberType, Literal['xs','sm','md','lg','xl','h1','h2','h3','h4','h5','h6'], typing.Dict[str, typing.Any]]",
        "fw": lambda t, c, p: "typing.Union[str, Literal['-moz-initial','inherit','initial','revert','revert-layer','unset','bold','normal','bolder','lighter'], NumberType, typing.Dict[str, typing.Any]]",
        "lts": style_prop,
        "ta": lambda t, c, p: "typing.Union[str, Literal['left','right','center','justify','start','end','match-parent','-moz-initial','inherit','initial','revert','revert-layer','unset','-webkit-match-parent'], typing.Dict[str, typing.Any]]",
        "lh": style_prop,
        "fs": lambda t, c, p: "typing.Union[str, Literal['normal','italic','oblique','-moz-initial','inherit','initial','revert','revert-layer','unset'], typing.Dict[str, typing.Any]]",
        "tt": lambda t, c, p: "typing.Union[str, Literal['none','capitalize','full-size-kana','full-width','lowercase','uppercase','-moz-initial','inherit','initial','revert','revert-layer','unset'], typing.Dict[str, typing.Any]]",
        "td": style_prop,

        # Sizing
        "w": style_prop,
        "miw": style_prop,
        "maw": style_prop,
        "h": style_prop,
        "mih": style_prop,
        "mah": style_prop,

        # Background
        "bgsz": style_prop,
        "bgp": style_prop,
        "bgr": lambda t, c, p: "typing.Union[str, Literal['-moz-initial','inherit','initial','revert','revert-layer','unset','no-repeat','repeat','repeat-x','repeat-y','round','space'], typing.Dict[str, typing.Any]]",
        "bga": lambda t, c, p: "typing.Union[str, Literal['-moz-initial','inherit','initial','revert','revert-layer','unset','fixed','local','scroll'], typing.Dict[str, typing.Any]]",

        # Layout
        "pos": lambda t, c, p: "typing.Union[str, Literal['-moz-initial','inherit','initial','revert','revert-layer','unset','fixed','-webkit-sticky','absolute','relative','static','sticky'], typing.Dict[str, typing.Any]]",
        "top": style_prop,
        "left": style_prop,
        "bottom": style_prop,
        "right": style_prop,
        "inset": style_prop,
        "display": lambda t, c, p: "typing.Union[str, Literal['flex','-moz-initial','inherit','initial','revert','revert-layer','unset','none','block','inline','run-in','-ms-flexbox','-ms-grid','-webkit-flex','flow','flow-root','grid','ruby','table','ruby-base','ruby-base-container','ruby-text','ruby-text-container','table-caption','table-cell','table-column','table-column-group','table-footer-group','table-header-group','table-row','table-row-group','-ms-inline-flexbox','-ms-inline-grid','-webkit-inline-flex','inline-block','inline-flex','inline-grid','inline-list-item','inline-table','contents','list-item'], typing.Dict[str, typing.Any]]",
        "flex": style_prop,
    }
}

#
# custom_imports = {
#     "typing": ["Union"],
#     "dash.development.base_component": ["NumberType"],
# }

# types props as any
#ignore_props = ["style"]