---
title: DMC Date Pickers Guide
description: Component selection and usage patterns for DMC date pickers and calendars.
tags: date-picker, dateinput, datepickerinput, calendar, dmc
---

## DMC Date Pickers Guide

Complete reference for date picker components in Dash Mantine Components.

## Component Selection

### When to Use Each Component

**DatePicker** - Inline calendar without input field

- Embedded date selection in forms or dashboards
- Visual date browsing
- No text input needed

**DatePickerInput** - Input field with dropdown calendar

- Standard date input with calendar popup
- User can only select from calendar (no typing)
- Clean, controlled input experience

**DateInput** - Free-form input with optional calendar

- User can type dates directly
- Calendar as optional helper
- Best for power users

**MiniCalendar** - Compact inline calendar (v2.3+)

- Minimal footprint for sidebar widgets
- Same selection API as DatePicker
- Ideal for dashboard widgets and compact UIs

## MiniCalendar (v2.3+)

Compact calendar component with minimal footprint:

```python
import dash_mantine_components as dmc
from dash import Input, Output, callback

# Basic usage
dmc.MiniCalendar(id="mini-calendar")

# With default value
dmc.MiniCalendar(
    id="mini-calendar",
    value="2025-01-15"
)

# Multiple selection
dmc.MiniCalendar(
    type="multiple",
    value=["2025-01-15", "2025-01-20"]
)

# Range selection
dmc.MiniCalendar(
    type="range",
    value=["2025-01-15", "2025-01-20"]
)

@callback(
    Output("output", "children"),
    Input("mini-calendar", "value")
)
def update(date):
    return f"Selected: {date}"
```

**When to use MiniCalendar instead of DatePicker:**

- Sidebar widgets with limited space
- Dashboard date selectors
- When you want a more compact visual appearance

## DatePicker

### Basic Usage

Inline calendar component for date selection:

```python
import dash_mantine_components as dmc
from dash import Input, Output, callback

dmc.DatePicker(id="date-picker")

@callback(
    Output("output", "children"),
    Input("date-picker", "value")
)
def update(date):
    return f"Selected: {date}"  # Format: "YYYY-MM-DD"
```

### Selection Types

**Single Date (default):**

```python
dmc.DatePicker(
    value="2025-02-15",  # String format: "YYYY-MM-DD"
    allowDeselect=True   # Allow clicking to deselect
)
```

**Multiple Dates:**

```python
dmc.DatePicker(
    type="multiple",
    value=["2025-02-15", "2025-02-20", "2025-02-25"]  # List of dates
)
```

**Date Range:**

```python
dmc.DatePicker(
    type="range",
    value=["2025-02-01", "2025-02-28"],  # [start, end]
    allowSingleDateInRange=True          # Allow single-date ranges
)
```

### Configuration

**Initial Display:**

```python
dmc.DatePicker(
    defaultDate="2025-06-01",  # Month to display initially
    level="year",              # Start at year/decade level
    maxLevel="year"            # Don't allow drilling to decade
)
```

**Date Constraints:**

```python
dmc.DatePicker(
    minDate="2025-01-01",
    maxDate="2025-12-31"
)
```

**Week Settings:**

```python
dmc.DatePicker(
    firstDayOfWeek=0,        # 0=Sunday, 6=Saturday (default: 1=Monday)
    weekendDays=[5, 6],      # Friday and Saturday
    withWeekNumbers=True,    # Show week numbers
    hideWeekdays=True        # Hide weekday names
)
```

## DatePickerInput

### Basic Usage

Input field with calendar dropdown:

```python
from datetime import datetime
import dash_mantine_components as dmc

dmc.DatePickerInput(
    id="date-input",
    label="Select Date",
    description="Choose a date from the calendar",
    value=datetime.now().date(),  # Can use datetime objects or strings
    minDate=datetime(2020, 1, 1).date(),
    w=250
)
```

### Value Formats

**Display Format:**

```python
dmc.DatePickerInput(
    value="2025-02-15",
    valueFormat="MMMM DD, YYYY",  # Display: "February 15, 2025"
    # Other formats:
    # "DD-MM-YYYY"  → "15-02-2025"
    # "ddd, MMM D"  → "Sat, Feb 15"
)
```

**Callback Value:**
Always returns string in "YYYY-MM-DD" format regardless of display format.

