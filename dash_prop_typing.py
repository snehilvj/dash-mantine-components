"""
This file is automatically loaded at build time to generate custom Python types.

For more info see PRs https://github.com/plotly/dash/pull/3152 and https://github.com/plotly/dash/pull/3220
See also dash docs:  https://dash.plotly.com/dash-3-for-component-developers#custom-typing-generator

"""

def style_prop(type_info, component_name, prop_name):
    """All generic style props accept scalar values or a dict for responsive styles."""
    return "typing.Union[str, NumberType, typing.Dict[str, typing.Any]]"


def generate_mantine_union(type_info, *_):
    """
    Use for Mantine types such as MantineSize which is defined as literals only.
    If a prop like `size` allows arbitrary strings, it needs to be included separately.
    For example `size?: MantineSize | (string & {})

    """
    raw = type_info.get("raw", "")

    # Extract literal values
    literals = [
        item["value"]
        for item in type_info.get("value", [])
        if item.get("name") == "literal"
    ]

    parts = []

    # Allow numbers if explicitly present
    if "number" in raw:
        parts.append("NumberType")

    # Allow arbitrary strings ONLY if (string & {}) is added to Mantine type
    allows_string = "(string & {})" in raw or "string & {}" in raw

    if allows_string:
        parts.append("str")

    # Add Literal[...] hints
    if literals:
        literal_part = ", ".join(
            f'typing.Literal["{v}"]' for v in literals
        )
        parts.append(literal_part)

    if not parts:
        parts.append("typing.Any")

    return f"typing.Union[{', '.join(parts)}]"


def generate_mantine_string_union(type_info, *_):
    """
    Use for Mantine types that incude string & {}  (like MantineColor)
    """
    raw = type_info.get("raw", "")

    # 1. Extract literal values from union
    literals = [
        item["value"]
        for item in type_info.get("value", [])
        if item.get("name") == "literal"
    ]

    parts = ["str"]

    # 2. Allow numbers if present in TS union
    if "number" in raw:
        parts.append("NumberType")


    # 3. Add Literal[...] hints
    if literals:
        literal_part = ", ".join(
            f'typing.Literal["{v}"]' for v in literals
        )
        parts.append(literal_part)

    if not parts:
        parts.append("typing.Any")

    return f"typing.Union[{', '.join(parts)}]"


def combobox_data_prop(*_):
    return (
        "typing.Sequence["
        "typing.Union[str, typing.Dict[str, typing.Any]]"
        "]"
    )

def number_range_prop(*_):
    """ handles types like [number, number]"""
    return "typing.Sequence[NumberType]"


def list_of_strings_prop(*_):
    """ handles types like [MantineColor, MantineColor] """
    return "typing.Sequence[string]"


custom_props = {

    "*": {
        "size": generate_mantine_union,
        "color":   generate_mantine_string_union,
        "radius": generate_mantine_string_union,
        "shadow": generate_mantine_string_union,

    },
    "Autocomplete": {
        "data": combobox_data_prop,
    },
    "MultiSelect": {
        "data": combobox_data_prop,
    },
    "Select": {
        "data": combobox_data_prop,
    },
    "TagsInput": {
        "data": combobox_data_prop,
    },
    "RangeSlider": {
        "value": number_range_prop,
        "domain": number_range_prop,
    },
    "Slider": {
        "domain": number_range_prop,
    },
    "BubbleChart": {
        "range": number_range_prop,
    },
    "AreaChart": {
        "splitColors": list_of_strings_prop,
    },
}
