import { Box, HoverCard as MantineHoverCard } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends Omit<PopoverProps, "opened">, DashBaseProps {
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
    /** Target box wrapper props */
    boxWrapperProps?: BoxProps;
}

/** HoverCard */
const HoverCard = (props: Props) => {
    const { children, setProps, boxWrapperProps, ...other } = props;
    const boxProps = { w: "fit-content", ...boxWrapperProps };

    return (
        <MantineHoverCard {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "HoverCardTarget") {
                    return (
                        <MantineHoverCard.Target key={index}>
                            <Box {...boxProps}>{child}</Box>
                        </MantineHoverCard.Target>
                    );
                }
                return child;
            })}
        </MantineHoverCard>
    );
};

HoverCard.defaultProps = {};

export default HoverCard;
