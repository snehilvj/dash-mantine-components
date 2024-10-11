# Change Log

# 0.14.6 UNRELEASED

### Added

- Added `autoplay` prop to the `Carousel` component #316 by @mmarfat 
- Added the `ChipGroup` component and updated `Chip` to work with it. #327 by @AnnMarieW and @BSd3v
Note: `Chip` was available before but not documented. If you used `Chip` in dmc<=0.14.5, you’ll now need to add `controlled=True` for it to work properly on its own.
- Added GitHub actions workflow for automated tests on PRs by @BSd3v


### Fixed

- Excluded the `loading_state` prop from being passed to the DOM.   Added `data-dash-is-loading` attribute to
components during callback execution, allowing custom CSS styling for loading states. #325 by @AnnMarieW

### Changed

- Reduced the package size by minifying the metadata.json file #345 by @AnnMarieW

# 0.14.5 

### Fixed

- for Date components:
  - enable date parsing based on the valueFormat
  - locale now works with persistence and on first render
  - This PR #314 is based on #265 - Thanks for your contribution @albavilanova  
 
- Fixed `boxWrapperProps` in the `MenuTarget` component #309 by  @datenzauberai 
- Ensure that Mantine and stylesheet versions match to the exact version rather than the major version. #317 by @AnnMarieW
- Changed `in` prop name to `opened` in dmc.Collapse #311 by @AnnMarieW
- When updating the `data` in a `Select` or `MultiSelect` component in a callback, the value now correctly reflects only valid options. #301 #324 by @AnnMarieW.

### Added

- Added `disabled` prop to `Fieldset` component #306 by @AnnMarieW
- New components  #266 by @stpnvkirill
  - MonthPickerInput
  - YearPickerInput
- Added `barProps` and `withValueLabels` for the BarCharts #300 by @AnnMarieW


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
