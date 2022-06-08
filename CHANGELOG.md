# Change Log

# 0.10.2

### Fixed

- Tooltip component was not working properly.

# 0.10.1

### Fixed

- Typo in `autosize` prop name in Textarea component.

# 0.10.0

### Added

- New components
  - Textarea

### Fixed

- Missing id's from Stack and Timeline components.

# 0.9.0

### Added

- New components
  - PasswordInput
  - Stack
  - Pagination
- Input element types for TextInput component

# 0.8.0

### Added

- ActionIcon component
- (Specific to dmc-docs) DemoSlider, ThemeSwitcher

### Fixed

- Missing default icon bug in accordion and Blockquote.
- Slider onChange callbacks
- New props in various components
- Add persistence to all inputs as well as tabs

# 0.7.0 (Mantine v4.0)

### Added

- New components:
  - Menu, MenuItem, MenuLabel
    Code
    List, ListItem
    BackgroundImage

### Fixed

- Chip disabled state was not passed to component.

# 0.6.0

### Added

- New components:
  - Kbd
  - Avatar, AvatarGroup
  - Highlight
  - Timeline, TimelineInput
  - Mark
  - MediaQuery
  
### Fixed

- DateRangePicker will clean up the half selected range on dropdown close. #47
- DatePicker and DateRangePicker timezone issue. #33

# 0.5.0

### Added

- LoadingOverlay component similar to dcc.Loading
- Persistence in DatePicker, DateRangePicker, MultiSelect, RadioGroup, Select, TimeInput

### Fixed

- Skeleton component was not using loading_states.

# 0.4.1

### Fixed

- Props in Tooltip

### Added

- Underline prop in Text
- Mantine default theme colors. `dmc.theme.DEFAULT_COLORS`

# 0.4.0

### Added

- New components:
  - NumberInput
  - JsonInput
  - ThemeIcon
  - Table
  - RingProgress
  - TimeInput

### Fixed

- Props in SimpleGrid, Navbar, Header, Spoiler, and Title.
- Issues in Notifications system.

### Removed

- `inline` prop from Center, as it doesn't work right now.

# 0.3.1

### Fixed

- Corrected props for Datepickers, Notification, and slider.
- Props were not rendered correctly in InputWrapper.

## 0.3.0

### Fixed

- DatePicker and DateRangePicker will now accept date/dates through callbacks. #23.
- Updated props for some components to follow Mantine components more strictly.

### Added

- MantineProvider to allow theming, more specifically dark theme.
- Support for passing and rendering components other than `chidren`.
- Transition and shadow props to all components that support them.
- A new Notification component.

### Removed

- Removed the NotificationHandler component which was not easy to work with.

### Changed

- DatePicker and DateRangePicker now accept date/dates under the prop name `value` to support pattern matching callbacks and to follow the Mantine convention.
