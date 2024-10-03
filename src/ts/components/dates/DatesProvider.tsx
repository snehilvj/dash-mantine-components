import {
    DatesProviderProps,
    DatesProvider as MantineDatesProvider,
} from "@mantine/dates";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';

const REGISTERED = {}

interface Props extends DatesProviderProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Update props to trigger callbacks. */
    setProps: (props: Record<string, any>) => void;
}

/** DatesProvider */
const DatesProvider = (props: Props) => {
    const { settings, children, setProps, ...others } = props;
    const { locale } = settings;

    if (!REGISTERED[locale]) {
        REGISTERED[locale] = true;
        const localeObject = window[`dayjs_locale_${locale}`];
        if (localeObject) {
            dayjs.locale(locale, localeObject);
        }
    }

    return (
        <MantineDatesProvider settings={settings} {...others}>
            {children}
        </MantineDatesProvider>
    );
};

DatesProvider.defaultProps = {};

export default DatesProvider;