import React from "react";
import { GroupPosition, Pagination as MantinePagination } from "@mantine/core";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { AlignItems } from "props/css";

type Props = {
    /** Controls height and min-width */
    size?: MantineNumberSize;
    /** Total number of pages, must be an integer */
    total: number;
    /** Active page for controlled component, must be an integer in [0, total] interval */
    value?: number;
    /** Determines whether all controls should be disabled, false by default */
    disabled?: boolean;
    /** Number of siblings displayed on the left/right side of selected page, 1 by default */
    siblings?: number;
    /** Number of elements visible on the left/right edges, 1 by default */
    boundaries?: number;
    /** Key of theme.colors, active item color, theme.primaryColor by default */
    color?: MantineColor;
    /** Key of theme.radius, border-radius of items and controls, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Determines whether first/last controls should be rendered, false by default */
    withEdges?: boolean;
    /** Determines whether next/previous controls should be rendered, true by default */
    withControls?: boolean;
    /** Defines justify-content property */
    position?: GroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Space between elements */
    spacing?: MantineNumberSize;
    /** Defines align-items css property */
    align?: AlignItems;
} & DashBaseProps &
    PersistenceProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display active page and navigate between multiple pages */
const Pagination = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: number) => {
        setProps({ value });
    };

    return <MantinePagination {...other} onChange={onChange} />;
};

Pagination.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Pagination;
