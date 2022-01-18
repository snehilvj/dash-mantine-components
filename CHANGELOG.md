# Change Log

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
