# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.types import NumberType  # noqa: F401
except ImportError:
    # Backwards compatibility for dash<=4.1.0
    if typing.TYPE_CHECKING:
        raise
    NumberType = typing.Union[  # noqa: F401
        typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
    ]

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]


class RichTextEditor(Component):
    """A RichTextEditor component.
RichTextEditor

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- aria-* (string; optional):
    Wild card aria attributes.

- attributes (boolean | number | string | dict | list; optional):
    Passes attributes to inner elements of a component.  See Styles
    API docs.

- bd (string | number | dict; optional):
    Border – Accepts CSS values or a dict for responsive styles.

- bdrs (string | number | dict; optional):
    Border radius – Accepts theme radius keys, CSS values, or a dict
    for responsive styles.

- bg (string | dict; optional):
    Background – Accepts theme color keys, CSS values, or a dict for
    responsive styles.

- bga (dict; optional):
    Background attachment – Accepts CSS values or a dict for
    responsive styles.

- bgp (string | number | dict; optional):
    Background position – Accepts CSS values or a dict for responsive
    styles.

- bgr (dict; optional):
    Background repeat – Accepts CSS values or a dict for responsive
    styles.

- bgsz (string | number | dict; optional):
    Background size – Accepts CSS values or a dict for responsive
    styles.

- bottom (string | number | dict; optional):
    Bottom offset – Accepts CSS values or a dict for responsive
    styles.

- c (string | dict; optional):
    Color – Accepts theme color keys, CSS values, or a dict for
    responsive styles.

- className (string; optional):
    Class added to the root element, if applicable.

- classNames (dict; optional):
    Adds custom CSS class names to inner elements of a component.  See
    Styles API docs.

- darkHidden (boolean; optional):
    Determines whether component should be hidden in dark color scheme
    with `display: none`.

- data-* (string; optional):
    Wild card data attributes.

- debounce (number | boolean; optional):
    If True, changes will be sent back to Dash only when losing focus.
    If False, data will be sent on every change. If a number, data
    will be sent when the value has been stable for that number of
    milliseconds.

- display (dict; optional):
    Display – Accepts CSS values or a dict for responsive styles.

- editable (boolean; optional):
    If True, the editor will be editable. True by default.

- extensions (list; optional):
    List of extensions to be loaded by the editor. Each item can be
    either a string with the extension name (e.g. 'Color') or an
    object with the extension name as key and options as value (e.g.
    {'TextAlign': {'types': ['heading', 'paragraph']}}).
    ['StarterKit',  'Underline',  'Link',  'Superscript',
    'Subscript',  'Highlight',  'Table',  'TableCell',  'TableHeader',
    'TableRow',  {'Placeholder': {'placeholder': 'Write or paste
    content here...'}},  {'TextAlign': {'types': ['heading',
    'paragraph']}},  'Color',  'TextStyle',  'Image'] by default.

- ff (string | dict; optional):
    Font family – Accepts CSS values or a dict for responsive styles.

- flex (string | number | dict; optional):
    Flex – Accepts CSS values or a dict for responsive styles.

- focus (number | boolean; optional):
    If True, the editor will be focused. If False, the editor will be
    blurred. Can also be a string ('start', 'end', 'all') or number to
    focus at a specific position. Positive values start at the
    beginning of the document - negative values at the end.

- fs (dict; optional):
    Font style – Accepts CSS values or a dict for responsive styles.

- fw (number | dict; optional):
    Font weight – Accepts CSS values or a dict for responsive styles.

- fz (string | number | dict; optional):
    Font size – Accepts theme font size keys, CSS values, or a dict
    for responsive styles.

- h (string | number | dict; optional):
    Height – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- hiddenFrom (string; optional):
    Breakpoint above which the component is hidden with `display:
    none`.

- html (string; optional):
    HTML string representation of the editor content. Affected by
    debounce. If both json and html are provided, json takes
    precedence.

- inset (string | number | dict; optional):
    Inset – Accepts CSS values or a dict for responsive styles.

- json (dict; optional):
    JSON object (ProseMirror) representation of the editor content.
    Affected by debounce. If both json and html are provide, json
    takes precedence.

- labels (dict; optional):
    Labels that are used in controls. If not set, default labels are
    used.

    `labels` is a dict with keys:

    - boldControlLabel (string; optional):
        RichTextEditor.Bold control aria-label.

    - hrControlLabel (string; optional):
        RichTextEditor.Hr control aria-label.

    - italicControlLabel (string; optional):
        RichTextEditor.Italic control aria-label.

    - underlineControlLabel (string; optional):
        RichTextEditor.Underline control aria-label.

    - strikeControlLabel (string; optional):
        RichTextEditor.Strike control aria-label.

    - clearFormattingControlLabel (string; optional):
        RichTextEditor.ClearFormatting control aria-label.

    - linkControlLabel (string; optional):
        RichTextEditor.Link control aria-label.

    - unlinkControlLabel (string; optional):
        RichTextEditor.Unlink control aria-label.

    - bulletListControlLabel (string; optional):
        RichTextEditor.BulletList control aria-label.

    - orderedListControlLabel (string; optional):
        RichTextEditor.OrderedList control aria-label.

    - h1ControlLabel (string; optional):
        RichTextEditor.H1 control aria-label.

    - h2ControlLabel (string; optional):
        RichTextEditor.H2 control aria-label.

    - h3ControlLabel (string; optional):
        RichTextEditor.H3 control aria-label.

    - h4ControlLabel (string; optional):
        RichTextEditor.H4 control aria-label.

    - h5ControlLabel (string; optional):
        RichTextEditor.H5 control aria-label.

    - h6ControlLabel (string; optional):
        RichTextEditor.H6 control aria-label.

    - blockquoteControlLabel (string; optional):
        RichTextEditor.Blockquote control aria-label.

    - alignLeftControlLabel (string; optional):
        RichTextEditor.AlignLeft control aria-label.

    - alignCenterControlLabel (string; optional):
        RichTextEditor.AlignCenter control aria-label.

    - alignRightControlLabel (string; optional):
        RichTextEditor.AlignRight control aria-label.

    - alignJustifyControlLabel (string; optional):
        RichTextEditor.AlignJustify control aria-label.

    - codeControlLabel (string; optional):
        RichTextEditor.Code control aria-label.

    - codeBlockControlLabel (string; optional):
        RichTextEditor.CodeBlock control aria-label.

    - subscriptControlLabel (string; optional):
        RichTextEditor.Subscript control aria-label.

    - superscriptControlLabel (string; optional):
        RichTextEditor.Superscript control aria-label.

    - colorPickerControlLabel (string; optional):
        RichTextEditor.ColorPicker control aria-label.

    - unsetColorControlLabel (string; optional):
        RichTextEditor.UnsetColor control aria-label.

    - highlightControlLabel (string; optional):
        RichTextEditor.Highlight control aria-label.

    - undoControlLabel (string; optional):
        RichTextEditor.Undo control aria-label.

    - redoControlLabel (string; optional):
        RichTextEditor.Redo control aria-label.

    - sourceCodeControlLabel (string; optional):
        RichTextEditor.SourceCode control aria-label.

    - linkEditorInputLabel (string; optional):
        Aria-label for link editor url input.

    - linkEditorInputPlaceholder (string; optional):
        Placeholder for link editor url input.

    - linkEditorExternalLink (string; optional):
        Content of external button tooltip in link editor when the
        link was chosen to open in a new tab.

    - linkEditorInternalLink (string; optional):
        Content of external button tooltip in link editor when the
        link was chosen to open in the same tab.

    - linkEditorSave (string; optional):
        Save button content in link editor.

    - colorPickerCancel (string; optional):
        Cancel button title text in color picker control.

    - colorPickerClear (string; optional):
        Clear button title text in color picker control.

    - colorPickerColorPicker (string; optional):
        Color picker button title text in color picker control.

    - colorPickerPalette (string; optional):
        Palette button title text in color picker control.

    - colorPickerSave (string; optional):
        Save button title text in color picker control.

    - tasksControlLabel (string; optional):
        Aria-label for task list control.

    - tasksSinkLabel (string; optional):
        Aria-label for task list sink task.

    - tasksLiftLabel (string; optional):
        Aria-label for task list lift task.

    - imageUploadControlLabel (string; optional):
        RichTextEditor.ImageUpload control aria-label.

    - tableInsertControlLabel (string; optional):
        RichTextEditor.TableInsert control aria-label.

    - tableInsertLabel (optional):
        A function to get RichTextEditor.TableInsert grid cell
        aria-label based on selected size.

    - tableDeleteControlLabel (string; optional):
        RichTextEditor.TableDelete control aria-label.

    - tableColumnBeforeControlLabel (string; optional):
        RichTextEditor.TableColumnBefore control aria-label.

    - tableColumnAfterControlLabel (string; optional):
        RichTextEditor.TableColumnAfter control aria-label.

    - tableColumnDeleteControlLabel (string; optional):
        RichTextEditor.TableColumnDelete control aria-label.

    - tableRowBeforeControlLabel (string; optional):
        RichTextEditor.TableRowBefore control aria-label.

    - tableRowAfterControlLabel (string; optional):
        RichTextEditor.TableRowAfter control aria-label.

    - tableRowDeleteControlLabel (string; optional):
        RichTextEditor.TableRowDelete control aria-label.

    - tableToggleHeaderRowControlLabel (string; optional):
        RichTextEditor.TableToggleHeaderRow control aria-label.

    - tableToggleHeaderColumnControlLabel (string; optional):
        RichTextEditor.TableToggleHeaderColumn control aria-label.

    - tableMergeCellsControlLabel (string; optional):
        RichTextEditor.TableMergeCells control aria-label.

    - tableSplitCellControlLabel (string; optional):
        RichTextEditor.TableSplitCell control aria-label.

    - detailsControlLabel (string; optional):
        RichTextEditor.Details control aria-label.

    - invisibleCharactersControlLabel (string; optional):
        RichTextEditor.InvisibleCharacters control aria-label.

    - colorControlLabel (string; optional):
        An string containing '{color}' (replaced with the color) to go
        the color control label.

    - colorPickerColorLabel (string; optional):
        An string containing '{color}' (replaced with the color) to go
        the color picker control label.

- left (string | number | dict; optional):
    Left offset – Accepts CSS values or a dict for responsive styles.

- lh (string | number | dict; optional):
    Line height – Accepts theme line height keys, CSS values, or a
    dict for responsive styles.

- lightHidden (boolean; optional):
    Determines whether component should be hidden in light color
    scheme with `display: none`.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer. For use with dash<3.

    `loading_state` is a dict with keys:

    - is_loading (boolean; required):
        Determines if the component is loading or not.

    - prop_name (string; required):
        Holds which property is loading.

    - component_name (string; required):
        Holds the name of the component that is loading.

- lts (string | number | dict; optional):
    Letter spacing – Accepts CSS values or a dict for responsive
    styles.

- m (string | number | dict; optional):
    Margin – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- mah (string | number | dict; optional):
    Maximum height – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- maw (string | number | dict; optional):
    Maximum width – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- mb (string | number | dict; optional):
    Margin bottom – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- me (string | number | dict; optional):
    Margin inline end – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- mie (number; optional):
    MarginInlineEnd, theme key: theme.spacing.

- mih (string | number | dict; optional):
    Minimum height – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- mis (number; optional):
    MarginInlineStart, theme key: theme.spacing.

- miw (string | number | dict; optional):
    Minimum width – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- ml (string | number | dict; optional):
    Margin left – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- mod (string | dict | list of string | dicts; optional):
    Element modifiers transformed into `data-` attributes.  For
    example: \"xl\" or {\"data-size\": \"xl\"}.  Can also be a list of
    strings or dicts for multiple modifiers.  Falsy values are
    removed.

- mr (string | number | dict; optional):
    Margin right – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- ms (string | number | dict; optional):
    Margin inline start – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- mt (string | number | dict; optional):
    Margin top – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- mx (string | number | dict; optional):
    Margin inline – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- my (string | number | dict; optional):
    Margin block – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- n_blur (number; optional):
    An integer that represents the number of times that this element
    has lost focus.

- opacity (string | number | dict; optional):
    Opacity – Accepts CSS values or a dict for responsive styles.

- p (string | number | dict; optional):
    Padding – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- pb (string | number | dict; optional):
    Padding bottom – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- pe (string | number | dict; optional):
    Padding inline end – Accepts theme spacing keys, CSS values, or a
    dict for responsive styles.

- persisted_props (list of strings; optional):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (string | number | boolean; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`. Note:
    The component must  have an `id` for persistence to work.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit.

- pie (number; optional):
    PaddingInlineEnd, theme key: theme.spacing.

- pis (number; optional):
    PaddingInlineStart, theme key: theme.spacing.

- pl (string | number | dict; optional):
    Padding left – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- pos (dict; optional):
    Position – Accepts CSS values or a dict for responsive styles.

- pr (string | number | dict; optional):
    Padding right – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- ps (string | number | dict; optional):
    Padding inline start – Accepts theme spacing keys, CSS values, or
    a dict for responsive styles.

- pt (string | number | dict; optional):
    Padding top – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- px (string | number | dict; optional):
    Padding inline – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- py (string | number | dict; optional):
    Padding block – Accepts theme spacing keys, CSS values, or a dict
    for responsive styles.

- right (string | number | dict; optional):
    Right offset – Accepts CSS values or a dict for responsive styles.

- selected (string; optional):
    Currently selected text. Affected by debounce.

- styles (boolean | number | string | dict | list; optional):
    Adds inline styles directly to inner elements of a component.  See
    Styles API docs.

- ta (dict; optional):
    Text align – Accepts CSS values or a dict for responsive styles.

- tabIndex (number; optional):
    tab-index.

- td (string | number | dict; optional):
    Text decoration – Accepts CSS values or a dict for responsive
    styles.

- toolbar (dict; optional):
    Toolbar property definition. Empty by default.

    `toolbar` is a dict with keys:

    - sticky (boolean; optional):
        Determines whether `position: sticky` styles should be added
        to the toolbar, `False` by default.

    - stickyOffset (string | number; optional):
        Sets top style to offset elements with fixed position, `0` by
        default.

    - controlsGroups (list of lists; optional):
        Groups of controls to be displayed in the toolbar. Each item
        can be either a string with the control name (e.g. 'Bold') or
        an object with the control name as key and options as value
        (e.g. {'Color': {'color': 'red'}}). Empty by default.

- top (string | number | dict; optional):
    Top offset – Accepts CSS values or a dict for responsive styles.

- tt (dict; optional):
    Text transform – Accepts CSS values or a dict for responsive
    styles.

- unstyled (boolean; optional):
    Remove all Mantine styling from the component.

- variant (a value equal to: 'default', 'subtle'; optional):
    Variant of the editor.

- visibleFrom (string; optional):
    Breakpoint below which the component is hidden with `display:
    none`.

- w (string | number | dict; optional):
    Width – Accepts theme spacing keys, CSS values, or a dict for
    responsive styles.

- withCodeHighlightStyles (boolean; optional):
    Determines whether code highlight styles should be added, True by
    default.

- withTypographyStyles (boolean; optional):
    Determines whether typography styles should be added, True by
    default."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'RichTextEditor'
    Extensions_StarterKit = TypedDict(
        "Extensions_StarterKit",
            {

        }
    )

    Extensions_Underline = TypedDict(
        "Extensions_Underline",
            {

        }
    )

    Extensions_Link = TypedDict(
        "Extensions_Link",
            {

        }
    )

    Extensions_Superscript = TypedDict(
        "Extensions_Superscript",
            {

        }
    )

    Extensions_Subscript = TypedDict(
        "Extensions_Subscript",
            {

        }
    )

    Extensions_Highlight = TypedDict(
        "Extensions_Highlight",
            {

        }
    )

    Extensions_TextAlign = TypedDict(
        "Extensions_TextAlign",
            {

        }
    )

    Extensions_TextStyle = TypedDict(
        "Extensions_TextStyle",
            {

        }
    )

    Extensions_Table = TypedDict(
        "Extensions_Table",
            {

        }
    )

    Extensions_TableCell = TypedDict(
        "Extensions_TableCell",
            {

        }
    )

    Extensions_TableRow = TypedDict(
        "Extensions_TableRow",
            {

        }
    )

    Extensions_TableHeader = TypedDict(
        "Extensions_TableHeader",
            {

        }
    )

    Extensions_Placeholder = TypedDict(
        "Extensions_Placeholder",
            {

        }
    )

    Extensions_Image = TypedDict(
        "Extensions_Image",
            {

        }
    )

    Extensions_BackgroundColor = TypedDict(
        "Extensions_BackgroundColor",
            {

        }
    )

    Extensions_FontFamily = TypedDict(
        "Extensions_FontFamily",
            {

        }
    )

    Extensions_FontSize = TypedDict(
        "Extensions_FontSize",
            {

        }
    )

    Extensions_LineHeight = TypedDict(
        "Extensions_LineHeight",
            {

        }
    )

    Extensions_Color = TypedDict(
        "Extensions_Color",
            {

        }
    )

    Extensions_CodeBlockLowlight = TypedDict(
        "Extensions_CodeBlockLowlight",
            {

        }
    )

    Extensions = TypedDict(
        "Extensions",
            {
            "StarterKit": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_StarterKit"]],
            "Underline": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Underline"]],
            "Link": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Link"]],
            "Superscript": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Superscript"]],
            "Subscript": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Subscript"]],
            "Highlight": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Highlight"]],
            "TextAlign": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_TextAlign"]],
            "TextStyle": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_TextStyle"]],
            "Table": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Table"]],
            "TableCell": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_TableCell"]],
            "TableRow": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_TableRow"]],
            "TableHeader": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_TableHeader"]],
            "Placeholder": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Placeholder"]],
            "Image": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Image"]],
            "BackgroundColor": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_BackgroundColor"]],
            "FontFamily": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_FontFamily"]],
            "FontSize": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_FontSize"]],
            "LineHeight": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_LineHeight"]],
            "Color": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_Color"]],
            "CodeBlockLowlight": NotRequired[typing.Dict[typing.Union[str, float, int], "Extensions_CodeBlockLowlight"]]
        }
    )

    Toolbar = TypedDict(
        "Toolbar",
            {
            "sticky": NotRequired[bool],
            "stickyOffset": NotRequired[typing.Union[str, NumberType]],
            "controlsGroups": NotRequired[typing.Sequence[typing.Sequence[typing.Union[Literal["Underline"], Literal["Link"], Literal["Superscript"], Literal["Subscript"], Literal["Highlight"], Literal["Color"], Literal["Bold"], Literal["Italic"], Literal["Strikethrough"], Literal["ClearFormatting"], Literal["Code"], Literal["H1"], Literal["H2"], Literal["H3"], Literal["H4"], Literal["H5"], Literal["H6"], Literal["CodeBlock"], Literal["Blockquote"], Literal["Hr"], Literal["BulletList"], Literal["OrderedList"], Literal["Unlink"], Literal["AlignLeft"], Literal["AlignCenter"], Literal["AlignJustify"], Literal["AlignRight"], Literal["Undo"], Literal["Redo"], Literal["ColorPicker"], Literal["UnsetColor"]]]]]
        }
    )

    Labels = TypedDict(
        "Labels",
            {
            "boldControlLabel": NotRequired[str],
            "hrControlLabel": NotRequired[str],
            "italicControlLabel": NotRequired[str],
            "underlineControlLabel": NotRequired[str],
            "strikeControlLabel": NotRequired[str],
            "clearFormattingControlLabel": NotRequired[str],
            "linkControlLabel": NotRequired[str],
            "unlinkControlLabel": NotRequired[str],
            "bulletListControlLabel": NotRequired[str],
            "orderedListControlLabel": NotRequired[str],
            "h1ControlLabel": NotRequired[str],
            "h2ControlLabel": NotRequired[str],
            "h3ControlLabel": NotRequired[str],
            "h4ControlLabel": NotRequired[str],
            "h5ControlLabel": NotRequired[str],
            "h6ControlLabel": NotRequired[str],
            "blockquoteControlLabel": NotRequired[str],
            "alignLeftControlLabel": NotRequired[str],
            "alignCenterControlLabel": NotRequired[str],
            "alignRightControlLabel": NotRequired[str],
            "alignJustifyControlLabel": NotRequired[str],
            "codeControlLabel": NotRequired[str],
            "codeBlockControlLabel": NotRequired[str],
            "subscriptControlLabel": NotRequired[str],
            "superscriptControlLabel": NotRequired[str],
            "colorPickerControlLabel": NotRequired[str],
            "unsetColorControlLabel": NotRequired[str],
            "highlightControlLabel": NotRequired[str],
            "undoControlLabel": NotRequired[str],
            "redoControlLabel": NotRequired[str],
            "sourceCodeControlLabel": NotRequired[str],
            "linkEditorInputLabel": NotRequired[str],
            "linkEditorInputPlaceholder": NotRequired[str],
            "linkEditorExternalLink": NotRequired[str],
            "linkEditorInternalLink": NotRequired[str],
            "linkEditorSave": NotRequired[str],
            "colorPickerCancel": NotRequired[str],
            "colorPickerClear": NotRequired[str],
            "colorPickerColorPicker": NotRequired[str],
            "colorPickerPalette": NotRequired[str],
            "colorPickerSave": NotRequired[str],
            "tasksControlLabel": NotRequired[str],
            "tasksSinkLabel": NotRequired[str],
            "tasksLiftLabel": NotRequired[str],
            "imageUploadControlLabel": NotRequired[str],
            "tableInsertControlLabel": NotRequired[str],
            "tableInsertLabel": NotRequired[typing.Any],
            "tableDeleteControlLabel": NotRequired[str],
            "tableColumnBeforeControlLabel": NotRequired[str],
            "tableColumnAfterControlLabel": NotRequired[str],
            "tableColumnDeleteControlLabel": NotRequired[str],
            "tableRowBeforeControlLabel": NotRequired[str],
            "tableRowAfterControlLabel": NotRequired[str],
            "tableRowDeleteControlLabel": NotRequired[str],
            "tableToggleHeaderRowControlLabel": NotRequired[str],
            "tableToggleHeaderColumnControlLabel": NotRequired[str],
            "tableMergeCellsControlLabel": NotRequired[str],
            "tableSplitCellControlLabel": NotRequired[str],
            "detailsControlLabel": NotRequired[str],
            "invisibleCharactersControlLabel": NotRequired[str],
            "colorControlLabel": NotRequired[str],
            "colorPickerColorLabel": NotRequired[str]
        }
    )

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": bool,
            "prop_name": str,
            "component_name": str
        }
    )


    def __init__(
        self,
        json: typing.Optional[dict] = None,
        html: typing.Optional[str] = None,
        selected: typing.Optional[str] = None,
        debounce: typing.Optional[typing.Union[NumberType, bool]] = None,
        n_blur: typing.Optional[NumberType] = None,
        focus: typing.Optional[typing.Union[NumberType, bool, Literal["start"], Literal["end"], Literal["all"]]] = None,
        editable: typing.Optional[bool] = None,
        variant: typing.Optional[Literal["default", "subtle"]] = None,
        extensions: typing.Optional[typing.Sequence[typing.Union[Literal["StarterKit"], Literal["Underline"], Literal["Link"], Literal["Superscript"], Literal["Subscript"], Literal["Highlight"], Literal["TextAlign"], Literal["TextStyle"], Literal["Table"], Literal["TableCell"], Literal["TableRow"], Literal["TableHeader"], Literal["Placeholder"], Literal["Image"], Literal["BackgroundColor"], Literal["FontFamily"], Literal["FontSize"], Literal["LineHeight"], Literal["Color"], Literal["CodeBlockLowlight"]]]] = None,
        toolbar: typing.Optional["Toolbar"] = None,
        withCodeHighlightStyles: typing.Optional[bool] = None,
        withTypographyStyles: typing.Optional[bool] = None,
        labels: typing.Optional["Labels"] = None,
        hiddenFrom: typing.Optional[str] = None,
        visibleFrom: typing.Optional[str] = None,
        mod: typing.Optional[typing.Union[str, dict, typing.Sequence[typing.Union[str, dict]]]] = None,
        m: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        my: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mx: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mt: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mb: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ms: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        me: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ml: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mr: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        p: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        py: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        px: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pt: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pb: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ps: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pe: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pl: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        pr: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bd: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bdrs: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bg: typing.Optional[typing.Union[str, dict]] = None,
        c: typing.Optional[typing.Union[str, dict]] = None,
        opacity: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ff: typing.Optional[typing.Union[str, dict]] = None,
        fz: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        fw: typing.Optional[typing.Union[NumberType, dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["bold"], Literal["normal"], Literal["bolder"], Literal["lighter"]]] = None,
        lts: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        ta: typing.Optional[typing.Union[dict, Literal["left"], Literal["right"], Literal["start"], Literal["end"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["-webkit-match-parent"], Literal["center"], Literal["justify"], Literal["match-parent"]]] = None,
        lh: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        fs: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["normal"], Literal["italic"], Literal["oblique"]]] = None,
        tt: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["capitalize"], Literal["full-size-kana"], Literal["full-width"], Literal["lowercase"], Literal["uppercase"]]] = None,
        td: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        w: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        miw: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        maw: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        h: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mih: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        mah: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bgsz: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bgp: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bgr: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["no-repeat"], Literal["repeat"], Literal["repeat-x"], Literal["repeat-y"], Literal["round"], Literal["space"]]] = None,
        bga: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["local"], Literal["scroll"]]] = None,
        pos: typing.Optional[typing.Union[dict, Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["fixed"], Literal["-webkit-sticky"], Literal["absolute"], Literal["relative"], Literal["static"], Literal["sticky"]]] = None,
        top: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        left: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        bottom: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        right: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        inset: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        display: typing.Optional[typing.Union[dict, Literal["flex"], Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["none"], Literal["block"], Literal["inline"], Literal["run-in"], Literal["-ms-flexbox"], Literal["-ms-grid"], Literal["-webkit-flex"], Literal["flow"], Literal["flow-root"], Literal["grid"], Literal["ruby"], Literal["table"], Literal["ruby-base"], Literal["ruby-base-container"], Literal["ruby-text"], Literal["ruby-text-container"], Literal["table-caption"], Literal["table-cell"], Literal["table-column"], Literal["table-column-group"], Literal["table-footer-group"], Literal["table-header-group"], Literal["table-row"], Literal["table-row-group"], Literal["-ms-inline-flexbox"], Literal["-ms-inline-grid"], Literal["-webkit-inline-flex"], Literal["inline-block"], Literal["inline-flex"], Literal["inline-grid"], Literal["inline-list-item"], Literal["inline-table"], Literal["contents"], Literal["list-item"]]] = None,
        flex: typing.Optional[typing.Union[str, NumberType, dict]] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        lightHidden: typing.Optional[bool] = None,
        darkHidden: typing.Optional[bool] = None,
        mis: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        mie: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        pis: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        pie: typing.Optional[typing.Union[NumberType, Literal["xs"], Literal["sm"], Literal["md"], Literal["lg"], Literal["xl"]]] = None,
        classNames: typing.Optional[dict] = None,
        styles: typing.Optional[typing.Any] = None,
        unstyled: typing.Optional[bool] = None,
        attributes: typing.Optional[typing.Any] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        persistence: typing.Optional[typing.Union[str, NumberType, bool]] = None,
        persisted_props: typing.Optional[typing.Sequence[str]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'aria-*', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'className', 'classNames', 'darkHidden', 'data-*', 'debounce', 'display', 'editable', 'extensions', 'ff', 'flex', 'focus', 'fs', 'fw', 'fz', 'h', 'hiddenFrom', 'html', 'inset', 'json', 'labels', 'left', 'lh', 'lightHidden', 'loading_state', 'lts', 'm', 'mah', 'maw', 'mb', 'me', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'mx', 'my', 'n_blur', 'opacity', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'pos', 'pr', 'ps', 'pt', 'px', 'py', 'right', 'selected', 'style', 'styles', 'ta', 'tabIndex', 'td', 'toolbar', 'top', 'tt', 'unstyled', 'variant', 'visibleFrom', 'w', 'withCodeHighlightStyles', 'withTypographyStyles']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'attributes', 'bd', 'bdrs', 'bg', 'bga', 'bgp', 'bgr', 'bgsz', 'bottom', 'c', 'className', 'classNames', 'darkHidden', 'data-*', 'debounce', 'display', 'editable', 'extensions', 'ff', 'flex', 'focus', 'fs', 'fw', 'fz', 'h', 'hiddenFrom', 'html', 'inset', 'json', 'labels', 'left', 'lh', 'lightHidden', 'loading_state', 'lts', 'm', 'mah', 'maw', 'mb', 'me', 'mie', 'mih', 'mis', 'miw', 'ml', 'mod', 'mr', 'ms', 'mt', 'mx', 'my', 'n_blur', 'opacity', 'p', 'pb', 'pe', 'persisted_props', 'persistence', 'persistence_type', 'pie', 'pis', 'pl', 'pos', 'pr', 'ps', 'pt', 'px', 'py', 'right', 'selected', 'style', 'styles', 'ta', 'tabIndex', 'td', 'toolbar', 'top', 'tt', 'unstyled', 'variant', 'visibleFrom', 'w', 'withCodeHighlightStyles', 'withTypographyStyles']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(RichTextEditor, self).__init__(**args)

setattr(RichTextEditor, "__init__", _explicitize_args(RichTextEditor.__init__))