### Selection Modes

**Single Date:**

```python
dmc.DatePickerInput(
    type="default",
    value="2025-02-15",
    clearable=True  # Show clear button
)
```

**Multiple Dates:**

```python
dmc.DatePickerInput(
    type="multiple",
    value=["2025-02-15", "2025-02-20"],
    placeholder="Select multiple dates",
    clearable=True
)
```

**Date Range:**

```python
dmc.DatePickerInput(
    type="range",
    value=["2025-02-01", "2025-02-15"],
    labelSeparator=" to "  # Customize range separator
)
```

### Dropdown Type

**Popover (default):**

```python
dmc.DatePickerInput(
    dropdownType="popover",
    popoverProps={
        "position": "bottom-start",
        "shadow": "md"
    }
)
```

**Modal:**

```python
dmc.DatePickerInput(
    dropdownType="modal",
    modalProps={
        "title": "Select Date",
        "centered": True
    }
)
```

### Multiple Columns

```python
dmc.DatePickerInput(
    type="range",
    numberOfColumns=2,  # Show 2 months side-by-side
    w=500
)
```

## DateInput

### Basic Usage

Free-form input with calendar helper:

```python
dmc.DateInput(
    id="date-input",
    label="Enter Date",
    description="Type or select a date",
    placeholder="YYYY-MM-DD",
    w=300
)
```

### Key Differences from DatePickerInput

**Manual Entry:**

- User can type dates directly
- Input validates and formats on blur
- Use `fixOnBlur=True` (default) to revert invalid input

**Value Format:**

```python
dmc.DateInput(
    value="2025-02-15",       # Internal: YYYY-MM-DD
    valueFormat="DD/MM/YYYY"  # Display: 15/02/2025
)
```

### Configuration

```python
dmc.DateInput(
    clearable=True,           # Show clear button
    allowDeselect=True,       # Allow deselecting in calendar
    fixOnBlur=True,          # Revert to valid date on blur
    minDate="2025-01-01",
    maxDate="2025-12-31"
)
```

## DatesProvider

Global configuration for all date components:

```python
import dash_mantine_components as dmc

dmc.DatesProvider(
    children=[
        dmc.DatePickerInput(label="Date 1"),
        dmc.DatePickerInput(label="Date 2"),
        dmc.DateInput(label="Date 3"),
    ],
    settings={
        "locale": "fr",              # Locale (requires dayjs locale)
        "firstDayOfWeek": 0,        # 0=Sunday
        "weekendDays": [0, 6],      # Saturday and Sunday
        "consistentWeeks": True     # Always show 6 weeks
    }
)
```

### Localization Setup

**Load dayjs locale:**

```python
from dash import Dash

app = Dash(
    external_scripts=[
        "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/dayjs.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/locale/fr.min.js"
    ]
)
```

**Apply locale:**

```python
dmc.DatesProvider(
    settings={"locale": "fr"},
    children=[...]
)
```

## Format Strings

