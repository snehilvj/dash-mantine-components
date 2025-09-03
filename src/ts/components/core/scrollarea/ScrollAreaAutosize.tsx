import { ScrollArea  } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { ScrollAreaProps } from 'props/scrollarea';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends ScrollAreaProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** ScrollArea */
const ScrollAreaAutosize = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <ScrollArea.Autosize
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </ScrollArea.Autosize>
    );
};

export default ScrollAreaAutosize;