import React from "react";
import { MantineStyleSystemProps } from "../../../props";

type Props = {
    /** Menu target */
    children?: React.ReactNode;
} & MantineStyleSystemProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuTarget = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

MenuTarget.defaultProps = {};

export default MenuTarget;
