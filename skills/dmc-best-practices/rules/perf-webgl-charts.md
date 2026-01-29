---
title: Use WebGL for Large Scatter Plots
impact: MEDIUM
impactDescription: Required for rendering 100k+ data points without browser freeze
tags: performance, charts, webgl, scatter, large-data
---

## Use WebGL for Large Scatter Plots

Standard SVG rendering becomes slow with large datasets. Use WebGL-based rendering for scatter plots with 100k+ points.

**Incorrect (SVG with large dataset):**

```python
import plotly.express as px
import pandas as pd

df = pd.DataFrame({
    "x": range(500000),
    "y": [i * 0.5 for i in range(500000)],
})

# SVG rendering - browser freezes
fig = px.scatter(df, x="x", y="y")
# Takes 10+ seconds to render, browser may crash
```

**Correct (WebGL rendering):**

```python
import plotly.express as px
import pandas as pd

df = pd.DataFrame({
    "x": range(500000),
    "y": [i * 0.5 for i in range(500000)],
})

# WebGL rendering - smooth performance
fig = px.scatter(df, x="x", y="y", render_mode="webgl")
# Renders in under 1 second
```

**With Plotly Graph Objects:**

```python
import plotly.graph_objects as go

fig = go.Figure(data=go.Scattergl(  # Note: Scattergl, not Scatter
    x=df["x"],
    y=df["y"],
    mode="markers",
    marker=dict(size=3, color=df["color"]),
))
```

**Performance comparison:**

| Data Points | SVG | WebGL |
| --- | --- | --- |
| 10,000 | Fast | Fast |
| 50,000 | Slow | Fast |
| 100,000 | Very slow | Fast |
| 500,000 | Crashes | Fast |
| 1,000,000+ | Impossible | Acceptable |

**WebGL limitations:**

- No gradient fills
- Limited text rendering
- Simpler marker shapes
- May vary by GPU/browser

**Line charts with large data:**

```python
import plotly.graph_objects as go

fig = go.Figure(data=go.Scattergl(
    x=df["time"],
    y=df["value"],
    mode="lines",  # Line mode in Scattergl
))
```

**Combine with data aggregation:**

```python
def downsample(df, target_points=10000):
    """Reduce points while preserving shape."""
    if len(df) <= target_points:
        return df
    step = len(df) // target_points
    return df.iloc[::step]

# For overview: downsample
# For zoom: load full resolution for visible range
```

**DMC Charts with WebGL:**

```python
import dash_mantine_components as dmc

# DMC charts use Recharts (SVG)
# For large datasets, use dcc.Graph with Plotly WebGL instead
from dash import dcc

dcc.Graph(
    figure=px.scatter(df, x="x", y="y", render_mode="webgl")
)
```

Reference: <https://plotly.com/python/webgl-vs-svg/>
