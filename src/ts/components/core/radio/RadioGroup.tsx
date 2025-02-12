import { MantineSize, Radio } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { InputWrapperProps } from "props/input";
import React from "react";
import RadioGroupContext from "./RadioGroupContext";
import { setPersistence, getLoadingState } from "../../../utils/dash3";

interface Props extends InputWrapperProps, DashBaseProps, PersistenceProps {
    /** `Radio` components and any other elements */
    children: React.ReactNode;
    /** Controlled component value */
    value?: string;
    /** Props passed down to the `Input.Wrapper` */
    wrapperProps?: Record<string, any>;
    /** Controls size of the `Input.Wrapper`, `'sm'` by default */
    size?: MantineSize;
    /** `name` attribute of child radio inputs. By default, `name` is generated randomly. */
    name?: string;
    /** If set, value cannot be changed */
    readOnly?: boolean;
    /** Allow to deselect Chip in Radio mode */
    deselectable?: boolean;
}

/** RadioGroup */
const RadioGroup = (props: Props) => {
    const {
        children,
        value,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        deselectable,
        ...others
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    const handleRadioClick = (val?: string) => {
        if (val === value) {
            setProps({ value: null });
        }
    };

    return (
        <Radio.Group
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onChange={onChange}
            value={value}
            {...others}
        >
            <RadioGroupContext.Provider value={{radioOnClick: deselectable ? handleRadioClick : null}}>
                {children}
            </RadioGroupContext.Provider>
        </Radio.Group>
    );
};

setPersistence(RadioGroup)

export default RadioGroup;
