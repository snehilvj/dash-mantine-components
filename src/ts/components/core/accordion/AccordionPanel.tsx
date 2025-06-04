import { Accordion } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** AccordionPanel */
const AccordionPanel = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return <Accordion.Panel {...others}>{children}</Accordion.Panel>;
};

export default AccordionPanel;
