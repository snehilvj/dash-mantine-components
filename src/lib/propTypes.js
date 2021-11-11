import PropTypes from "prop-types";

export const Sizes = PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]);

export const NumberSizes = PropTypes.oneOfType([Sizes, PropTypes.number]);

export const Orientations = PropTypes.oneOf(["horizontal", "vertical"]);

export const AlignContentProperty = PropTypes.oneOf([
    "stretch",
    "center",
    "flex-end",
    "flex-start",
]);

export const JustifyContentProperty = PropTypes.oneOf([
    "space-between",
    "space-around",
    "center",
    "flex-end",
    "flex-start",
]);

export const Positions = PropTypes.oneOf(["right", "center", "left", "apart"]);

export const Directions = PropTypes.oneOf(["row", "column"]);

export const MantineColors = PropTypes.oneOf([
    "dark",
    "gray",
    "red",
    "pink",
    "grape",
    "violet",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
]);

export const GradientType = PropTypes.exact({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    deg: PropTypes.number,
});

export const OptionsType = PropTypes.arrayOf(
    PropTypes.exact({
        /** The option's label */
        label: PropTypes.string.isRequired,
        /** option's value */
        value: PropTypes.string.isRequired,
        /** If true, this option is disabled and cannot be selected */
        disabled: PropTypes.bool,
    })
);

export const SimpleOptionsType = PropTypes.arrayOf(
    PropTypes.exact({
        /** The option's label */
        label: PropTypes.string.isRequired,
        /** option's value */
        value: PropTypes.string.isRequired,
    })
);
