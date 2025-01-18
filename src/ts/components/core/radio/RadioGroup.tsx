import { MantineSize, Radio } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { InputWrapperProps } from "props/input";
import React from "react";
import RadioGroupContext from "./RadioGroupContext";

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
        persistence,
        persisted_props = ['value'],
        persistence_type = 'local',
        deselectable,
        ...others
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.value === value) {
            setProps({ value: null });
        }
      };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Radio.Group
            data-dash-is-loading={loading || undefined}
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

export default RadioGroup;
