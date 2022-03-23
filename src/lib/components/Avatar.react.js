import { Avatar as MantineAvatar } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
// import { renderDashComponent } from "dash-extensions-js";

/**
 * Display user profile image, initials or fallback icon. For more information, see: https://mantine.dev/core/avatar/
 */
const Avatar = (props) => {
    const { class_name } = props;

    return (
        <MantineAvatar
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        />
    );
};

Avatar.displayName = "Avatar";

Avatar.defaultProps = {};

Avatar.propTypes = {
    /**
     * Image alt text or title for placeholder variant
     */
    alt: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Color from theme.colors used for letter and icon placeholders
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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Value from theme.radius or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Avatar width and height
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * 	Image url
     */
    src: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Avatar;
