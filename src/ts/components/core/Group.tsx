import React from "react";
import { DefaultProps, AlignContentProps } from "../../props";
import { Group as MantineGroup, GroupPosition } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

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
    align?: AlignContentProps;
} & DefaultProps;

/**
 * Compose elements and components in horizontal flex container. For more information, see: https://mantine.dev/core/group/
 */
const Group = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineGroup {...other}>{children}</MantineGroup>;
};

Group.defaultProps = {};

export default Group;
