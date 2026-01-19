import {
    MantineColor,
    MantineRadius,
    MantineSize,
    Switch as MantineSwitch,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { setPersistence } from '../../utils/dash3';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Content of the `label` associated with the radio */
    label?: React.ReactNode;
    /** Inner label when the `Switch` is in unchecked state */
    offLabel?: React.ReactNode;
    /** Inner label when the `Switch` is in checked state */
    onLabel?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of all elements */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
    radius?: MantineRadius | number;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Icon inside the thumb of the switch */
    thumbIcon?: React.ReactNode;
    /** Position of the label relative to the input, `'right'` by default */
    labelPosition?: 'left' | 'right';
    /** Description displayed below the label */
    description?: React.ReactNode;
    /** Error displayed below the label */
    error?: React.ReactNode;
    /** A checkbox can show it is currently unable to be interacted with */
    disabled?: boolean;
    /** State of check box */
    checked?: boolean;
    /** If set, the indicator will be displayed inside thumb, `true` by default */
    withThumbIndicator?: boolean;
}

/** Switch */
const Switch = (props: Props) => {
    const {
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const updateProps = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <MantineSwitch
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...others}
        />
    );
};

setPersistence(Switch, ['checked']);

export default Switch;
