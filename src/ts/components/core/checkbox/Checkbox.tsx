import {
    Checkbox as MantineCheckbox,
    MantineColor,
    MantineRadius,
    MantineSize,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import {
    setPersistence,
    getLoadingState,
    applyDashProps,
} from '../../../utils/dash3';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Content of the `label` associated with the checkbox */
    label?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color to set input background color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of the component, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Position of the label relative to the input, `'right'` by default */
    labelPosition?: 'left' | 'right';
    /** Description displayed below the label */
    description?: React.ReactNode;
    /** Error message displayed below the label */
    error?: React.ReactNode;
    /** Indeterminate state of the checkbox. If set, `checked` prop is ignored. */
    indeterminate?: boolean;
    /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
    iconColor?: MantineColor;
    /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** To be used with checkbox group */
    value?: string;
    /** State of check box */
    checked?: boolean;
    /** Whether component is disabled */
    disabled?: boolean;
    /** Icon */
    icon?: React.ReactNode;
    /** Indeterminate icon */
    indeterminateIcon?: React.ReactNode;
}

/** Checkbox */
const Checkbox = ({
    setProps,
    loading_state,
    persistence,
    persisted_props,
    persistence_type,
    icon,
    indeterminateIcon,
    ...others
}: Props) => {
    const iconFunc = ({ indeterminate, ...others }) => {
        const selected: any = indeterminate ? indeterminateIcon : icon;
        return applyDashProps(selected, others);
    };

    return (
        <MantineCheckbox
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onChange={(ev) => setProps({ checked: ev.currentTarget.checked })}
            icon={icon || indeterminateIcon ? iconFunc : undefined}
            {...others}
        />
    );
};

setPersistence(Checkbox, ['checked']);

export default Checkbox;
