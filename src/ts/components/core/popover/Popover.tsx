import { Box, Popover as MantinePopover } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends PopoverProps, DashBaseProps {}

/** Popover */
const Popover = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantinePopover
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
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
