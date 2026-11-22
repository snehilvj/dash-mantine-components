import { FloatingWindow } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends BoxProps, DashBaseProps {
    /** Handle content, such as an icon or text. Style and position the handle with Box props. */
    children?: React.ReactNode;
}

/** Pointer and keyboard resize handle inside a FloatingWindow. */
const FloatingWindowResizeHandle = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <FloatingWindow.ResizeHandle
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </FloatingWindow.ResizeHandle>
    );
};

export default FloatingWindowResizeHandle;
