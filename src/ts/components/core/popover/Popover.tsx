import React from "react";
import { Popover as MantinePopover, Box } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    PopoverProps,
} from "props/mantine";

type Props = PopoverProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display popover section relative to given target element */
const Popover = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantinePopover {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "PopoverTarget") {
                    return (
                        <MantinePopover.Target key={index}>
                            <Box style={{ width: "fit-content" }}>{child}</Box>
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
