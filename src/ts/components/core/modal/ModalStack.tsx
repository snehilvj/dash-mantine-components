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
    /** Opens modal with the given id */
    open?: string;
    /** Toggles modal with the given id */
    toggle?: string;
    /** Closes all modals in the StackModal */
    closeAll?: boolean;
}

/** Use ModalStack component to render multiple modals at the same time.  */
const ModalStack = ({
    children,
    setProps,
    loading_state,
    open,
    toggle,
    closeAll,
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
        if (open) {
            stack.open(stringifyId(open));
            setProps?.({ open: null });
        }
    }, [open]);

    useDidUpdate(() => {
        if (toggle) {
            stack.toggle(stringifyId(toggle));
            setProps?.({ toggle: null });
        }
    }, [toggle]);

    useDidUpdate(() => {
        if (closeAll) {
            stack.closeAll();
            setProps?.({ closeAll: false });
        }
    }, [closeAll]);

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
