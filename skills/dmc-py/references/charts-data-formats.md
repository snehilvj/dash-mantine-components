---
title: DMC Charts Data Formats and Configuration
description: Data formats, series configuration, and common props across DMC chart components.
tags: charts, data-format, series, axis, dmc
---

## DMC Charts Data Formats and Configuration

Complete reference for data formats, series configuration, and common properties across all DMC chart components.

## Table of Contents

- [Data Format](#data-format)
- [Series Configuration](#series-configuration)
- [Common Chart Props](#common-chart-props)
- [Chart Types](#chart-types)
- [Axis Configuration](#axis-configuration)
- [Styling and Customization](#styling-and-customization)

## Data Format

### General Structure

All DMC charts accept data as a list of dictionaries:

```python
data = [
    {"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": 2452},
    {"date": "Mar 23", "Apples": 2756, "Oranges": 2103, "Tomatoes": 2402},
    {"date": "Mar 24", "Apples": 3322, "Oranges": 986, "Tomatoes": 1821},
]
```

**Key Requirements:**

- Each dictionary represents one data point
- Must have a `dataKey` field (e.g., "date", "month", "category")
- Additional fields correspond to series names

### Chart-Specific Data

**AreaChart, LineChart, BarChart:**

```python
data = [
    {"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200},
    {"month": "February", "Smartphones": 1900, "Laptops": 1200, "Tablets": 400},
]
```

**Waterfall Chart (BarChart type="waterfall"):**

```python
data = [
    {"item": "TaxRate", "value": 21, "color": "blue"},
    {"item": "Foreign inc.", "value": -15.5, "color": "teal"},
    {"item": "ETR", "value": 3.5, "color": "blue", "standalone": True},
]
```

**Split Area Chart (type="split"):**

```python
data = [
    {"date": "Mar 22", "value": 110},
    {"date": "Mar 23", "value": 60},
    {"date": "Mar 24", "value": -80},  # Negative values
]
```

## Series Configuration

### Basic Series Structure

```python
series = [
    {"name": "Apples", "color": "indigo.6"},
    {"name": "Oranges", "color": "blue.6"},
    {"name": "Tomatoes", "color": "teal.6"}
]
```

### Series Properties

**Required:**

- `name` (string) - Must match a key in the data

**Optional:**

- `color` (string) - Theme color reference (e.g., "blue.6") or CSS color
- `label` (string) - Display label in legend (defaults to `name`)
- `yAxisId` (string) - Bind to right Y axis: "right"
- `strokeDasharray` (string) - Line style: "5 5" for dashed
- `fill` (string) - Bar fill pattern: "url(#pattern-id)"
- `stackId` (string) - Group series in stacked charts

### Examples

**Custom Labels:**

```python
series = [
    {"name": "Apples", "label": "Apple Sales", "color": "red.6"},
    {"name": "Oranges", "label": "Orange Sales", "color": "orange.6"},
]
```

**Right Y Axis:**

```python
series = [
    {"name": "temperature", "color": "red.6"},
    {"name": "humidity", "color": "blue.6", "yAxisId": "right"},
]
```

**Dashed Lines:**

```python
series = [
    {"name": "Actual", "color": "blue.6"},
    {"name": "Forecast", "color": "gray.6", "strokeDasharray": "5 5"},
]
```

## Common Chart Props

### Data Props

- `data` (list[dict], required) - Chart data
- `dataKey` (str, required) - Key for X-axis values
- `series` (list[dict], required) - Series configuration

### Display Props

- `h` (int) - Chart height in pixels
- `withLegend` (bool) - Show legend (default: False)
- `withTooltip` (bool) - Show tooltip (default: True)
- `withXAxis` (bool) - Show X axis (default: True)
- `withYAxis` (bool) - Show Y axis (default: True)
- `withDots` (bool) - Show data point dots (default: True for Line/Area)

### Axis Props

- `xAxisLabel` (str) - Label below X axis
- `yAxisLabel` (str) - Label next to Y axis
- `xAxisProps` (dict) - Props for recharts XAxis
- `yAxisProps` (dict) - Props for recharts YAxis
- `withRightYAxis` (bool) - Show right Y axis
- `rightYAxisLabel` (str) - Label for right Y axis
- `rightYAxisProps` (dict) - Props for right YAxis

### Grid and Styling

- `gridAxis` (str) - Grid lines: "none", "x", "y", "xy" (default: "x")
- `tickLine` (str) - Tick lines: "none", "x", "y", "xy" (default: "y")
- `gridColor` (str) - Grid line color
- `textColor` (str) - Text color
- `strokeDasharray` (str) - Grid dash pattern (default: "5 5")

### Tooltip and Animation

- `tooltipAnimationDuration` (int) - Tooltip animation in ms (default: 0)
- `tooltipProps` (dict) - Props for recharts Tooltip
- `valueFormatter` (dict) - Function to format values: `{"function": "funcName"}`

### Legend

- `legendProps` (dict) - Props for recharts Legend
  - `verticalAlign`: "top"/"middle"/"bottom"
  - `height`: Number in pixels
  - `align`: "left"/"center"/"right"

## Chart Types

### AreaChart

**Types:**

- `type="default"` - Regular area chart
- `type="stacked"` - Stacked areas
- `type="percent"` - Percentage stacked
- `type="split"` - Split by positive/negative

**Specific Props:**

- `withGradient` (bool) - Gradient fill (default: False)
- `splitColors` (list) - Colors for split type: ["green.7", "red.7"]
- `curveType` (str) - Line curve: "monotone", "linear", "natural", "step"
- `fillOpacity` (float) - Area opacity: 0-1 (default: 0.2)
- `strokeWidth` (int) - Line width (default: 2)
- `connectNulls` (bool) - Connect across null values (default: True)
- `dotProps` (dict) - Props for dots
- `activeDotProps` (dict) - Props for active dot

### BarChart

**Types:**

- `type="default"` - Regular bars
- `type="stacked"` - Stacked bars
- `type="percent"` - Percentage stacked
- `type="waterfall"` - Waterfall chart

**Specific Props:**

- `orientation` (str) - "horizontal" or "vertical"
- `withBarValueLabel` (bool) - Show values on bars
- `valueLabelProps` (dict) - Props for value labels
- `barProps` (dict) - Props for recharts Bar
- `getBarColor` (dict) - Function to color bars: `{"function": "funcName"}`
- `fillOpacity` (float) - Bar opacity (default: 1)
- `maxBarWidth` (int) - Max bar width in pixels
- `minBarSize` (int) - Min bar height in pixels
- `cursorFill` (str) - Hover fill color

### LineChart

**Types:**

- `type="default"` - Regular line chart
- `type="gradient"` - Gradient fill

**Specific Props:**

- `curveType` (str) - Line curve: "monotone", "linear", "natural", "step"
- `strokeWidth` (int) - Line width (default: 2)
- `connectNulls` (bool) - Connect across nulls (default: True)
- `dotProps` (dict) - Props for dots
- `activeDotProps` (dict) - Props for active dot
- `gradientStops` (list) - Gradient colors for gradient type:

  ```python
  [
      {"offset": 0, "color": "red.6"},
      {"offset": 50, "color": "yellow.5"},
      {"offset": 100, "color": "blue.5"}
  ]
  ```

## Axis Configuration

### X Axis

```python
xAxisProps = {
    "angle": -20,                          # Rotate labels
    "tickMargin": 15,                      # Space between tick and label
    "orientation": "top",                  # "top" or "bottom"
    "padding": {"left": 30, "right": 30}, # End padding
}
```

### Y Axis

```python
yAxisProps = {
    "domain": [0, 100],                    # Fixed range
    "tickMargin": 15,                      # Space between tick and label
    "orientation": "right",                # "left" or "right"
}
```

### Dual Y Axis

```python
dmc.AreaChart(
    data=data,
    dataKey="name",
    withRightYAxis=True,
    yAxisLabel="Primary",
    rightYAxisLabel="Secondary",
    series=[
        {"name": "primary", "color": "blue.6"},
        {"name": "secondary", "color": "red.6", "yAxisId": "right"},
    ],
)
```

## Styling and Customization

### Colors

**Theme Colors:**

```python
series = [
    {"name": "series1", "color": "blue.6"},      # Theme color
    {"name": "series2", "color": "orange.7"},
    {"name": "series3", "color": "#FF5733"},     # CSS color
]
```

**Color Scheme Dependent:**

```python
# In CSS file:
"""
:root {
  --chart-color: var(--mantine-color-orange-8)
}

:root[data-mantine-color-scheme="dark"] {
  --chart-color: var(--mantine-color-lime-4);
}
"""

# In Python:
series = [{"name": "data", "color": "var(--chart-color)"}]
```

### Grid and Text Colors

**Using CSS Variables:**

```python
# In CSS:
"""
.custom-chart {
  --chart-grid-color: var(--mantine-color-blue-5);
  --chart-text-color: var(--mantine-color-blue-8);
}
"""

# In Python:
dmc.BarChart(className="custom-chart", ...)
```

**Using Props (single color scheme):**

```python
dmc.LineChart(
    gridColor="gray.5",
    textColor="gray.9",
    ...
)
```

### Reference Lines

```python
referenceLines = [
    {
        "y": 50,
        "label": "Target",
        "color": "red.6",
        "labelPosition": "insideTopRight"
    },
    {
        "x": "Mar 25",
        "label": "Event",
        "color": "blue.6"
    }
]
```

### Units

```python
dmc.BarChart(
    data=data,
    unit="$",        # Adds $ to Y-axis ticks and tooltip
    ...
)
```

### Value Formatting

Use custom JavaScript functions for formatting:

```python
# In Python:
dmc.AreaChart(
    valueFormatter={"function": "formatCurrency"},
    ...
)
```

```javascript
// In assets/custom.js:
var dmcfuncs = window.dashMantineFunctions = window.dashMantineFunctions || {};

dmcfuncs.formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
};
```

### Sync Multiple Charts

Sync tooltips across charts with same `syncId`:

```python
dmc.Stack([
    dmc.AreaChart(
        areaChartProps={"syncId": "sales"},
        ...
    ),
    dmc.BarChart(
        barChartProps={"syncId": "sales"},
        ...
    ),
])
```

## Interactive Features

### Click and Hover Data

```python
from dash import callback, Input, Output

dmc.BarChart(id="chart", ...)

@callback(
    Output("output", "children"),
    Input("chart", "clickData"),
    Input("chart", "clickSeriesName"),
)
def handle_click(data, series_name):
    return f"Clicked: {data}, Series: {series_name}"

@callback(
    Output("hover-output", "children"),
    Input("chart", "hoverData"),
    Input("chart", "hoverSeriesName"),
)
def handle_hover(data, series_name):
    return f"Hovering: {data}, Series: {series_name}"
```

### Highlight on Hover

```python
dmc.LineChart(
    highlightHover=True,  # Highlight series on hover
    ...
)
```

## Best Practices

1. **Consistent data keys** - Use the same field names across all data points
2. **Handle nulls** - Set `connectNulls` based on desired behavior
3. **Color accessibility** - Use high contrast colors for better readability
4. **Responsive heights** - Use appropriate `h` values for different screen sizes
5. **Format values** - Use `valueFormatter` for consistent number formatting
6. **Limit series** - Too many series can make charts hard to read
7. **Use legends** - Enable legends for multi-series charts
8. **Test tooltips** - Verify tooltip formatting with various data values

## Common Patterns

### Dynamic Series from Data

```python
# Extract series names from data keys
data = [{"month": "Jan", "A": 100, "B": 200, "C": 150}, ...]

series_names = [k for k in data[0].keys() if k != "month"]
series = [{"name": name, "color": f"blue.{i}"} for i, name in enumerate(series_names)]

dmc.BarChart(data=data, dataKey="month", series=series)
```

### Conditional Styling

```python
# In assets/functions.js
dmcfuncs.colorByValue = (value) => {
    if (value > 1000) return 'green.7';
    if (value > 500) return 'yellow.6';
    return 'red.6';
};

# In Python
dmc.BarChart(
    getBarColor={"function": "colorByValue"},
    ...
)
```
