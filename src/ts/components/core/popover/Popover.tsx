import { Box, Popover as MantinePopover } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends PopoverProps, DashBaseProps {}

/** The Popover component can be used to display additional content in a dropdown element, triggered by a user interaction with a target element. */
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
                const {type: childType, props: childProps} =
                    window.dash_clientside.get_layout(child.props.componentPath);

                if (childType === "PopoverTarget") {
                    const { boxWrapperProps } = childProps;

                    return (
                        <MantinePopover.Target key={index}>
                            <Box
                                w="fit-content" {...boxWrapperProps}
                                onClick={() => setProps({ opened: !opened })}
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
