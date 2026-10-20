import { Box, HoverCard as MantineHoverCard } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { PopoverProps } from 'props/popover';
import React from 'react';
import { getLoadingState, getChildLayout } from '../../../utils/dash3';

interface Props extends Omit<PopoverProps, 'opened'>, DashBaseProps {
    /** Initial opened state */
    initiallyOpened?: boolean;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
    /**
     * Determines which events open the dropdown. Fields that are not specified keep their default values.
     * default { "hover": True, "Focus": True, "touch": False }
     */
    events?: object;
    /**
      * If set, the dropdown stays open while the pointer travels from the target to the dropdown
      * and remains over it. Set it if the dropdown contains interactive content.
      * default false
      */
    interactive?: boolean;
    /**
     * Accessible relation between the target and the dropdown. `dialog` sets `aria-haspopup`,
     * `aria-expanded` and `aria-controls` on the target, `tooltip` sets `aria-describedby` instead
     * and should be used if the dropdown contains only descriptive content.
     * @efault 'dialog'
     */
    role?: 'dialog' | 'tooltip';
    /** Determines whether the dropdown should be closed when the user presses outside of the target and the dropdown @default true */
    closeOnClickOutside?: boolean;
    /** Not supported by `HoverCard`: outside press is always detected with the `pointerdown` event. Use `closeOnClickOutside` to disable it. */
    clickOutsideEvents?: string[];
    /**
     * Determines whether focus should be returned to the target when the dropdown closes.
     * Ignored when focus activation is enabled (`events.focus`, the default), otherwise moving
     * focus away from the target would return it and reopen the dropdown.
     * `Escape` pressed inside the dropdown always returns focus to the target.
     * default false
    */
    returnFocus?: boolean;
}

/** HoverCard */
const HoverCard = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineHoverCard
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {React.Children.map(children, (child: any, index) => {
                const { type: childType, props: childProps } =
                    getChildLayout(child);
                if (childType === 'HoverCardTarget') {
                    const { boxWrapperProps } = childProps;
                    return (
                        <MantineHoverCard.Target key={index}>
                            <Box w="fit-content" {...boxWrapperProps}>
                                {child}
                            </Box>
                        </MantineHoverCard.Target>
                    );
                }
                return child;
            })}
        </MantineHoverCard>
    );
};

export default HoverCard;
