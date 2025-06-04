import { BoxProps } from 'props/box';
import React from 'react';

interface Props {
    /** Content */
    children: React.ReactNode;
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** MenuTarget */
const MenuTarget = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

export default MenuTarget;
