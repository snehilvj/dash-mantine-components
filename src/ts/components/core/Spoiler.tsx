import { Spoiler as MantineSpoiler } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Maximum height of visible content in px. When content exceeds this height, the toggle control appears default 100 */
    maxHeight?: number;
    /** Content displayed in the toggle button when content is collapsed (to expand) */
    showLabel: React.ReactNode;
    /** Content displayed in the toggle button when content is expanded (to collapse) */
    hideLabel: React.ReactNode;
    /** Initial expanded state in uncontrolled mode. If `true`, content starts expanded. If `false`, content starts collapsed default false */
    defaultExpanded?: boolean;
    /** Controlled expanded state value */
    expanded?: boolean;
    /** Spoiler reveal transition duration in ms. Set to 0 to disable animation default 200 */
    transitionDuration?: number;
    /** Accessible label for the toggle button when collapsed. If not set, `showLabel` is used */
    showAriaLabel?: string;
    /** Accessible label for the toggle button when expanded. If not set, `hideLabel` is used */
    hideAriaLabel?: string;
    /** Content */
    children?: React.ReactNode;
}

/** Hide long sections of content under a spoiler */
const Spoiler = ({
    setProps,
    loading_state,
    expanded = false,
    children,
    ...others
}: Props) => {
    const [opened, setOpened] = useState(expanded);

    useDidUpdate(() => {
        setProps({ expanded: opened });
    }, [opened]);

    useDidUpdate(() => {
        setOpened(expanded);
    }, [expanded]);

    return (
        <MantineSpoiler
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            expanded={opened}
            onExpandedChange={setOpened}
            {...others}
        >
            {children}
        </MantineSpoiler>
    );
};

export default Spoiler;
