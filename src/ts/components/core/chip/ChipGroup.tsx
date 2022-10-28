import React from "react";
import { DefaultProps } from "../../../props";
import { Chip } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";
import { GroupPosition } from "@mantine/core/lib/Group";

type Props = {
    /** Chip components only */
    children?: React.ReactNode;
    /** Value of currently selected Chip */
    value?: string[];
    /** Allow multiple values to be selected at a time */
    multiple?: boolean;
    /** Defines justify-content property */
    position?: GroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Space between elements */
    spacing?: MantineNumberSize;
    /** Defines align-items css property */
    align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
} & DefaultProps;

/**
 * Pick one or multiple values with inline controls. For more information, see: https://mantine.dev/core/chip/
 */
const ChipGroup = (props: Props) => {
    const { children, setProps, ...other } = props;

    const onChange = (value: string[]) => {
        setProps({ value });
    };

    return (
        <Chip.Group onChange={onChange} {...other}>
            {children}
        </Chip.Group>
    );
};

ChipGroup.defaultProps = {};

export default ChipGroup;
