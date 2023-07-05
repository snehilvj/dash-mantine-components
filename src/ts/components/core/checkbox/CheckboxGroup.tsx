import { Checkbox } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputWrapperBaseProps,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Chexkbox components */
    children: React.ReactNode;
    /** Value of selected checkboxes, use for controlled components */
    value?: string[];
    /** Controls label font-size and checkbox width and height */
    size?: MantineSize;
    /** Props added to Input.Wrapper component (root element) */
    wrapperProps?: Record<string, any>;
} & InputWrapperBaseProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    PersistenceProps;

/** Capture boolean input from user */
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
