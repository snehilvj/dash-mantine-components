import React from 'react';
import { useDidUpdate } from '@mantine/hooks';
import { getChildLayout, getLoadingState, stringifyId } from './dash3';
import { DashBaseProps } from 'props/dash';

interface StackProps extends DashBaseProps {
    children?: React.ReactElement[];
    state?: Record<string, boolean>;
    open?: string | Record<string, any> | (string | Record<string, any>)[];
    close?: string | Record<string, any> | (string | Record<string, any>)[];
    toggle?: string | Record<string, any> | (string | Record<string, any>)[];
    closeAll?: boolean;
}

export function createStackComponent({
    name,
    useStackHook,
    OuterStack,
    InnerComponent,
    expectedType,
}: {
    name: string;
    useStackHook: (ids: string[]) => any;
    OuterStack: React.ComponentType<any>;
    InnerComponent: React.ComponentType<any>;
    expectedType: string;
}) {
    const StackComponent = ({
        children,
        setProps,
        loading_state,
        open,
        close,
        toggle,
        closeAll,
        state,
        ...others
    }: StackProps) => {
        const childrenArray = React.Children.toArray(children);

        const ids = childrenArray
            .map((child) => {
                const { type, props } = getChildLayout(child);
                return type === expectedType ? stringifyId(props.id) : null;
            })
            .filter(Boolean) as string[];

        const stack = useStackHook(ids);

        useDidUpdate(() => {
            const openArray = Array.isArray(open) ? open : open ? [open] : [];
            openArray.forEach((id) => stack.open(stringifyId(id)));
        }, [open]);

        useDidUpdate(() => {
            const closeArray = Array.isArray(close)
                ? close
                : close
                  ? [close]
                  : [];
            closeArray.forEach((id) => stack.close(stringifyId(id)));
        }, [close]);

        useDidUpdate(() => {
            const toggleArray = Array.isArray(toggle)
                ? toggle
                : toggle
                  ? [toggle]
                  : [];
            toggleArray.forEach((id) => stack.toggle(stringifyId(id)));
        }, [toggle]);

        useDidUpdate(() => {
            if (closeAll) {
                stack.closeAll();
            }
        }, [closeAll]);

        useDidUpdate(() => {
            setProps?.({
                state: stack.state,
                toggle: null,
                close: null,
                open: null,
                closeAll: false,
            });
        }, [stack.state]);

        const wrappedChildren = childrenArray.map((child, index) => {
            const { type, props } = getChildLayout(child);
            if (type !== expectedType) {
                throw new Error(
                    `${name} only accepts '${expectedType}' components. Received: '${type}'.`
                );
            }

            const { children: content, ...innerProps } = props;

            return (
                <InnerComponent
                    key={index}
                    {...innerProps}
                    {...stack.register(stringifyId(props.id))}
                >
                    {child}
                </InnerComponent>
            );
        });

        return (
            <OuterStack
                data-dash-is-loading={
                    getLoadingState(loading_state) || undefined
                }
                {...others}
            >
                {wrappedChildren}
            </OuterStack>
        );
    };

    StackComponent.displayName = name;
    return StackComponent;
}
