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


dmcfuncs.myLeaf = function (payload) {

  const { node, elementProps } = payload;

  return React.createElement(
    dmc.Group,
    { key: node.value, gap: 4, ...elementProps },
    React.createElement('span', null, '🌿 ' + node.label)
  );
};

dmcfuncs.insertContent = ({editor}, options) => {
    editor?.commands.insertContent(options)
}


// Custom tick for RadarChart polarAngleAxisProps (#747)
dmcfuncs.radarTick = function ({ x, y, payload, textAnchor }) {
    return React.createElement(
        'text',
        { x, y, textAnchor, className: 'custom-radar-tick', fill: 'red' },
        `${payload.value}!`
    );
};


// Custom labels for the Lightbox component. The values are intentionally
// different from the default labels (English) so the test verifies that the
// custom functions are actually resolved and used.
dmcfuncs.lightboxSlideLabel = function (index, total) {
    return `Bild ${index} von ${total}`;
}

dmcfuncs.lightboxThumbnailLabel = function (index) {
    return `Zu Bild ${index} wechseln`;
}

dmcfuncs.renderCustomSlide = function ({ active }) {
    return React.createElement(
        dmc.Center,
        { h: "100%" },
        React.createElement(
            dmc.Text,
            { c: "white", size: "xl", fw: 700 },
            active ? "This slide is active" : "This slide is not active"
        )
    );
};

dmcfuncs.renderCustomThumb = function () {
    return React.createElement(
        dmc.Center,
        {
            h: "100%",
            bg: "blue.6",
            style: { borderRadius: 4 }
        },
        React.createElement(
            dmc.Text,
            { c: "white", size: "xs" },
            "Custom"
        )
    );
};

dmcfuncs.renderYouTube = function () {
    return React.createElement("iframe", {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "YouTube video",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        style: {
            width: "80vw",
            height: "45vw",
            maxHeight: "70vh",
            border: "none",
            borderRadius: 8
        }
    });
};

dmcfuncs.renderYouTubeThumb = function () {
    return React.createElement(
        dmc.Center,
        {
            h: "100%",
            bg: "red.6",
            style: { borderRadius: 4 }
        },
        React.createElement(
            dmc.Text,
            { c: "white", size: "xs" },
            "YT"
        )
    );
};
