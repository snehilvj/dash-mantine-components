# Change Log

# Unreleased

### Fixed

- fixes `MultiSelect` and `Select` so that changes to the `data` and `value` are batched so they only trigger a single callback. #637 by @AnnMarieW

# 2.2.0

See details and examples in the [DMC 2.2.0 Release Announcement](https://www.dash-mantine-components.com/release-2-2-0)

### Added

- Added support for custom toolbar controls in `RichTextEditor` #629 by @BSd3v
- Added `clearSearchOnFocus` prop to `Select`  #627 by @AnnMarieW

The following was added in #625 by @AnnMarieW
- `attributes` prop – Pass custom attributes to inner elements of components that support the Styles API.
- `strategy` prop for `Container` – Added `strategy="grid"` option for grid-based layouts with breakout features.
- `target` prop for `Tooltip` – Specify tooltip targets using a selector, HTML element, or ref, as an alternative to children.
- `chevronIconSize` prop for `Accordion` – Control the size of the default chevron icon independently from `chevronSize`.
- `keepMounted` prop for `Collapse` – Keep collapsed content in the DOM while hidden.
- `autoSelectOnBlur` prop for `Select` and `Autocomplete` – Automatically select the highlighted option when the input loses focus.


### Fixed
- Fixed CSS for `CodeHighlight` so it works when `dcc.Markdown` and/or `dash-ag-grid` are also used in the same app. #625 by @AnnMarieW


### Changed
- Upgraded to latest Mantine (8.2.5) #632 by @AnnMarieW

# 2.2.0rc1

### Fixed
- Resolved an issue where `Slider` and `RangeSlider` values did not update correctly when the `min` or `max` props were updated in a callback. #616 by @AnnMarieW

### Added
- Added `valueLabelProps` to `BarChart` to allow customization of the value label, which is displayed when `withBarValueLabel` is set. #619 by @CGaul

# 2.1.0

### Added
- New features for `Autocomplete` #604 by @ihor-lazariev:
  - Support functions as props in `renderOption` and `filter` props
  - Added `clearButtonProps` and `clearable` props

- Added `renderNode` prop in `Tree` component, allowing full control over node rendering with a JavaScript function. #608 by @AnnMarieW

- Added  Modal Stack and Drawer Stack components  #606 by @AnnMarieW
  - Introduced `ModalStack` / `ManagedModal` and `DrawerStack` / `ManagedDrawer` for managing stacked modals and drawers.
  - `ModalStack` and `DrawerStack` accept the Dash props: `open`, `close`, `toggle`, and `closeAll` to control visibility, and a read-only `state` prop to track which children are open.
 
- Added Props #609 by @AnnMarieW
  - `headerControlOrderProp` to calendar components
  - `presets` to `DatePicker` and  `DateTimePicker`
  - `autoContrast` to `Tooltip` and `FloatingTooltip`
  - `domain` to `Slider` and `RangeSlider`
  - `pushOnOverlap` to `RangeSlider`
  - `bdrs` new style prop to for `borderRadius`
  - `getYearControlProps`, `getMonthControlProps`, `getDayProps`, `renderDay` to date components

### Fixed

- Fixed issue where setting `value=None` in `MultiSelect` or `CheckboxGroup` caused an error #609

### Changed
- Upgraded to latest Mantine (8.1.2)

# 2.0.0

### Changed
 - BREAKING CHANGES - updated to use Mantine 8.0.2
 - See [Migration guide](https://www.dash-mantine-components.com/migration) in the dmc-docs

### Added
- New `TimePicker`, `TimeGrid`, `DatePicker` and `SubMenu` components

- Functions as Props  #580 by @AnnMarieW and @BSd3v
  - Components can now accept JavaScript functions via: `{"function": "myFunction"}`
  - Functions must be defined in a .js file in  `/assets` in `window.dashMantineFunction` namespace
  - Supports passing `options` from Python, for example: ` {"function": "formatTemp", "options": {"unit": "F"}}`
  - Supported props:
      - label and scale in Slider and RangeSlider
      - renderOption and filter in Select, MultiSelect and TagsInput,
      - disabledDates in date components with a calendar picker
      - getBarColor in BarCharts
      - valueFormatter and tooltipProps in chart components


- New way to handle Notifications #539 by @BSd3v
  - Added new `NotificationContainer` that works more closely to upstream Notifications in Mantine.
  - Exposed the `notifications` api of Mantine for granular control at `dash_mantine_components.appNotifications.api`
  - Exposed the `store` of notifications at `dash_mantine_components.store`
  - Marked `Notification` and `NotificationProvider` for deprecation

# 1.3.0

### Added
- Added `tableProps` and `tabularNums` props to `Table` #587 by @AnnMarieW
- Added `TableScrollContainer` component #587 by @AnnMarieW
- 
### Fixed
- Fixed issue for components as props for `Timeline`, `Stepper`, `CodeHighlight` and `SegmentedControl`. #555 by @BSd3v
- Removed unused async files #587 by @AnnMarieW


### Changed
- Upgraded to latest Mantine (7.17.7)


# 1.2.0

### Added

- Added `inputProps` to JsonInput, NumberInput, PasswordInput, TextInput, and TextArea components to allow passing props directly to the underlying input element. #568 by @AnnMarieW
- Optional component stylesheets are now bundled automatically. It’s no longer necessary to include them as external stylesheets or add them to the assets folder. PR #567 by @AnnMarieW

# 1.1.2rc1

### Fixed
- Fixed issue where children of certain components could not be updated in a callback. Requires dash >=3.03 #558 by @AnnMarieW
- Fixed issue where Navlink could not be updated in a callback if the href prop was not set initially.  #562 by @AnnMarieW
- Fixed issue with components that used `useMemo` that couldn't be updated in a callback. #561 BY @AnnMarieW

### Changed
- Upgraded to latest Mantine (7.17.4)

# 1.1.1

### Fixed

- Reverted PR #523, which introduced errors in the `Notification` component (reported in issue #542).  
- Resolved an issue in the `Stepper` component where it failed to render correctly when using custom icons or other components as props.  #544 by @BSd3v

# 1.1.0

### Added

-   Added `RichTextEditor` and `TypographyStylesProvider` components #530 by @emilhe

### Changed

- Complex components such as `CodeHighlightTabs`, and `Stepper` are now rendered by the dash ecosystem when using dash 3+. Dash 2 falls back on `dash-extensions-js` to render via `React.createElement` (by @emilhe). This enables the use of these components in callbacks as triggers. #531 @BSd3v 
- Upgraded to latest Mantine (7.17.2)

### fixed 
 - Fixed `TagsInput` initial value being cleared after user update (regression introduced in 1.0.0)  #533 by AnnMarieW


# 1.0.0

### Breaking Change

-   Removed `draggable` and `speed` prop from `Carousel` since these props are not supported in Embla Carousel V8. #520 by @AnnMarieW

### Added

-   Added `middlewares` prop to `Tooltip` and `overscrollBehavior` prop to `ScrollArea` (New props as of Manitine 7.17). #520 by @AnnMarie

### Changed

-   `Notification` will now automatically set its `action` to `hide` when closed, this avoids issues where a `callback` error would re-trigger the component. #523 by @BSd3v
-   graphs and code highlight components now loaded async, reducing the dash_mantine_components.js file size from 2.68 MiB to 823 KiB #521 by @AnnMarieW and @emilhe

# 1.0.0rc2

### Added

-   Added `CheckboxCard` `CheckboxIndicator` `RadioCard` `RadioIndicator` components #486 by @deadkex

### Changed

-   Expanded the `active` prop to support string values (`"exact"` and `"partial"`) in addition to `true`/`false`. #504 by @BSd3v

    -   `exact`: Marks the link as active only when `pathname` exactly matches `href`.
    -   `partial`: Marks the link as active when `pathname` starts with `href`, allowing for subpages.

-   Upgraded to latest Mantine (7.17.0)

### Fixed

-   Corrected an error in the `Alert` component when the `duration` prop was set when using dash>=3 #516 by @AnnMarieW

# 1.0.0rc1

### Pre-release Highlights

-   This release ensures dash-mantine-components V1 is compatible with both Dash 2 and Dash 3

-   ⚠️ **Important:** Apps using `dmc < 1.0.0` must pin `dash < 3` to avoid compatibility issues.

### Changed

-   Updated to handle changes in Dash 3 #506 by @AnnMarieW:
    -   Removed `defaultProps` to be compatible with React 18.3
    -   Handled the removal of the `loading_state` prop
    -   Updated to use the new `dash_component_api`

# 0.15.3

### Added

-   For `MonthPickerInput`, the debounce prop can now be True, False or number of ms delay before updating. When True, the value updates on blur. #471 by @oelhammouchi
-   Added `InputWrapper` component #491 by @Godisemo

### Fixed

-   Fixed debounce in `DatePickerInput` that stopped working in 0.15.2 #496 by @AnnMarie
-   Enable components to be used in `children` and `icon` in the `closeButtonProps` and `clearButtonProps`. #493 by @AnnMarieW

### Changed

-   Upgraded to latest Mantine (7.16.2)

# 0.15.2

### Added

-   Added `disabled` prop for individual options on a `SegmentedControl` #451 by @petefine
-   Added `type` prop for `SimpleGrid` to enable container queries #472 by @namakshenas
-   Added `type` prop and `breakpoints` prop for `Grid` to enable container queries #473 by @namakshenas
-   Added props #478 by @AnnMarieW:
    -   `inline` prop to `Center`,
    -   `allowedInitialsColors` to `Avatar`
    -   `defaultExpanded` to `CodeHightlightTabs`
    -   `autoComplete` to `PasswordInput`
-   Added props available in Mantine 7.16.0 #489 by @AnnMarieW

    -   `withOverlay` and `overlayProps` to `Popover
    -   `withPages` to `Pagination
    -   `type` to `Carousel` enabling container queries
    -   `restrictToMarks` to `RangeSlider`

-   Added `Tree` component #460 by @Godisemo
-   Added `InlineCodeHighlight` component #483 by @Godisemo

### Fixed

-   Styled the figure buttons in the "mantine_light" and "mantine_dark" Plotly figure templates. #456 by @AnnMarieW
-   In `Carousel` Allow only "center" | "start" | "end" in the `align` prop #477 by @AnnMarieW

### Changed

-   Upgraded to latest Mantine (7.16.1)

# 0.15.1

### Added

-   Added `disabled` prop to `Radio` #425 by @namakshenas
-   Added `lineSize` prop to `Burger` #432 by @ChinoUkaegbu
-   Added `SemiCircleProgress` component #434 by @AnnMarieW

-   Added the `add_figure_templates()` function which creates Mantine-styled Plotly figure templates for
    both light and dark modes using the default Mantine theme. It registers the templates with plotly.io.templates as
    "mantine_light" and "mantine_dark", and optionally sets one of the themes as a default. #431 by @AnnMarie

-   Added various props: `acceptValueOnBlur` to `TagsInput`, `gradient` to `LineChart`, `hideWithOnePage` to `Pagination`,
    `name` to `Avatar`, and `disabled` to `NumberInput`. #440 by @AnnMarieW

### Fixed

-   Fixed closing of Popovers when clicking outside. #423 by @magicmq
-   Enabled `searchValue` in the `MultiSelect` component to be updated in a callback #441 by @AnnMarieW

### Changed

-   Upgraded to latest Mantine (7.14.3), which also fixes issues #413 and #439

# 0.15.0

### Changed

-   **Breaking Change:** Renamed `DatePicker` to `DatePickerInput` so component names are aligned with the upstream Mantine library. #414 by @AnnMarieW
-   Upgraded to latest Mantine (7.14.1)

### Added

-   New additions to Date components #405 by @AnnMarieW

    -   `DatePicker` - The `debounce` prop can now be `True` `False` or `number` of ms delay before updating. When True, the value updates on blur.
    -   Added missing `highlightToday` prop on all Date components with calendars.
    -   `DateInput` updates properly now when clearable=True

-   Enabled custom icons in `Checkbox` Added `icon` and `indeterminateIcon` props #408 by @snehilvj
-   New props: `barLabelColor` for the `BarChart` and `restrictToMarks` for the `Slider` #416 by @AnnMarieW
-   Added `position` prop to `Notification #419 by @AnnMarieW

### Fixed

-   In MultiSelect, enable the debounce to work when deleting items when the dropdown is closed when debounce is a number. #407 by @AnnMarieW
-   In MultiSelect and Select, fixed regression where it was not possible to update both the value and data in the same callback #412
-   Fixed console warning in Tooltip component by adding a key to the wrapper Box element #418 by @AnnMarieW

# 0.14.7

### Added

-   Added `autoScroll` prop to the `Carousel` component, enabling smooth scrolling like a stock ticker. #373 by @mmarfat
-   Added `withLegend` to `RadarChart`, and `maxBarWidth`, `minBarSize` to `BarChart`. #395 by @AnnMarieW
-   New chart types: `CompositeChart` and `BubbleChart` #368 by @michaelw88
-   New props for charts: (Included in #368 by @michaelw88)
    -   added `hoverData`, `hoverSeriesName`, `clickSeriesName` and `highlightHover` props to `AreaChart`, `LineChart`, `BarChart`, and `CompositeChart`
    -   added `hoverData`, `hoverSeriesName`, `clickSeriesName` to `PieChart`, `DonutChart`, `ScatterChart`
-   New props for triggering dash callbacks on input components: `n_submit` `n_blur` #383 by @AnnMarieW

### Changed

-   Reduced the Highlight component file size #366 by @AnnMarieW
-   The `debounce` prop on input components can now be `True` `False` or `number` of ms delay before updating. When True, the value will update on enter or on blur. #383 by @AnnMarieW
-   Upgraded to latest Mantine (7.13.3)

### Fixed

-   Prevent loading from empty `src` in `Avatar`. #372 by @mmarfat
-   Enable base64 images in Avatar #379 by @AnnMarieW
-   Fixed boxWrapperProps in the Hovercard #389 by @AnnMarieW

# 0.14.6

### Added

-   Added `autoplay` prop to the `Carousel` component #316 by @mmarfat
-   Added the `ChipGroup` component and updated `Chip` to work with it. #327 and #355 by @AnnMarieW and @BSd3v
-   Added GitHub actions workflow for automated tests on PRs #333 by @BSd3v
-   Added new and missing props to the charts. Enables figure animation, right Y axis and more! #349 by @AnnMarieW
-   Added `active` prop to Carousel, allowing callbacks to be triggered based on the currently displayed slide. #354 by @AnnMarieW
-   RadioGroup and ChipGroup (in single mode) now have a `deselectable` argument to allow resetting the radio value #351 by @RenaudL

### Fixed

-   Excluded the `loading_state` prop from being passed to the DOM. Added `data-dash-is-loading` attribute to
    components during callback execution, allowing custom CSS styling for loading states. #325 by @AnnMarieW
-   Enabled the `opened` prop to trigger callback in the Popover component #353 by @AnnMarieW
-   Stepper component can be stepped through by clicking on steps buttons #352 by @RenaudL

### Changed

-   Reduced the package size by excluding the 5MB metadata.json file #357 by @AnnMarieW
-   Upgraded to latest Mantine (7.13.2)

# 0.14.5

### Fixed

-   for Date components:

    -   enable date parsing based on the valueFormat
    -   locale now works with persistence and on first render
    -   This PR #314 is based on #265 - Thanks for your contribution @albavilanova

-   Fixed `boxWrapperProps` in the `MenuTarget` component #309 by @datenzauberai
-   Ensure that Mantine and stylesheet versions match to the exact version rather than the major version. #317 by @AnnMarieW
-   Changed `in` prop name to `opened` in dmc.Collapse #311 by @AnnMarieW
-   When updating the `data` in a `Select` or `MultiSelect` component in a callback, the value now correctly reflects only valid options. #301 #324 by @AnnMarieW.

### Added

-   Added `disabled` prop to `Fieldset` component #306 by @AnnMarieW
-   New components #266 by @stpnvkirill
    -   MonthPickerInput
    -   YearPickerInput
-   Added `barProps` and `withValueLabels` for the BarCharts #300 by @AnnMarieW

### Changed

-   Upgrade to latest Mantine (7.13.0)

# 0.14.4

### Fixed

-   Image and BackgroundImage supports base64 encoded images #282
-   Time parsing in DateTimePicker. #273
-   Show MenuItem as disabled when argument is set to True. #202
-   Update selection when options are changed in combobox components - Select, MultiSelect and TagsInput. #201

### Added

-   Add readOnly prop to input components. #252
-   Ability to control Spoiler state. #277
-   Expose stylesheet links at dmc.styles.\*

### Changed

-   Upgrade to latest Mantine (7.11.0)

# 0.14.3

### Added

-   TagsInput component

### Changed

-   Corrected transition props.

# 0.14.2

### Added

-   Burger component
-   Click callback in chart components by subscribing to `clickData` property. This feature might change in future.

### Changed

-   TooltipFloating has been renamed to FloatingTooltip as its not a compound component.

# 0.14.1

### Changed

-   Corrected prop structure of few components

# 0.14.0

### Changed

-   BREAKING CHANGE!!
-   Updated to use latest Mantine - v7
-   Detailed changelog for Mantine v7 can be found here: <https://mantine.dev/changelog/7-0-0/>.
-   Added a bunch of new components like nprogress, charts, carousel, etc.
-   Fixed issues revealed in process of developing 0.13 series based on Mantine v6.

# 0.13.0a3

### Added

-   Wild card aria-_and data-_ props to all components

# 0.13.0a2

### Added

-   New component:
    -   InputWrapper

### Fixed

-   Missing input props from TimeInput
-   Pass empty list as default prop for Select and MultiSelect
-   Remove left over MantineProvider from Switch testing

# 0.13.0a1

This release is based on Mantine v6.

### Added

-   New components
    -   Autocomplete
    -   Box
    -   ColorInput
    -   Flex
    -   Popover
    -   Rating

### Changed

Detailed changelog for Mantine v6 can be found here: <https://mantine.dev/changelog/6-0-0/>.

### Fixed

-   Date components freezing the entire UI

# 0.12.1

### Added

-   Persistence props for TransferList #171
-   Clearing datepicker via callback #167
-   Trigger callback when new options are created using the creatable prop in Select and MultiSelect #164
-   Add `classNames` prop to all components

### Fixed

-   Disabled dates losing effect in DatePicker and DateRangePicker #137
-   Date range selection issue when selecting adjacent dates #66
-   AppShell prop types #162

# 0.12.0

### Changed

-   Updated to use latest Mantine - v5.10.5

### Added

-   New Mantine Style props. #142
-   `spellcheck` prop to text input components #133
-   `style` prop for MediaQuery inner box component #148
-   New props to few components because of Mantine version upgrade.
-   New components
    -   NavLink
    -   TransferList
    -   Indicator

### Fixed

-   Add `disabled` property in Checkbox #150
-   Pass initial value to Checkbox component #140
-   Stepper icon bug #146

# 0.11.1

### Added

-   Missing style props in Notification component.

### Fixed

-   Bullet and title were not rendered. #126

# 0.11.0

### Added

-   Accessibility props in some components.

# 0.11.0a3

### Added

-   New components
    -   HoverCard #114
    -   Stepper #109
    -   Notification!!
-   Disable browser autocomplete in input components #111
-   Search value prop for Select and MultiSelect #89
-   Missing persistence props from text inputs
-   Ability to set Select/Multiselect options using callbacks

### Fixed

-   ActionIcon was not reflecting disabled state.

### Changed

-   MenuItem links now work like Anchor (which in turn works as dcc.Link now).

# 0.11.0a2

### Fixed

-   Make persistence props optional.

# 0.11.0a1

### Added

-   New components:
    -   Card, CardSection
    -   Burger
    -   AppShell
-   Persistence props
-   `name` prop in text inputs for forms. #103
-   Ability to debounce callbacks by specifying a duration in all text inputs. #102

### Fixed

-   Button not showing disabled state. #106
-   Inability to move RangeSlider left handle when `min` prop is set to a negative value. (Fixed in upstream)

# 0.11.0a0

This is an alpha release based on Mantine v5. This version of dmc is a big overhaul with lots of new features but at the cost of backward compatibility for many components.

### Changed

-   Updates for Mantine v5.
    -   New component APIs such as for Tabs, Accordion, RadioGroup, etc.
    -   Prop names
-   Adopted typescript which simplified the code a lot. Thanks to @plotly team.
-   Organisation of components source code.

### Added

-   New components:
    -   FloatingTooltip
    -   Aside, Footer
    -   RangeSlider

### Removed

-   Notification and NotificationsProvider component **for now**, as they are not compiling for some reason.

# 0.10.3

### Added

-   `style` prop in Timeline and TimelineItem.

# 0.10.2

### Fixed

-   Tooltip component was not working properly.

# 0.10.1

### Fixed

-   Typo in `autosize` prop name in Textarea component.

# 0.10.0

### Added

-   New components
    -   Textarea

### Fixed

-   Missing id's from Stack and Timeline components.

# 0.9.0

### Added

-   New components
    -   PasswordInput
    -   Stack
    -   Pagination
-   Input element types for TextInput component

# 0.8.0

### Added

-   ActionIcon component
-   (Specific to dmc-docs) DemoSlider, ThemeSwitcher

### Fixed

-   Missing default icon bug in accordion and Blockquote.
-   Slider onChange callbacks
-   New props in various components
-   Add persistence to all inputs as well as tabs

# 0.7.0 (Mantine v4.0)

### Added

-   New components:
    -   Menu, MenuItem, MenuLabel
        Code
        List, ListItem
        BackgroundImage

### Fixed

-   Chip disabled state was not passed to component.

# 0.6.0

### Added

-   New components:
    -   Kbd
    -   Avatar, AvatarGroup
    -   Highlight
    -   Timeline, TimelineInput
    -   Mark
    -   MediaQuery

### Fixed

-   DateRangePicker will clean up the half selected range on dropdown close. #47
-   DatePicker and DateRangePicker timezone issue. #33

# 0.5.0

### Added

-   LoadingOverlay component similar to dcc.Loading
-   Persistence in DatePicker, DateRangePicker, MultiSelect, RadioGroup, Select, TimeInput

### Fixed

-   Skeleton component was not using loading_states.

# 0.4.1

### Fixed

-   Props in Tooltip

### Added

-   Underline prop in Text
-   Mantine default theme colors. `dmc.theme.DEFAULT_COLORS`

# 0.4.0

### Added

-   New components:
    -   NumberInput
    -   JsonInput
    -   ThemeIcon
    -   Table
    -   RingProgress
    -   TimeInput

### Fixed

-   Props in SimpleGrid, Navbar, Header, Spoiler, and Title.
-   Issues in Notifications system.

### Removed

-   `inline` prop from Center, as it doesn't work right now.

# 0.3.1

### Fixed

-   Corrected props for Datepickers, Notification, and slider.
-   Props were not rendered correctly in InputWrapper.

## 0.3.0

### Fixed

-   DatePicker and DateRangePicker will now accept date/dates through callbacks. #23.
-   Updated props for some components to follow Mantine components more strictly.

### Added

-   MantineProvider to allow theming, more specifically dark theme.
-   Support for passing and rendering components other than `chidren`.
-   Transition and shadow props to all components that support them.
-   A new Notification component.

### Removed

-   Removed the NotificationHandler component which was not easy to work with.

### Changed

-   DatePicker and DateRangePicker now accept date/dates under the prop name `value` to support pattern matching callbacks and to follow the Mantine convention.
