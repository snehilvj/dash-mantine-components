import { Box, Popover as MantinePopover } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends PopoverProps, DashBaseProps {}

/** Popover Component */
const Popover = (props: Props) => {
    const { children, opened, setProps, loading_state, ...others } = props;

    return (
        <MantinePopover
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            opened={opened}
            onChange={(_opened) => !_opened && setProps({ opened: false })}
            {...others}
        >
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;

                if (childType === "PopoverTarget") {
                    const { boxWrapperProps } = child.props;
                    const boxProps = { w: "fit-content", ...boxWrapperProps };

                    return (
                        <MantinePopover.Target key={index}>
                            <Box
                                onClick={() => setProps({ opened: !opened })}
                                {...boxProps}
                            >
                                {child}
                            </Box>
                        </MantinePopover.Target>
                    );
                }
                return child;
            })}
        </MantinePopover>
    );
};

Popover.defaultProps = {
    opened: false,
};

export default Popover;
