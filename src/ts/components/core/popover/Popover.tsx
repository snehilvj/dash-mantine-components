import { Box, Popover as MantinePopover } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";
import { getLoadingState, getChildLayout } from "../../../utils/dash3";

interface Props extends PopoverProps, DashBaseProps {}

/** The Popover component can be used to display additional content in a dropdown element, triggered by a user interaction with a target element. */
const Popover = ({ children, opened = false, setProps, loading_state, ...others }: Props) => {

    return (
        <MantinePopover
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            opened={opened}
            onChange={(_opened) => !_opened && setProps({ opened: false })}
            {...others}
        >
            {React.Children.map(children, (child: any, index) => {
                const { type: childType, props: childProps } = getChildLayout(child);

                if (childType === "PopoverTarget") {
                    const { boxWrapperProps } = childProps;
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
