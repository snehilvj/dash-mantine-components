import { Box, Popover as MantinePopover } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends PopoverProps, DashBaseProps {}

/** Popover */
const Popover = (props: Props) => {
    const { children, setProps, ...others } = props;

    return (
        <MantinePopover {...others}>
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "PopoverTarget") {
                    const { boxWrapperProps } = child.props;
                    const boxProps = { w: "fit-content", ...boxWrapperProps };
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
