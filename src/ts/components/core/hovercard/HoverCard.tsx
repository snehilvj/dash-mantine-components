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

/** Use HoverCard to display popover section when target element is hovered */
const HoverCard = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineHoverCard
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {React.Children.map(children, (child: any, index) => {
                const {type: childType, props: childProps} = window.dash_clientside.get_layout(child.props.componentPath);
                if (childType === "HoverCardTarget") {
                    const { boxWrapperProps } = childProps;
                    return (
                        <MantineHoverCard.Target key={index}>
                            <Box w="fit-content" {...boxWrapperProps}>{child}</Box>
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
