import { Code as MantineCode } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Inline or block code without syntax highlight. For more information, see: https://mantine.dev/core/code/
 */
const Code = (props) => {
    const { children, class_name } = props;

    return (
        <MantineCode
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </MantineCode>
    );
};

Code.displayName = "Code";

Code.defaultProps = {};

Code.propTypes = {
    /**
     * True for code block, false for inline code
     */
    block: PropTypes.bool,

    /**
     * Code content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Code color and background from theme, defaults to gray in light theme and to dark in dark theme
     */
    color: PropTypes.oneOf([
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
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Code;
