---
title: DMC Components Quick Reference
description: Quick lookup for DMC components, key props, and common events.
tags: components, quick-reference, props, events, dmc
---

## DMC Components Quick Reference

> Dash Mantine Components v2.x (Mantine 8.x)

## Component Categories

### Buttons

| Component | Key Props | Common Events | Description |
| --- | --- | --- | --- |
| Button | `variant`, `color`, `size`, `radius`, `leftSection`, `rightSection`, `loading`, `fullWidth` | `n_clicks` | Standard button with variants (filled, light, outline, subtle, transparent, white, gradient) |
| ActionIcon | `variant`, `color`, `size`, `radius`, `loading` | `n_clicks` | Icon button with same variants as Button |
| CopyButton | `value`, `timeout` | - | Button that copies text to clipboard |
| CustomCopyButton | `value`, `timeout`, `children` | `copied` | Customizable copy button (use with render function) |

**Button Variants**: `filled`, `light`, `outline`, `subtle`, `transparent`, `white`, `gradient`

### Charts

| Component | Key Props | Events |
| --- | --- | --- |
| LineChart | `data`, `dataKey`, `series`, `curveType`, `withLegend`, `withTooltip`, `withDots` | - |
| AreaChart | `data`, `dataKey`, `series`, `curveType`, `withLegend`, `withTooltip`, `withDots` | - |
| BarChart | `data`, `dataKey`, `series`, `orientation`, `withLegend`, `withTooltip` | - |
| DonutChart | `data`, `chartLabel`, `tooltipDataSource`, `strokeWidth` | - |
| PieChart | `data`, `tooltipDataSource`, `strokeWidth` | - |
| ScatterChart | `data`, `dataKey`, `series`, `withLegend`, `withTooltip` | - |
| BubbleChart | `data`, `dataKey`, `series`, `range`, `withLegend`, `withTooltip` | - |
| CompositeChart | `data`, `dataKey`, `series`, `withLegend`, `withTooltip` | - |
| RadarChart | `data`, `dataKey`, `series`, `withPolarGrid`, `withPolarAngleAxis` | - |
| Sparkline | `data`, `curveType`, `color`, `fillOpacity`, `strokeWidth`, `w`, `h` | - |

### Combobox (Select/Autocomplete)

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| Select | `data`, `value`, `searchable`, `clearable`, `limit`, `maxDropdownHeight` | `value` | Single select dropdown |
| MultiSelect | `data`, `value`, `searchable`, `clearable`, `limit`, `maxDropdownHeight` | `value` | Multiple selection dropdown |
| Autocomplete | `data`, `value`, `limit`, `maxDropdownHeight` | `value` | Input with autocomplete |
| TagsInput | `value`, `maxTags`, `splitChars`, `clearable` | `value` | Multi-value text input |

**New Combobox Props (v2.5+):**

- `selectFirstOptionOnDropdownOpen` - Automatically select first option when dropdown opens
- `openOnFocus` - Open dropdown when input receives focus

### Data Display

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| Accordion | `value`, `variant`, `chevronPosition`, `multiple` | `value` | Collapsible content panels |
| Avatar | `src`, `alt`, `radius`, `size`, `color` | - | User avatar with fallback |
| Badge | `variant`, `color`, `size`, `radius`, `leftSection`, `rightSection` | - | Small label badge |
| Card | `padding`, `radius`, `withBorder`, `shadow` | - | Container for content |
| Carousel | `withIndicators`, `withControls`, `loop`, `slideSize`, `slideGap` | - | Image/content carousel |
| Image | `src`, `alt`, `fit`, `radius`, `fallbackSrc` | - | Image with fallback |
| Indicator | `label`, `color`, `size`, `position`, `offset`, `inline`, `processing` | - | Notification indicator |
| Kbd | - | - | Keyboard key display |
| NumberFormatter | `value`, `thousandSeparator`, `decimalSeparator`, `prefix`, `suffix` | - | Formatted number display |
| Spoiler | `maxHeight`, `showLabel`, `hideLabel` | - | Collapsible content |
| ThemeIcon | `variant`, `color`, `size`, `radius` | - | Icon with theme styling |
| Timeline | `active`, `bulletSize`, `lineWidth`, `color` | - | Vertical timeline |

