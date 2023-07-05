import { Chip } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputWrapperBaseProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    /** Allow multiple values to be selected at a time */
    multiple?: boolean;
    /** Controlled component value */
    value?: string | string[];
    /** dmc.Chip components */
    children?: React.ReactNode;
} & PersistenceProps &
    InputWrapperBaseProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Pick one or multiple values with inline controls */
const ChipGroup = (props: Props) => {
    const {
        children,
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
        <Chip.Group onChange={onChange} {...other}>
            {children}
        </Chip.Group>
    );
};

ChipGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ChipGroup;
