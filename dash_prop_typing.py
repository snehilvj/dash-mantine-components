"""
This file is automatically loaded at build time to generate custom Python types.

For more info see PRs https://github.com/plotly/dash/pull/3152 and https://github.com/plotly/dash/pull/3220
See also dash docs:  https://dash.plotly.com/dash-3-for-component-developers#custom-typing-generator

"""


def str_num_dict_prop(type_info, component_name, prop_name):
    """All generic style props accept scalar values or a dict for responsive styles."""
    return "typing.Union[str, NumberType, typing.Dict[str, typing.Any]]"


def str_num_prop(*_):
    return "typing.Union[str, NumberType]"


def str_prop(*_):
    return "typing.Optional[str]"


def size_prop(type_info, component_name, prop_name):
    str_or_num = [
        "Burger",
        "Container",
        "Divider",
        "Indicator",
        "Pagination",
        "Rating",
        "TableOfContents",
        "ThemeIcon",
        "Avatar",
        "RangeSlider",
        "Slider",
        "Box",
        "Modal",
        "Loader",
        "Progress",
        "ProgressRoot",
        "Title",
    ]
    num_only = [
        "RingProgress",
        "SemiCircleProgrss",
    ]
    if component_name in str_or_num:
        return "typing.Union[str, NumberType]"
    if component_name in num_only:
        return "typing.Optional[NumberType]"
    return "typing.Optional[str]"


def combobox_data_prop(*_):
    """
    Handles Select / MultiSelect / Autocomplete / TagsInput data props.
    """
    return "typing.Sequence[" "typing.Union[str, typing.Dict[str, typing.Any]]" "]"


def number_range_prop(*_):
    """Handles tuple-like numeric ranges such as [number, number]."""
    return "typing.Sequence[NumberType]"


def list_of_strings_prop(*_):
    """Handles arrays like [MantineColor, MantineColor]."""
    return "typing.Sequence[str]"


default_types = {
    "color": str_prop,
    "gridColor": str_prop,
    "iconColor": str_prop,
    "labelColor": str_prop,
    "radius": str_num_prop,
    "shadow": str_prop,
    "size": size_prop,
    "strokeColor": str_prop,
    "textColor": str_prop,
}


custom_props = {
    "*": default_types,
    "AppShell": {
        "padding": str_num_dict_prop,
        **default_types,
    },
    "AreaChart": {
        "splitColors": list_of_strings_prop,
        **default_types,
    },
    "Autocomplete": {
        "data": combobox_data_prop,
        **default_types,
    },
    "AvatarGroup": {
        "spacing": str_num_prop,
        **default_types,
    },
    "BarChart": {
        "barLabelColor": str_prop,
        "cursorFill": str_prop,
        **default_types,
    },
    "BubbleChart": {
        "range": number_range_prop,
        **default_types,
    },
    "Card": {
        "padding": str_num_prop,
        **default_types,
    },
    "Carousel": {
        "controlsOffset": str_num_prop,
        "slideGap": str_num_dict_prop,
        **default_types,
    },
    "CopyButton": {
        "copiedColor": str_prop,
        **default_types,
    },
    "MultiSelect": {
        "data": combobox_data_prop,
        **default_types,
    },
    "Modal": {
        "padding": str_num_prop,
        **default_types,
    },
    "NavLink": {
        "childrenOffset": str_num_prop,
        **default_types,
    },
    "RangeSlider": {
        "domain": number_range_prop,
        "value": number_range_prop,
        **default_types,
    },
    "RingProgress": {
        "rootColor": str_prop,
        **default_types,
    },
    "Select": {
        "data": combobox_data_prop,
        **default_types,
    },
    "SemiCircleProgrss": {
        "emptySegmentColor": str_prop,
        "filledSegmentColor": str_prop,
        **default_types,
    },
    "SimpleGrid": {
        "spacing": str_num_dict_prop,
        "verticalSpacing": str_num_dict_prop,
        **default_types,
    },
    "Slider": {
        "domain": number_range_prop,
        **default_types,
    },
    "Stepper": {
        "contentPadding": str_num_prop,
        **default_types,
    },
    "Table": {
        "VerticalSpacing": str_num_prop,
        "borderColor": str_prop,
        "highlightOnHoverColor": str_prop,
        "horizontalSpacing": str_num_prop,
        "stripedColor": str_prop,
        **default_types,
    },
    "TagsInput": {
        "data": combobox_data_prop,
        **default_types,
    },
}
