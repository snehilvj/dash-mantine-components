import { GroupPosition, Group as MantineGroup } from "@mantine/core";
import { AlignItems } from "props/css";
import { DashBaseProps } from "props/dash";
import {
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    MantineNumberSize,
} from "props/mantine";
import React from "react";

type Props = {
    /** Children */
    children?: React.ReactNode;
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
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Compose elements and components in horizontal flex container */
const Group = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineGroup {...other}>{children}</MantineGroup>;
};

Group.defaultProps = {};

export default Group;
