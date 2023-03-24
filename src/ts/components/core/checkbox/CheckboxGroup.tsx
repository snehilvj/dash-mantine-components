import React from "react";
import {
    DefaultProps,
    PersistenceProps,
    InputWrapperBaseProps,
} from "../../../props";
import { Checkbox } from "@mantine/core";
import { MantineSize, MantineNumberSize } from "@mantine/styles";

type Props = {
    /** dmc.Checkbox components only */
    children?: React.ReactNode;
    /** Value of currently selected checkbox */
    value?: string[];
    /** Horizontal or vertical orientation */
    orientation?: "horizontal" | "vertical";
    /** Spacing between checkboxes in horizontal orientation */
    spacing?: MantineNumberSize;
    /** Space between label and inputs */
    offset?: MantineNumberSize;
    /** Predefined label fontSize, checkbox width, height and border-radius */
    size?: MantineSize;
} & InputWrapperBaseProps &
    PersistenceProps &
    DefaultProps;

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/
 */
const CheckboxGroup = (props: Props) => {
    const {
        children,
        value,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: string[]) => {
        setProps({ value });
    };

    return (
        <Checkbox.Group onChange={onChange} value={value} {...other}>
            {children}
        </Checkbox.Group>
    );
};

CheckboxGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default CheckboxGroup;
