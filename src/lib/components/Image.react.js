import React from "react";
import PropTypes from "prop-types";
import { Image as MantineImage } from "@mantine/core";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Image with optional placeholder for loading and error state. For more information, see: https://mantine.dev/core/image/
 */
const Image = (props) => {
    const { class_name, placeholder } = props;
    return (
        <MantineImage
            {...omit(["setProps", "class_name", "placeholder"], props)}
            className={class_name}
            placeholder={renderDashComponent(placeholder)}
        />
    );
};

Image.displayName = "Image";

Image.defaultProps = {};

Image.propTypes = {
    /**
     * Image alt text, used as title for placeholder if image was not loaded
     */
    alt: PropTypes.string,

    /**
     * Image figcaption, displayed bellow image
     */
    caption: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Image object-fit property
     */
    fit: PropTypes.oneOf(["cover", "contain"]),

    /**
     * Image height, defaults to original image height adjusted to given width
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Customize placeholder content
     */
    placeholder: PropTypes.any,

    /**
     * Predefined border-radius value from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Image src
     */
    src: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Image width, defaults to 100%, cannot exceed 100%
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Enable placeholder when image is loading and when image fails to load
     */
    withPlaceholder: PropTypes.bool,
};

export default Image;
