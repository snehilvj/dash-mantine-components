import { Checkbox, MantineSize } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { InputWrapperProps } from 'props/input';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps,
        InputWrapperProps {
    /** `Checkbox` components and any other elements */
    children: React.ReactNode;
    /** Controlled component value */
    value?: string[];
    /** Props passed down to the root element (`Input.Wrapper` component) */
    wrapperProps?: Record<string, any>;
    /** Controls size of the `Input.Wrapper`, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** If set, value cannot be changed */
    readOnly?: boolean;
}

/** CheckboxGroup */
const CheckboxGroup = ({
    children,
    setProps,
    loading_state,
    persistence,
    persisted_props,
    persistence_type,
    value = [],
    ...others
}: Props) => {
    const onChange = (value: string[]) => {
        setProps({ value });
    };

    return (
        <Checkbox.Group
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onChange={onChange}
            value={value}
            {...others}
        >
            {children}
        </Checkbox.Group>
    );
};

setPersistence(CheckboxGroup);

export default CheckboxGroup;
