---
name: dmc-best-practices
description: |
  Dash Mantine Components (DMC) best practices and performance optimization guidelines.
  Use this skill when writing, reviewing, or refactoring Dash apps with DMC to ensure
  optimal patterns. Triggers on: DMC components, Mantine styling, Dash callbacks,
  dcc.Store, theming, or performance optimization in Plotly Dash applications.
---

# DMC Best Practices

Definitive best practices for building Dash applications with Dash Mantine Components. Rules are organized by impact level and category.

## Priority Categories

| Priority | Category | Impact | Prefix | Rules |
| --- | --- | --- | --- | --- |
| 1 | Architecture | CRITICAL | `arch-` | 4 |
| 2 | Callbacks | CRITICAL/HIGH | `callback-` | 6 |
| 3 | Styling | HIGH/MEDIUM | `style-` | 5 |
| 4 | Data Management | HIGH | `data-` | 4 |
| 5 | Performance | MEDIUM-HIGH | `perf-` | 3 |
| 6 | Forms & Validation | MEDIUM | `form-` | 2 |
| 7 | Theming | MEDIUM | `theme-` | 3 |
| 8 | DMC v2.x Migrations | MEDIUM | `v2-` | 2 |
| 9 | Accessibility | MEDIUM | `a11y-` | 1 |

## Top 10 Critical Rules

1. **Wrap layout in MantineProvider** - All DMC components require it
2. **Never modify global variables** in callbacks - Breaks multi-worker deployments
3. **Use State not Input** for values that shouldn't trigger callbacks
4. **Define callbacks before app.run()** - Registration must happen first
5. **Prevent circular callbacks** - Outputs feeding inputs cause infinite loops
6. **Return JSON-serializable values** - Only dict, list, str, number, bool, None
7. **Use static CSS selectors** - Never target `.m_*` dynamic classes
8. **Custom colors need 10 shades** - Exactly 10 (0=lightest, 9=darkest)
9. **Use dcc.Store for client data** - Not global variables
10. **Debounce text inputs** - Limit callback firing on rapid changes

## Rules Index

### Architecture (CRITICAL)

- [arch-mantine-provider](rules/arch-mantine-provider.md) - Wrap Layout in MantineProvider
- [arch-callback-order](rules/arch-callback-order.md) - Define Callbacks Before app.run()
- [arch-circular-callbacks](rules/arch-circular-callbacks.md) - Prevent Circular Callbacks
- [arch-global-variables](rules/arch-global-variables.md) - Never Modify Global Variables

### Callbacks (CRITICAL/HIGH)

- [callback-input-vs-state](rules/callback-input-vs-state.md) - Use State for Non-Triggering Values
- [callback-json-serializable](rules/callback-json-serializable.md) - Return JSON-Serializable Values
- [callback-prevent-update](rules/callback-prevent-update.md) - PreventUpdate vs no_update
- [callback-debounce](rules/callback-debounce.md) - Debounce Text Inputs
- [callback-context](rules/callback-context.md) - Use ctx.triggered_id Correctly
- [callback-prevent-initial](rules/callback-prevent-initial.md) - Use prevent_initial_call Appropriately

### Styling (HIGH/MEDIUM)

- [style-static-selectors](rules/style-static-selectors.md) - Use Static Selectors Only
- [style-props-limit](rules/style-props-limit.md) - Limit Style Props to 3-4 Per Component
- [style-responsive-css](rules/style-responsive-css.md) - Use CSS Media Queries for Responsive
- [style-css-variables](rules/style-css-variables.md) - Prefer CSS Variables Over Hardcoded
- [style-classnames-over-styles](rules/style-classnames-over-styles.md) - Use classNames Over styles Prop

### Data Management (HIGH)

- [data-dcc-store](rules/data-dcc-store.md) - Use dcc.Store for Client-Side Data
- [data-server-caching](rules/data-server-caching.md) - Use Server-Side Caching for Large Data
- [data-session-isolation](rules/data-session-isolation.md) - Isolate Cache by Session ID
- [data-signaling-pattern](rules/data-signaling-pattern.md) - Use Signaling Pattern for Expensive Ops

### Performance (MEDIUM-HIGH)

- [perf-clientside-callbacks](rules/perf-clientside-callbacks.md) - Use Clientside Callbacks for Frequent Updates
- [perf-memoization](rules/perf-memoization.md) - Memoize Expensive Functions
- [perf-webgl-charts](rules/perf-webgl-charts.md) - Use WebGL for Large Scatter Plots

### Forms & Validation (MEDIUM)

- [form-validation-pattern](rules/form-validation-pattern.md) - Validate Early, Fail Fast
- [form-error-handling](rules/form-error-handling.md) - Return User-Friendly Error Messages

### Theming (MEDIUM)

- [theme-custom-colors](rules/theme-custom-colors.md) - Custom Colors Need 10 Shades
- [theme-light-dark-mode](rules/theme-light-dark-mode.md) - Test Both Light and Dark Modes
- [theme-component-defaults](rules/theme-component-defaults.md) - Set Component Defaults in Theme

### DMC v2.x Migrations (MEDIUM)

- [v2-breaking-changes](rules/v2-breaking-changes.md) - DMC v2.x Breaking Changes
- [v2-notification-container](rules/v2-notification-container.md) - Use NotificationContainer Not Provider

### Accessibility (MEDIUM)

- [a11y-labels-required](rules/a11y-labels-required.md) - Always Provide Labels for Inputs

## Full Reference

See [AGENTS.md](AGENTS.md) for the complete compiled reference with all rules expanded.
