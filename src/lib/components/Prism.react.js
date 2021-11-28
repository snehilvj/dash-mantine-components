import React from "react";
import { Prism as MantinePrism } from "@mantine/prism";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { MantineColors } from "../propTypes";

/** Code highlight with Mantine theme colors and styles. For more information, see: https://mantine.dev/others/prism/ */
const Prism = (props) => {
    return (
        <MantinePrism {...omit(["code", "setProps"], props)}>
            {props.code}
        </MantinePrism>
    );
};

Prism.displayName = "Prism";

Prism.defaultProps = {};

Prism.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /**	Code which will be highlighted */
    code: PropTypes.string.isRequired,

    /**	Force color scheme, defaults to theme.colorScheme */
    colorScheme: PropTypes.oneOf(["light", "dark"]),

    /** Copy button tooltip in copied state */
    copiedLabel: PropTypes.string,

    /** Copy button tooltip */
    copyLabel: PropTypes.string,

    /**	Highlight line at given line number with color from theme.colors */
    highlightLines: PropTypes.objectOf(
        PropTypes.exact({
            color: MantineColors,
            label: PropTypes.string,
        })
    ),

    /**	Programming language that should be highlighted */
    language: PropTypes.oneOf([
        "markup",
        "bash",
        "clike",
        "c",
        "cpp",
        "css",
        "javascript",
        "jsx",
        "coffeescript",
        "actionscript",
        "css-extr",
        "diff",
        "git",
        "go",
        "graphql",
        "handlebars",
        "json",
        "less",
        "makefile",
        "markdown",
        "objectivec",
        "ocaml",
        "python",
        "reason",
        "sass",
        "scss",
        "sql",
        "stylus",
        "tsx",
        "typescript",
        "wasm",
        "yaml",
    ]).isRequired,

    /**	True to remove copy to clipboard button */
    noCopy: PropTypes.bool,

    /**	Display line numbers */
    withLineNumbers: PropTypes.bool,

    /** Inline style override */
    style: PropTypes.object,
};

export default Prism;
