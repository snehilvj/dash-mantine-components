import { Modal, useModalsStack } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import React from 'react';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import {
    getChildLayout,
    getLoadingState,
    stringifyId,
} from '../../../utils/dash3';

interface Props extends DashBaseProps {
    /** ManagedModel content */
    children?: React.ReactElement[];
    /** Current opened state of each modal.  Read only */
    state?: Record<string, boolean>;
    /** Opens one or more modals by ID. Accepts a single ID (string or dict) or a list of IDs. */
    open?: string | Record<string, any> | (string | Record<string, any>)[];
    /** Closes one or more modals by ID. Accepts a single ID (string or dict) or a list of IDs. */
    close?: string | Record<string, any> | (string | Record<string, any>)[];
    /** Toggles one or more modals by ID. Accepts a single ID (string or dict) or a list of IDs. */
    toggle?: string | Record<string, any> | (string | Record<string, any>)[];
    /** Closes all modals in the ModalStack */
    closeAll?: boolean;
}

/** Use ModalStack component to render multiple modals at the same time.  */
const ModalStack = ({
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
    const modalIds = childrenArray
        .map((child) => {
            const { type, props } = getChildLayout(child);
            return type === 'ManagedModal' ? stringifyId(props.id) : null;
        })
        .filter(Boolean) as string[];

    // Initialize useModalsStack
    const stack = useModalsStack(modalIds);

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

    // Wrap each ManagedModal child with a <Modal>, registering it into the stack by ID
    const wrappedChildren = childrenArray.map((child, index) => {
        const { type, props } = getChildLayout(child);

        if (type !== 'ManagedModal') {
            throw new Error(
                `StackModal only accepts 'ManagedModal' components as children. Received: '${type}'.`
            );
        }

        const { children: modalContent, ...modalProps } = props;

        return (
            <Modal
                key={index}
                {...modalProps}
                {...stack.register(stringifyId(props.id))}
            >
                {child}
            </Modal>
        );
    });

    return (
        <Modal.Stack
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {wrappedChildren}
        </Modal.Stack>
    );
};

export default ModalStack;
