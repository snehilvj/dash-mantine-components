import React from "react";
import PropTypes from "prop-types";
import { BackgroundImage as MantineBackgroundImage } from "@mantine/core";

/**
 * Use when you need to display image below any content. For more information, see: https://mantine.dev/core/image/
 */
const BackgroundImage = (props) => {
    const { children, radius, src } = props;

    return (
        <MantineBackgroundImage radius={radius} src={src}>
            {children}
        </MantineBackgroundImage>
    );
};

BackgroundImage.displayName = "BackgroundImage";

BackgroundImage.defaultProps = {};

BackgroundImage.propTypes = {
    /**
     * Contents
     */
    children: PropTypes.node,

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
};

export default BackgroundImage;