Uses [dayjs format](https://day.js.org/docs/en/display/format):

| Format | Output | Description |
|--------|--------|-------------|
| `YYYY-MM-DD` | 2025-02-15 | ISO format |
| `DD/MM/YYYY` | 15/02/2025 | European |
| `MM/DD/YYYY` | 02/15/2025 | US format |
| `MMMM DD, YYYY` | February 15, 2025 | Full month |
| `MMM D, YY` | Feb 15, 25 | Short |
| `ddd, MMM D` | Sat, Feb 15 | With weekday |

## Advanced Features

### Disabled Dates

**List of dates:**

```python
dmc.DatePicker(
    disabledDates=["2024-11-06", "2024-11-07", "2024-11-08"]
)
```

**Function (requires JavaScript):**

```python
# Python:
dmc.DatePicker(
    disabledDates={"function": "excludeWeekends"}
)
```

```javascript
// assets/functions.js:
var dmcfuncs = window.dashMantineFunctions = window.dashMantineFunctions || {};

dmcfuncs.excludeWeekends = function(dateStr) {
    const date = dayjs(dateStr);
    return date.day() === 0 || date.day() === 6;  // Disable Sat/Sun
}
```

### Custom Day Props

Apply props to specific days:

```python
dmc.DatePicker(
    getDayProps={"function": "highlightFridays"}
)
```

```javascript
dmcfuncs.highlightFridays = function(dateStr) {
    const d = dayjs(dateStr);
    if (d.day() === 5) {  // Friday
        return {
            style: {
                backgroundColor: 'var(--mantine-color-blue-light)',
                fontWeight: 700
            }
        };
    }
    return {};
}
```

### Custom Day Rendering

```python
dmc.DatePicker(
    renderDay={"function": "renderWithIndicator"}
)
```

```javascript
var dmc = window.dash_mantine_components;

dmcfuncs.renderWithIndicator = function(dateStr) {
    const day = dayjs(dateStr).date();
    return React.createElement(
        dmc.Indicator,
        {
            size: 9,
            color: "red",
            offset: -5,
            disabled: day !== 16  // Only show on 16th
        },
        React.createElement("div", null, day)
    );
}
```

### Error Handling

```python
from dash import callback, Input, Output

dmc.DatePickerInput(
    id="date-input",
    required=True,
    clearable=False
)

@callback(
    Output("date-input", "error"),
    Input("date-input", "value")
)
def validate(date):
    if not date:
        return "Date is required"

    # Custom validation
    from datetime import datetime
    selected = datetime.strptime(date, "%Y-%m-%d")
    if selected.weekday() in [5, 6]:  # Weekend
        return "Weekends not allowed"

    return ""
```

## Common Props

### All Components

- `firstDayOfWeek` - 0-6 (0=Sunday, default: 1=Monday)
- `hideOutsideDates` - Hide dates from other months
- `hideWeekdays` - Hide weekday row
- `weekendDays` - Array of weekend day indices [0, 6]
- `minDate` - Minimum selectable date (string)
- `maxDate` - Maximum selectable date (string)
- `numberOfColumns` - Columns to display side-by-side

### DatePickerInput & DateInput Only

- `label` - Input label
- `description` - Help text below label
- `error` - Error message
- `placeholder` - Placeholder text
- `clearable` - Show clear button
- `required` - Mark as required
- `disabled` - Disable input
- `valueFormat` - Display format (dayjs format string)
- `size` - Component size: "xs", "sm", "md", "lg", "xl"

### Label Formats

- `decadeLabelFormat` - Decade header (default: "YYYY")
- `yearLabelFormat` - Year header (default: "YYYY")
- `monthLabelFormat` - Month header (default: "MMMM YYYY")
- `yearsListFormat` - Years in picker (default: "YYYY")
- `monthsListFormat` - Months in picker (default: "MMM")
- `weekdayFormat` - Weekday names (default: "dd")

## Best Practices

1. **Choose the right component:**
   - DatePicker: Embedded/visual selection
   - DatePickerInput: Standard controlled input
   - DateInput: Power users who type dates

2. **Set constraints:**
   - Use `minDate`/`maxDate` to limit range
   - Disable invalid dates with `disabledDates`

3. **Format consistently:**
   - Use `valueFormat` for user-friendly display
   - Internal value is always "YYYY-MM-DD"

4. **Localize properly:**
   - Load dayjs locale scripts
   - Wrap in DatesProvider for global settings

5. **Handle validation:**
   - Set `error` prop for invalid states
   - Use callbacks for custom validation

6. **Accessibility:**
   - Always provide `label`
   - Use `description` for additional context
   - Mark required fields with `required`

7. **Mobile friendly:**
   - Use `dropdownType="modal"` for better mobile UX
   - Test on various screen sizes

## Common Patterns

### Range Selection with Presets

```python
dmc.DatePickerInput(
    type="range",
    label="Date Range",
    presets=[
        {"label": "Last 7 days", "value": calculate_last_n_days(7)},
        {"label": "Last 30 days", "value": calculate_last_n_days(30)},
        {"label": "This month", "value": calculate_this_month()},
    ]
)
```

### Conditional Date Constraints

```python
from dash import callback, Input, Output

dmc.DatePickerInput(id="start-date")
dmc.DatePickerInput(id="end-date")

@callback(
    Output("end-date", "minDate"),
    Input("start-date", "value")
)
def set_min_end_date(start):
    return start  # End date can't be before start
```

### Default to Today

```python
from datetime import datetime

dmc.DatePickerInput(
    value=datetime.now().date(),
    maxDate=datetime.now().date()  # Can't select future
)
```
