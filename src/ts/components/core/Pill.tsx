import { Pill as MantinePill, MantineSize, MantineRadius } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
  /** Controls pill `font-size` and `padding` default 'sm' */
  size?: MantineSize;

  /** Controls visibility of the remove button default False */
  withRemoveButton?: boolean;

  /** Props passed down to the remove button */
  removeButtonProps?: object;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem.  default 'xl' */
  radius?: MantineRadius;

  /** Adds disabled attribute, applies disabled styles */
  disabled?: boolean;

  /** content */
  children?: React.ReactNode;
}

/** Pill - Removable and non-removable tags */
const Pill = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantinePill
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantinePill>
    );
};

export default Pill;
