import { Box, Popover as MantinePopover } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends PopoverProps, DashBaseProps {
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** Popover */
const Popover = (props: Props) => {
    const { children, setProps, boxWrapperProps, ...other } = props;
    const boxProps = { w: "fit-content", ...boxWrapperProps };

    return (
        <MantinePopover {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "PopoverTarget") {
                    return (
                        <MantinePopover.Target key={index}>
                            <Box {...boxProps}>{child}</Box>
                        </MantinePopover.Target>
                    );
                }
                return child;
            })}
        </MantinePopover>
    );
};

Popover.defaultProps = {};

export default Popover;
