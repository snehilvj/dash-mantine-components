import {
    DayOfWeek,
    DatesProvider as MantineDatesProvider,
} from "@mantine/dates";
import { useForceUpdate } from "@mantine/hooks";
import dayjs from "dayjs";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type DatesProviderSettings = {
    locale: string;
    firstDayOfWeek: DayOfWeek;
    weekendDays: DayOfWeek[];
    labelSeparator: string;
};

type Props = {
    /** Settings for all date components inside the provider */
    settings: DatesProviderSettings;
    /** content */
    children: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Settings provider for dmc's dates components. */
const DatesProvider = (props: Props) => {
    const { children, settings, setProps, ...other } = props;
    const { locale } = settings;

    dayjs.Ls[locale] = window["dayjs"].Ls[locale];
    useForceUpdate();

    return (
        <MantineDatesProvider settings={settings} {...other}>
            {children}
        </MantineDatesProvider>
    );
};

DatesProvider.defaultProps = {};

export default DatesProvider;
