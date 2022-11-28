import React from "react";
import { DashBaseProps, PopoverBaseProps } from "../../../props";
import { HoverCard as MantineHoverCard, Box } from "@mantine/core";

type Props = {
    /** HoverCard content */
    children?: React.ReactNode;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
} & PopoverBaseProps &
    DashBaseProps;

/**
 * Display popover section when target element is hovered. For more information, see: https://mantine.dev/core/hover-card/
 */
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
