import React, { useCallback } from "react";
import { DashComponentProps } from "../../../props";
import { Chip } from "@mantine/core";
import { MantineSize } from "@mantine/styles";
import { GroupPosition } from "@mantine/core/lib/Group";

type Props = {
    /** Chip components only */
    children?: React.ReactNode;
    /** Value of currently selected Chip */
    value?: string[];
    /** Space between label and inputs */
    offset?: MantineSize;
    /** Predefined label fontSize, Chip width, height and border-radius */
    size?: MantineSize;
    /** Allow multiple values to be selected at a time */
    multiple?: boolean;
    /** Defines justify-content property */
    position?: GroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Space between elements */
    spacing?: MantineSize;
    /** Defines align-items css property */
    align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
} & DashComponentProps;

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/Chip/
 */
const ChipGroup = (props: Props) => {
    const { children, value, setProps, ...other } = props;

    const onChange = useCallback(
        (value) => {
            setProps({ value });
        },
        [value]
    );

    return (
        <Chip.Group onChange={onChange} {...other}>
            {children}
        </Chip.Group>
    );
};

ChipGroup.defaultProps = {};

export default ChipGroup;
