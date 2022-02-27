import { Avatar as MantineAvatar } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
// import { renderDashComponent } from "dash-extensions-js";

const Avatar = (props) => {

    return (
        <MantineAvatar {...omit(["setProps"], props)} />
    )
}

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
    color: "gray",
    radius: "sm",
    size: "md"
};

Avatar.propTypes = {
    /**
     * Image alt text or title for placeholder variant
     */
    alt: PropTypes.string,

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
     * Tag or component that should be used as root element
     * 
     * "symbol" | "object" | "clipPath" | "filter" | "mask" | "marker" | 
     * "label" | "big" | "link" | "small" | "sub" | "sup" | "button" | 
     * "meter" | "textarea" | "style" | "progress" | "text" | 
     * ... 158 more ... | FunctionComponent<...>
     */
    component: PropTypes.any,

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

};

export default Avatar;


