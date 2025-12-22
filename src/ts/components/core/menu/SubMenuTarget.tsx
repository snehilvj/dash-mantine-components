import { BoxProps } from 'props/box';
import React from 'react';

interface Props {
    /** Content */
    children: React.ReactNode;
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** Sub MenuTarget */
const SubMenuTarget = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

export default SubMenuTarget;
