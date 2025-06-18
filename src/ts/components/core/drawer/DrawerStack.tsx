import { Drawer, useDrawersStack } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import React from 'react';
import { DashBaseProps } from 'props/dash';
import {
    getChildLayout,
    getLoadingState,
    stringifyId,
} from '../../../utils/dash3';

interface Props extends DashBaseProps {
    /** ManagedModel content */
    children?: React.ReactElement[];
    /** Current opened state of each drawer.  Read only */
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

/** Use DrawerStack component to render multiple drawers at the same time.  */
const DrawerStack = ({
    children,
    setProps,
    loading_state,
    open,
    close,
    toggle,
    closeAll,
    state,
    ...others
}: Props) => {
    const childrenArray = React.Children.toArray(children);

    // get ids of ManagedModels
    const drawerIds = childrenArray
        .map((child) => {
            const { type, props } = getChildLayout(child);
            return type === 'ManagedDrawer' ? stringifyId(props.id) : null;
        })
        .filter(Boolean) as string[];

    // Initialize useDrawersStack
    const stack = useDrawersStack(drawerIds);

    useDidUpdate(() => {
        const openArray = Array.isArray(open) ? open : open ? [open] : [];
        if (openArray.length > 0) {
            openArray.forEach((id) => stack.open(stringifyId(id)));
        }
    }, [open]);

    useDidUpdate(() => {
        const closeArray = Array.isArray(close) ? close : close ? [close] : [];
        if (closeArray.length > 0) {
            closeArray.forEach((id) => stack.close(stringifyId(id)));
        }
    }, [close]);

    useDidUpdate(() => {
        const toggleArray = Array.isArray(toggle)
            ? toggle
            : toggle
              ? [toggle]
              : [];
        if (toggleArray.length > 0) {
            toggleArray.forEach((id) => stack.toggle(stringifyId(id)));
        }
    }, [toggle]);

    useDidUpdate(() => {
        if (closeAll) {
            stack.closeAll();
        }
    }, [closeAll]);

    useDidUpdate(() => {
        const currentState = stack.state;
        setProps({
            state: currentState,
            toggle: null,
            close: null,
            open: null,
            closeAll: false,
        });
    }, [stack]);

    // Wrap each ManagedDrawer child with a <Drawer>, registering it into the stack by ID
    const wrappedChildren = childrenArray.map((child, index) => {
        const { type, props } = getChildLayout(child);

        if (type !== 'ManagedDrawer') {
            throw new Error(
                `StackDrawer only accepts 'ManagedDrawer' components as children. Received: '${type}'.`
            );
        }

        const { children: drawerContent, ...drawerProps } = props;

        return (
            <Drawer
                key={index}
                {...drawerProps}
                {...stack.register(stringifyId(props.id))}
            >
                {child}
            </Drawer>
        );
    });

    return (
        <Drawer.Stack
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {wrappedChildren}
        </Drawer.Stack>
    );
};

export default DrawerStack;