### Date Pickers

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| DateInput | `value`, `minDate`, `maxDate`, `valueFormat` | `value` | Date input field |
| DatePicker | `value`, `type`, `minDate`, `maxDate`, `numberOfColumns` | `value` | Inline date picker |
| DatePickerInput | `value`, `type`, `minDate`, `maxDate`, `valueFormat` | `value` | Date picker with dropdown |
| DateTimePicker | `value`, `minDate`, `maxDate`, `valueFormat` | `value` | Date and time picker |
| MonthPickerInput | `value`, `minDate`, `maxDate`, `valueFormat` | `value` | Month picker |
| YearPickerInput | `value`, `minDate`, `maxDate` | `value` | Year picker |
| TimeInput | `value`, `withSeconds` | `value` | Time input field |
| TimePicker | `value`, `withSeconds` | `value` | Inline time picker |
| TimeGrid | `value`, `format`, `withMinutes`, `withSeconds` | `value` | Time grid picker |
| MiniCalendar | `value`, `type` | `value` | Compact calendar |

**Date Picker Types**: `default`, `multiple`, `range`

### Feedback

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| Alert | `title`, `color`, `variant`, `icon`, `withCloseButton` | - | Notification message |
| Loader | `size`, `color`, `type` | - | Loading spinner |
| LoadingOverlay | `visible`, `loaderProps`, `overlayProps` | - | Full overlay loader |
| Notification | `title`, `message`, `color`, `icon`, `withCloseButton`, `loading` | - | Notification card |
| Overlay | `color`, `opacity`, `blur`, `center` | - | Semi-transparent overlay |
| Progress | `value`, `size`, `radius`, `color`, `striped`, `animated` | - | Progress bar |
| RingProgress | `sections`, `thickness`, `size`, `label` | - | Circular progress |
| SemiCircleProgress | `value`, `size`, `thickness`, `color`, `label` | - | Semi-circle progress |
| Skeleton | `height`, `width`, `radius`, `visible`, `animate` | - | Loading placeholder |

**Loader Types**: `bars`, `oval`, `dots`, `default`

### Inputs

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| TextInput | `label`, `description`, `error`, `placeholder`, `leftSection`, `rightSection`, `value`, `disabled`, `required` | `value`, `n_blur`, `n_submit` | Single-line text input |
| Textarea | `label`, `description`, `error`, `placeholder`, `value`, `disabled`, `required`, `autosize`, `minRows`, `maxRows` | `value`, `n_blur`, `n_submit` | Multi-line text input |
| NumberInput | `label`, `description`, `error`, `value`, `min`, `max`, `step`, `decimalScale`, `prefix`, `suffix` | `value` | Number input with controls |
| PasswordInput | `label`, `description`, `error`, `placeholder`, `value`, `visible` | `value` | Password input with toggle |
| Checkbox | `label`, `description`, `checked`, `indeterminate`, `color`, `size`, `radius` | `checked` | Checkbox input |
| Switch | `label`, `description`, `checked`, `color`, `size`, `onLabel`, `offLabel` | `checked` | Toggle switch |
| Radio/RadioGroup | `value`, `label`, `description`, `data` | `value` | Radio button group |
| Chip | `checked`, `variant`, `color`, `size`, `radius` | `checked` | Selection chip |
| Slider | `value`, `min`, `max`, `step`, `marks`, `label`, `color`, `size` | `value` | Range slider |
| Rating | `value`, `count`, `color`, `size`, `emptySymbol`, `fullSymbol` | `value` | Star rating input |
| PinInput | `value`, `length`, `type`, `mask`, `oneTimeCode` | `value` | PIN/OTP input |
| ColorInput | `value`, `format`, `withPicker`, `swatches` | `value` | Color input field |
| ColorPicker | `value`, `format`, `swatches`, `swatchesPerRow` | `value` | Color picker |
| JsonInput | `value`, `formatOnBlur`, `validationError`, `deserialize`, `serialize` | `value` | JSON input with validation |
| SegmentedControl | `value`, `data`, `fullWidth`, `color`, `size`, `radius` | `value` | Segmented button group |
| RichTextEditor | `value`, `labels` | `value` | Rich text editor |
| Fieldset | `legend`, `variant` | - | Fieldset wrapper |
| InputWrapper | `label`, `description`, `error`, `required`, `withAsterisk` | - | Input wrapper with label |

