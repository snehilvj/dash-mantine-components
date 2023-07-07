import { Radio } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputWrapperBaseProps,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** dmc.Radio components */
    children?: React.ReactNode;
    /** Value of currently selected radio */
    value?: string;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
    /** Props spread to root element */
    wrapperProps?: Record<string, any>;
    /** Name attribute of radio inputs */
    name?: string;
} & InputWrapperBaseProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    PersistenceProps;

/** Capture boolean input from user */
const RadioGroup = (props: Props) => {
    const {
        children,
        value,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <Radio.Group onChange={onChange} value={value} {...other}>
            {children}
        </Radio.Group>
    );
};

RadioGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default RadioGroup;
