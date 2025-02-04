/**
 * Utility functions to support both Dash 2 and Dash 3 components
 *
 * For more details, refer to the Dash documentation:
 * Dash 3 for Component Developers - https://dash.plotly.com/dash-3-for-component-developers
 */
import React from "react";
import { DashBaseProps } from "props/dash";

/** check for dash version */
export const isDash3 = (): boolean => {
    return !!(window as any).dash_component_api;
};

/** Apply persistence settings based on React version */
export const setPersistence = (Component: any, props: string[] = ["value"]): void => {
    const persistence = { persisted_props: props, persistence_type: "local" };

    if (parseFloat(React.version.substring(0, React.version.lastIndexOf('.'))) < 18.3) {
        Component.defaultProps = persistence;
    } else {
        Component.dashPersistence = persistence;
    }
};

/** Get the loading state for the current component */
export const getLoadingState = (loading_state?: DashBaseProps["loading_state"]): boolean => {
    return isDash3()
        ? (window as any).dash_component_api.useDashContext().useLoading()
        : loading_state?.is_loading ?? false;
};

/** Get layout information for a child component */
export const getChildLayout = (child: any): { type: any; props: any } => {
    if (isDash3()) {
        return (window as any).dash_component_api.getLayout(child.props.componentPath);
    }

    return {
        type: child.props?._dashprivate_layout?.type,
        props: child.props?._dashprivate_layout?.props,
    };
};

/** Get only the props of a child component */
export const getChildProps = (child: any): any => getChildLayout(child).props;

/** Get the loading state of child components */

export const getLoadingStateChildren = (
    loading_state?: DashBaseProps["loading_state"],
    children?: any
): boolean => {
    if (isDash3()) {
        const ctx = (window as any).dash_component_api.useDashContext();

        return React.Children.toArray(children).some(
            (child: any) => ctx.useLoading({ rawPath: child.props?.componentPath })
        );
    }

    return loading_state?.is_loading ?? false; // Dash 2 fallback
};



/** Apply props to a Dash component, handling Dash 2 & Dash 3 compatibility */
export const applyDashProps = (component: any, props: Record<string, any>) => {
    if (isDash3()) {
        return React.cloneElement(component, { ...props });
    }

    if (component.props?._dashprivate_layout?.props) {
        Object.assign(component.props._dashprivate_layout.props, props);
    }

    return component;
};
