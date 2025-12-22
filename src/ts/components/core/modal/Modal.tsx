import { Modal as MantineModal } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { ModalProps } from 'props/modal';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useState } from 'react';
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
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    return (
        <MantineModal
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            opened={open}
            onClose={onClose}
            {...others}
        >
            {children}
        </MantineModal>
    );
};

export default Modal;
