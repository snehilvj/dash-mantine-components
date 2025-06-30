import { Modal as MantineModal } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { ModalProps } from 'props/modal';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useState } from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props
    extends Omit<DashBaseProps, 'id'>,
        Omit<ModalProps, 'opened'>,
        StylesApiProps {
    /** Unique ID to identify this component. Required for use with StackModal */
    id: string;
}

/**  Managed Model for StackModal */
const ManagedModal = ({
    children,
    setProps,
    loading_state,
    ...others
}: Props) => {
    return <>{children}</>;
};

export default ManagedModal;
