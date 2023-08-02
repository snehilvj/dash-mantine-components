import React from "react";
import { HoverCard as MantineHoverCard, Box } from "@mantine/core";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    PopoverBaseProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** HoverCard content */
    children?: React.ReactNode;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
} & PopoverBaseProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display popover section when target element is hovered */
const HoverCard = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineHoverCard {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "HoverCardTarget") {
                    return (
                        <MantineHoverCard.Target key={index}>
                            <Box style={{ width: "fit-content" }}>{child}</Box>
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
