import { Rating as MantineRating } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React, { useState } from "react";

export type Props = {
    /** Default value for uncontrolled component */
    defaultValue?: number;
    /** Value for controlled component */
    value?: number;
    /** The icon that is displayed when symbol is empty */
    emptySymbol?: React.ReactNode;
    /** This icon that is displayed when symbol is full */
    fullSymbol?: React.ReactNode;
    /** Number of fractions each item can be divided into, 1 by default */
    fractions?: number;
    /** Controls component size */
    size?: MantineSize;
    /** Number of controls that should be rendered */
    count?: number;
    /** Name of rating, should be unique within the page */
    name?: string;
    /** If true, you won't be able to interact */
    readOnly?: boolean;
    /** If true, only the selected symbol will change to full symbol */
    highlightSelectedOnly?: boolean;
    /** Key of theme.colors or any CSS color value, yellow by default */
    color?: MantineColor;
} & PersistenceProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps &
    DashBaseProps;

/** Capture password from user with option to toggle visibility */
const Rating = (props: Props) => {
    const { setProps, value, ...other } = props;

    const [val, setVal] = useState(value);

    useDidUpdate(() => {
        setProps({ value: val });
    }, [val]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    return <MantineRating value={val} onChange={setVal} {...other} />;
};

Rating.defaultProps = {
    value: 0,
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Rating;
