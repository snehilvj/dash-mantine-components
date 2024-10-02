import { Box, HoverCard as MantineHoverCard } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { PopoverProps } from "props/popover";
import React from "react";

interface Props extends Omit<PopoverProps, "opened">, DashBaseProps {
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
}

/** HoverCard */
const HoverCard = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineHoverCard
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {React.Children.map(children, (child: any, index) => {
                const childType = child.props._dashprivate_layout.type;
                if (childType === "HoverCardTarget") {
                    const { boxWrapperProps } = child.props;
                    const boxProps = { w: "fit-content", ...boxWrapperProps };
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
