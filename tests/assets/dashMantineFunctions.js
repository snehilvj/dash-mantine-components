var dmcfuncs = window.dashMantineFunctions = window.dashMantineFunctions || {};
const dmc = window.dash_mantine_components;
const iconify = window.dash_iconify;


dmcfuncs.myLabel = (value) => `${value} °C`


dmcfuncs.myLabel1 = function(value) {
    return `${value} °C`
}

dmcfuncs.myLabelComponent = function (value) {
    const color = value <= 0 ? "var(--mantine-color-blue-3)" : "red";
    return React.createElement(
        'div',
        { style: { color: color, fontSize: '16px' } },
        value
    );
}

dmcfuncs.labelFormatter = function (value, opts = {}) {
  const prefix = opts.prefix || '';
  const suffix = opts.suffix || '';
  return `${prefix}${value}${suffix}`;
};


dmcfuncs.getScale = (v) => 2 ** v;


dmcfuncs.excludeDate = function(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const parsedDate = new Date(Date.UTC(year, month - 1, day)); // Month is 0-based
    return parsedDate.getUTCDay() !== 5;  // Use getUTCDay to avoid local timezone shift
}


dmcfuncs.renderAutocompleteOption = function ({ option, checked }) {
    const icons = {
        left: "mdi:format-align-left",
        center: "mdi:format-align-center",
        right: "mdi:format-align-right",
        justify: "mdi:format-align-justify",
    };

    const icon = icons[option.value?.toLowerCase?.()] || "mdi:checkbox-blank-circle-outline";

    return React.createElement(
        dmc.Group,
        { gap: "xs", align: "center", className: "custom-icon-label"},
        React.createElement("span", null, option.label),
        React.createElement(iconify.DashIconify, { icon: icon, width: 20 }),
    );
};