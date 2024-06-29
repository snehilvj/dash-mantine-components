import { MantineSize, Radio } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { InputWrapperProps } from "props/input";
import React from "react";

interface Props extends InputWrapperProps, DashBaseProps, PersistenceProps {
    /** `Radio` components and any other elements */
    children: React.ReactNode;
    /** Controlled component value */
    value?: string;
    /** Props passed down to the `Input.Wrapper` */
    wrapperProps?: Record<string, any>;
    /** Controls size of the `Input.Wrapper`, `'sm'` by default */
    size?: MantineSize;
    /** `name` attribute of child radio inputs. By default, `name` is generated randomly. */
    name?: string;
    /** If set, value cannot be changed */
    readOnly?: boolean;
}

/** RadioGroup */
const RadioGroup = (props: Props) => {
    const {
        children,
        value,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <Radio.Group onChange={onChange} value={value} {...others}>
            {children}
        </Radio.Group>
    );
};

RadioGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default RadioGroup;