### Layout

| Component | Key Props | Description |
| --- | --- | --- |
| Group | `justify`, `align`, `gap`, `wrap`, `grow`, `preventGrowOverflow` | Horizontal flex layout |
| Stack | `align`, `justify`, `gap` | Vertical flex layout |
| Flex | `direction`, `justify`, `align`, `wrap`, `gap` | Flexible layout container |
| Grid | `gutter`, `grow`, `columns` | CSS Grid layout |
| Grid.Col | `span`, `offset`, `order` | Grid column |
| SimpleGrid | `cols`, `spacing`, `verticalSpacing` | Equal-width grid |
| Container | `size`, `fluid` | Centered container with max-width |
| Center | `inline` | Centered content |
| AspectRatio | `ratio` | Maintains aspect ratio |
| Space | `h`, `w` | Empty space |
| AppShell | `header`, `navbar`, `aside`, `footer`, `padding` | Application shell layout |
| AppShellHeader | `height` | Header section |
| AppShellNavbar | `width`, `breakpoint`, `collapsed` | Navbar section |
| AppShellAside | `width`, `breakpoint`, `collapsed` | Aside section |
| AppShellFooter | `height` | Footer section |
| AppShellMain | - | Main content section |
| ScrollArea | `h`, `w`, `offsetScrollbars`, `type` | Scrollable container |
| ScrollAreaAutoheight | `minHeight`, `maxHeight`, `offsetScrollbars` | Auto-height scrollable container (v2.3+) |

### Miscellaneous

| Component | Key Props | Description |
| --- | --- | --- |
| Box | - | Div with style props |
| Paper | `p`, `radius`, `withBorder`, `shadow` | Card/panel container |
| Divider | `orientation`, `size`, `color`, `label`, `labelPosition` | Visual divider |
| Collapse | `in`, `transitionDuration`, `transitionTimingFunction` | Collapsible content |
| ScrollArea | `type`, `offsetScrollbars`, `scrollbarSize`, `scrollHideDelay` | Custom scrollbar area |
| VisuallyHidden | - | Screen reader only content |
| DirectionProvider | `dir` | RTL/LTR text direction wrapper (v2.3+) |

### Navigation

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| Anchor | `href`, `underline` | `n_clicks` | Link with styles |
| NavLink | `label`, `description`, `leftSection`, `rightSection`, `active`, `variant`, `color` | `n_clicks` | Navigation link |
| Breadcrumbs | `separator` | - | Breadcrumb navigation |
| Burger | `opened`, `size`, `color` | `n_clicks` | Hamburger menu icon |
| Tabs | `value`, `variant`, `color`, `orientation`, `keepMounted` | `value` | Tab navigation |
| Tabs.List | - | - | Tab list container |
| Tabs.Tab | `value`, `leftSection`, `rightSection` | - | Individual tab |
| Tabs.Panel | `value` | - | Tab panel content |
| Stepper | `active`, `orientation`, `iconSize`, `color`, `completedIcon`, `progressIcon` | `active` | Step indicator |
| Stepper.Step | `label`, `description`, `icon`, `completedIcon`, `progressIcon`, `color`, `loading` | - | Individual step |
| Pagination | `total`, `value`, `siblings`, `boundaries`, `withEdges`, `withControls` | `value` | Page navigation |
| Tree | `data`, `selectOnClick`, `clearSelectionOnOutsideClick` | - | Tree structure |
| TableOfContents | `links`, `variant`, `active` | `active` | Auto-generated table of contents (v2.5+) |

**NavLink Variants**: `filled`, `light`, `subtle`

### Overlay

| Component | Key Props | Events | Description |
| --- | --- | --- | --- |
| Modal | `opened`, `onClose`, `title`, `size`, `centered`, `overlayProps`, `withCloseButton` | `opened` | Modal dialog |
| Drawer | `opened`, `onClose`, `title`, `position`, `size`, `overlayProps`, `withCloseButton` | `opened` | Slide-out drawer |
| Tooltip | `label`, `position`, `withArrow`, `color`, `offset` | - | Hover tooltip |
| Popover | `opened`, `position`, `width`, `withArrow`, `shadow`, `clickOutsideEvents` | `opened` | Popover dropdown |
| Menu | `opened`, `closeOnItemClick`, `trigger`, `shadow`, `width` | - | Dropdown menu |
| Menu.Target | - | - | Menu trigger |
| Menu.Dropdown | - | - | Menu dropdown |
| Menu.Item | `leftSection`, `rightSection`, `color` | `n_clicks` | Menu item |
| HoverCard | `width`, `shadow`, `position`, `withArrow`, `openDelay`, `closeDelay` | - | Hover card |
| Affix | `position`, `zIndex` | - | Fixed position element |

