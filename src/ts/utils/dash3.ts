/**
 * Utility functions to support both Dash 2 and Dash 3 components
 *
 * For more details, refer to the Dash documentation:
 * Dash 3 for Component Developers - https://dash.plotly.com/dash-3-for-component-developers
 */

import React from "react";
import { DashBaseProps } from "props/dash";

export const setPersistence = (Component: any, props: string[] = ["value"]): void => {
    const persistence = { persisted_props: props, persistence_type: "local" };

    parseFloat(React.version) < 18.3
        ? (Component.defaultProps = persistence)
        : (Component.dashPersistence = persistence);
};


export const getLoadingState = (loading_state?: DashBaseProps["loading_state"]): boolean =>
    (window as any).dash_component_api
        ? (window as any).dash_component_api.useDashContext().useLoading()
        : loading_state?.is_loading ?? false;


export const getChildLayout = (child: any): { type: any; props: any } => {
    if ((window as any).dash_component_api) {
        return (window as any).dash_component_api.getLayout(child.props.componentPath);
    }

    return {
        type: child.props?._dashprivate_layout?.type,
        props: child.props?._dashprivate_layout?.props,
    };
};

export const getChildProps = (child: any): any => {
    return getChildLayout(child).props;
};


export const getLoadingStateChildren = (loading_state?: DashBaseProps["loading_state"], children?: any): boolean => {
    if ((window as any).dash_component_api) {
        //dash 3
        const ctx = (window as any).dash_component_api.useDashContext();
        const childArray = React.Children.toArray(children);

        // Get loading states for all children
        const loadingStates = childArray.map((child: any) =>
            ctx.useLoading({ rawPath: child.props?.componentPath })
        );

        // check if any are true
        return loadingStates.some(Boolean);
    }
    // dash 2
    return  loading_state?.is_loading ?? false;
};

