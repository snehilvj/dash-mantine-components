import { Highlight as MantineHighlight, MantineColor } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { TextProps } from 'props/text';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends DashBaseProps, Omit<TextProps, 'color'> {
    /**
     * Substring(s) to highlight in `children`.
     * Can be a string for a single term, a list of strings for multiple terms
     * with the same color, or a list of dictionaries for multiple terms with
     * custom colors.
     */
    highlight: any;

    /**
     * Default background color for all highlighted text.
     * Key of `theme.colors` or any valid CSS color, passed to `Mark` component.
     * Can be overridden per term when using HighlightTerm objects.
     * default 'yellow'
     */
    color?: MantineColor | string;

    /** Styles applied to `mark` elements */
    highlightStyles?: {};

    /** String in which to highlight substrings */
    children: string;

    /**
     * Only match whole words (adds word boundaries to regex).
     * When enabled, 'the' will not match 'there'.
     * default False
     */
    wholeWord?: boolean;

    /**
     * Perform case-insensitive matching.
     * default True
     */
    caseInsensitive?: boolean;

    /**
     * Perform accent-insensitive matching.
     * When enabled, cafe will match cafe, café, cafè, etc.
     * default True
     */
    accentInsensitive?: boolean;
}

/** Highlight */
const Highlight = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineHighlight
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineHighlight>
    );
};

export default Highlight;