**Overlay Positions**: `top`, `right`, `bottom`, `left`, `top-start`, `top-end`, `right-start`, `right-end`, `bottom-start`, `bottom-end`, `left-start`, `left-end`

### Typography

| Component | Key Props | Description |
| --- | --- | --- |
| Text | `size`, `fw`, `fs`, `td`, `tt`, `c`, `truncate`, `lineClamp` | Text with styles |
| Title | `order` (1-6), `size`, `fw`, `ta`, `c` | Heading (h1-h6) |
| Code | `block`, `color` | Inline code |
| CodeHighlight | `code`, `language`, `withCopyButton` | Code block with syntax |
| Blockquote | `cite`, `icon`, `color` | Blockquote |
| Mark | `color` | Highlighted text |
| Highlight | `highlight`, `highlightStyles` | Text highlighter |
| List | `type`, `spacing`, `size`, `center`, `icon` | Ordered/unordered list |
| Table | `data`, `striped`, `highlightOnHover`, `withTableBorder`, `withColumnBorders`, `withRowBorders`, `stickyHeader` | Data table |
| TypographyStylesProvider | - | Styles for HTML content |

**List Types**: `ordered`, `unordered`

## Common Prop Patterns

### Size (xs, sm, md, lg, xl)

Most components support size prop with predefined values:

```python
dmc.Button("Button", size="md")  # xs, sm, md, lg, xl
dmc.TextInput("Input", size="sm")
```

**Compact Sizes** (Button, ActionIcon):

```python
dmc.Button("Compact", size="compact-sm")  # compact-xs, compact-sm, compact-md, compact-lg, compact-xl
```

### Variant

Many components support variant prop for different visual styles:

**Button/ActionIcon**: `filled`, `light`, `outline`, `subtle`, `transparent`, `white`, `gradient`
**Badge**: `filled`, `light`, `outline`, `dot`, `transparent`
**Alert**: `filled`, `light`, `outline`
**NavLink**: `filled`, `light`, `subtle`

```python
dmc.Button("Filled", variant="filled")
dmc.Badge("Light", variant="light")
```

### Color

Color prop accepts:

- Theme color names: `blue`, `red`, `green`, etc.
- Color with shade: `blue.5`, `red.7`
- CSS color values: `#fff`, `rgba(0,0,0,0.5)`

```python
dmc.Button("Theme color", color="cyan")
dmc.Button("Shade", color="blue.5")
dmc.Button("CSS", color="#1D72FE")
```

### Radius (xs, sm, md, lg, xl)

Border radius for components with rounded corners:

```python
dmc.Button("Rounded", radius="xl")  # xs, sm, md, lg, xl
dmc.Paper(radius="md")  # or number in px
```

### Sections (Left/Right)

Many components support leftSection and rightSection for icons:

```python
dmc.Button("Save", leftSection=DashIconify(icon="..."))
dmc.TextInput(label="Email", leftSection=DashIconify(icon="..."))
dmc.Badge("New", rightSection=DashIconify(icon="..."))
```

### Input Common Props

All input components share these props:

- `label` - Input label
- `description` - Description below label
- `error` - Error message (shows red border)
- `required` - Shows asterisk, adds validation
- `disabled` - Disables input
- `placeholder` - Placeholder text
- `value` - Controlled value
- `withAsterisk` - Shows asterisk without required validation

```python
dmc.TextInput(
    label="Email",
    description="We'll never share your email",
    error="Invalid email",
    required=True,
    placeholder="your@email.com",
)
```

### Layout Props

Responsive prop values for layout components:

```python
dmc.SimpleGrid(
    cols={"base": 1, "sm": 2, "lg": 4},
    spacing={"base": "sm", "lg": "xl"}
)
dmc.Grid.Col(span={"base": 12, "sm": 6, "lg": 3})
```

## Styles API Reference

### Common Selectors

**Button Selectors**:

