var dmcfuncs = window.dashMantineFunctions = window.dashMantineFunctions || {};


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