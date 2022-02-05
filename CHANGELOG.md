# Change Log

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