- `root` - Root button element
- `label` - Button text
- `section` - Left/right sections
- `inner` - Inner container
- `loader` - Loading spinner

**Input Selectors**:

- `root` - Root wrapper
- `wrapper` - Input wrapper
- `input` - Input element
- `label` - Label element
- `description` - Description text
- `error` - Error message
- `section` - Left/right sections

**Usage**:

```python
dmc.Button(
    "Styled",
    classNames={"root": "my-button", "label": "my-label"},
    styles={"root": {"backgroundColor": "red"}, "label": {"color": "white"}}
)
```

### Data Attributes

Components use data attributes for state-based styling:

**Button**:

- `data-disabled` - When disabled=True
- `data-loading` - When loading=True
- `data-block` - When fullWidth=True

**Checkbox/Radio**:

- `data-checked` - When checked=True
- `data-indeterminate` - When indeterminate=True

**Input**:

- `data-invalid` - When error prop is set

```css
.mantine-Button-root[data-loading="true"] {
    opacity: 0.6;
}
```

## Event Props

### Click Events

```python
dmc.Button("Click me", id="btn", n_clicks=0)

@callback(Output(...), Input("btn", "n_clicks"))
def handle_click(n):
    return f"Clicked {n} times"
```

### Value Changes

```python
dmc.TextInput(id="input", value="")

@callback(Output(...), Input("input", "value"))
def handle_change(value):
    return f"Value: {value}"
```

### Common Events

- `n_clicks` - Number of clicks (Button, ActionIcon, etc.)
- `value` - Current value (TextInput, Select, etc.)
- `checked` - Boolean state (Checkbox, Switch)
- `n_blur` - Focus lost count (TextInput)
- `n_submit` - Submit count (TextInput with Enter key)
- `opened` - Open state (Modal, Drawer, Popover)

### Dash-Specific Props

All components support:

- `id` - Component ID for callbacks
- `className` - CSS class name
- `style` - Inline styles dict
- `persistence` - State persistence
- `persistence_type` - `local`, `session`, `memory`
- `loading_state` - Dash loading state
- `debounce` - Debounce value changes (inputs)

## Component Composition

### Common Patterns

**Form Layout**:

```python
dmc.Stack([
    dmc.TextInput(label="Name", required=True),
    dmc.TextInput(label="Email", required=True),
    dmc.Textarea(label="Message", minRows=3),
    dmc.Group([
        dmc.Button("Submit", type="submit"),
        dmc.Button("Cancel", variant="outline")
    ], justify="flex-end")
])
```

**Card with Content**:

```python
dmc.Card([
    dmc.Image(src="...", h=160),
    dmc.Stack([
        dmc.Title("Title", order=3),
        dmc.Text("Description", c="dimmed", size="sm"),
        dmc.Button("Action", fullWidth=True, mt="md")
    ], p="md", gap="xs")
], withBorder=True, radius="md")
```

**Navigation Tabs**:

```python
dmc.Tabs([
    dmc.TabsList([
        dmc.TabsTab("Tab 1", value="1"),
        dmc.TabsTab("Tab 2", value="2"),
    ]),
    dmc.TabsPanel(value="1", children=[...]),
    dmc.TabsPanel(value="2", children=[...]),
], value="1")
```

**Modal Dialog**:

```python
dmc.Modal(
    opened=True,
    title="Modal Title",
    children=[
        dmc.Text("Modal content"),
        dmc.Group([
            dmc.Button("Close", onClick="..."),
            dmc.Button("Save", variant="filled")
        ], justify="flex-end", mt="md")
    ]
)
```

## Quick Tips

1. **Wrap layout with MantineProvider** - Required for theming and styling
2. **Use Grid/SimpleGrid for layouts** - More flexible than manual flex
3. **Leverage style props** - `mt`, `p`, `w`, `h`, `c`, `bg`, etc.
4. **Combine variant and color** - Create different visual styles
5. **Use sections for icons** - leftSection/rightSection for consistency
6. **Set IDs for callbacks** - Required for Dash interactivity
7. **Use responsive values** - `{"base": x, "sm": y, "lg": z}`
8. **Customize with Styles API** - Use classNames/styles for fine-grained control
9. **Apply debounce to inputs** - Reduce callback frequency
10. **Use persistence for state** - Remember user selections across refreshes
