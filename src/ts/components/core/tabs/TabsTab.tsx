import { MantineColor, Tabs } from "@mantine/core";
import { Props as UnstyledButtonProps } from "components/core/button/UnstyledButton";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends Omit<
            UnstyledButtonProps,
            "n_clicks" | "variant" | "classNames" | "styles" | "vars"
        >,
        DashBaseProps,
        StylesApiProps {
    /** Value of associated panel */
    value: string;
    /** Tab label */
    children?: React.ReactNode;
    /** Content displayed on the right side of the label, for example, icon */
    rightSection?: React.ReactNode;
    /** Content displayed on the left side of the label, for example, icon */
    leftSection?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color, controls control color based on `variant` */
    color?: MantineColor;
}

/** TabsTab */
const TabsTab = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Tabs.Tab {...others}>{children}</Tabs.Tab>;
};

TabsTab.defaultProps = {};

export default TabsTab;
