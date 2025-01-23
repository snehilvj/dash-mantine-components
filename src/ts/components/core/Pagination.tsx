import {
    MantineColor,
    Pagination as MantinePagination,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
        PersistenceProps,
        DashBaseProps {
    /** Determines whether first/last controls should be rendered, false by default */
    withEdges?: boolean;
    /** Determines whether next/previous controls should be rendered, true by default */
    withControls?: boolean;
    /** Key of `theme.spacing`, gap between controls, `8` by default */
    gap?: MantineSize | (string & {}) | number;
    /** `height` and `min-width` of controls, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Total number of pages, must be an integer */
    total: number;
    /** Active page for controlled component, must be an integer in [0, total] interval */
    value?: number;
    /** Determines whether all controls should be disabled, `false` by default */
    disabled?: boolean;
    /** Number of siblings displayed on the left/right side of the selected page, `1` by default */
    siblings?: number;
    /** Number of elements visible on the left/right edges, `1` by default */
    boundaries?: number;
    /** Key of `theme.colors`, active item color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Determines whether active item text color should depend on `background-color` of the indicator. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Determines whether the pagination should be hidden when only one page is available (total=1), False by default */
    hideWithOnePage?: boolean;
    /** Determines whether pages controls should be displayed, `true` by default */
    withPages?: boolean;
}

/** Use the Pagination component to display active page and navigate between multiple pages */
const Pagination = (props: Props) => {
    const {
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const onChange = (value: number) => {
        setProps({ value });
    };

    return (
        <MantinePagination
            {...others}
            onChange={onChange}
        />
    );
};

Pagination.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Pagination;
