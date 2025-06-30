import React from 'react';
import { createStackComponent } from '../../../utils/stack-factory';
import { Drawer, useDrawersStack } from '@mantine/core';
import { DashBaseProps } from 'props/dash';

interface DrawerStackProps extends DashBaseProps {
    /** ManagedDrawer content */
    children?: React.ReactElement[];
    /** Current opened state of each drawer. Read only */
    state?: Record<string, boolean>;
    /** Opens one or more drawers by ID. Accepts a single ID (string or dict) or a list of IDs. */
    open?: string | Record<string, any> | (string | Record<string, any>)[];
    /** Closes one or more drawers by ID. Accepts a single ID (string or dict) or a list of IDs. */
    close?: string | Record<string, any> | (string | Record<string, any>)[];
    /** Toggles one or more drawers by ID. Accepts a single ID (string or dict) or a list of IDs. */
    toggle?: string | Record<string, any> | (string | Record<string, any>)[];
    /** Closes all drawers in the DrawerStack */
    closeAll?: boolean;
}

const DrawerStackComponent = createStackComponent({
    name: 'DrawerStack',
    useStackHook: useDrawersStack,
    OuterStack: Drawer.Stack,
    InnerComponent: Drawer,
    expectedType: 'ManagedDrawer',
});

/** Use DrawerStack to render multiple drawers at the same time */
const DrawerStack = (props: DrawerStackProps) => (
    <DrawerStackComponent {...props} />
);

export default DrawerStack;
