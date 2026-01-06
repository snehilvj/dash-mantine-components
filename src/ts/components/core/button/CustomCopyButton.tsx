import { CopyButton as MantineCopyButton } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import React from 'react';
import { resolveProp } from '../../../utils/prop-functions';

interface Props {
    /** Value to be copied to clipboard */
    value: string;
    /** Copied status timeout in ms, `1000` by default */
    timeout?: number;
    /** Function that receives {copied, copy} and returns a component  See https://www.dash-mantine-components.com/functions-as-props*/
    children?: any;
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
}

/** CustomCopyButton - custom component with copy to clipboard functionality */
const CustomCopyButton = ({
    value,
    timeout = 1000,
    children,
    setProps,
}: Props) => {
    return (
        <MantineCopyButton value={value} timeout={timeout}>
            {({ copied, copy }) => {
                const renderFunc = resolveProp(children);

                // If resolveProp returns a function, call it with {copied, copy}
                if (typeof renderFunc === 'function') {
                    return renderFunc({ copied, copy });
                }
                // Otherwise return the resolved value directly
                return renderFunc;
            }}
        </MantineCopyButton>
    );
};

export default CustomCopyButton;
