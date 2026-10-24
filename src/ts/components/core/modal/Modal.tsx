import { Modal as MantineModal } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { ModalProps } from 'props/modal';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props
    extends ModalProps,
        Omit<StylesApiProps, 'attributes'>,
        DashBaseProps {}

/** Modal */
const Modal = ({
    children,
    setProps,
    loading_state,
    opened = false,
    ...others
}: Props) => {

    const onClose = () => {
        setProps({opened: false});
    };

    return (
        <MantineModal
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            opened={opened}
            onClose={onClose}
            {...others}
        >
            {children}
        </MantineModal>
    );
};

export default Modal;
