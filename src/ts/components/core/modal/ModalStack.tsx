import React from 'react';
import { Modal, useModalsStack } from '@mantine/core';
import { createStackComponent } from '../../../utils/stack-factory';
import { DashBaseProps } from 'props/dash';

interface ModalStackProps extends DashBaseProps {
    /** ManagedModal content */
    children?: React.ReactElement[];
    /** Current opened state of each modal. Read only */
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

const ModalStackComponent = createStackComponent({
    name: 'ModalStack',
    useStackHook: useModalsStack,
    OuterStack: Modal.Stack,
    InnerComponent: Modal,
    expectedType: 'ManagedModal',
});

/** Use ModalStack component to render multiple modals at the same time.*/
const ModalStack = (props: ModalStackProps) => <ModalStackComponent {...props} />;
ModalStack.displayName = 'ModalStack';

export default ModalStack;
