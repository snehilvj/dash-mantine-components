import { createStackComponent } from '../../../utils/stack-factory';
import { Modal, useModalsStack } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
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
const ModalStack = createStackComponent({
    name: 'ModalStack',
    useStackHook: useModalsStack,
    OuterStack: Modal.Stack,
    InnerComponent: Modal,
    expectedType: 'ManagedModal',
});

export default ModalStack;
