import {
    List as MantineList,
    MantineSize,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** `List.Item` components only */
    children?: React.ReactNode;
    /** List type: `ol` or `ul`, `'unordered'` by default */
    type?: "ordered" | "unordered";
    /** Determines whether list items should be offset with padding, `false` by default */
    withPadding?: boolean;
    /** Controls `font-size` and `line-height`, `'md'` by default */
    size?: MantineSize;
    /** Icon that replaces list item dot */
    icon?: React.ReactNode;
    /** Key of `theme.spacing` or any valid CSS value to set spacing between items, `0` by default */
    spacing?: MantineSpacing;
    /** Determines whether items must be centered with their icon, `false` by default */
    center?: boolean;
    /** Controls `list-style-type`, by default inferred from `type` */
    listStyleType?: React.CSSProperties["listStyleType"];
}

/** List */
const List = (props: Props) => {
    const { setProps, children, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineList
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineList>
    );
};

export default List;
