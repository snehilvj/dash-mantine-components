import { Chip } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import React, { useState } from "react";
import ChipGroupContext from "./ChipGroupContext";

interface Props extends DashBaseProps, PersistenceProps {
    /** Determines whether it is allowed to select multiple values, `false` by default */
    multiple?: boolean;
    /** When using multiple=true, value must be a list */
    value?: string[] | string | null;
    /** `Chip` components and any other elements */
    children?: React.ReactNode;
    /** Allow to deselect Chip in Radio mode */
    deselectable?: boolean;
}

/** ChipGroup */
const ChipGroup = (props: Props) => {
    const {
        children,
        value,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        deselectable,
        ...others
    } = props;
    const [val, setVal] = useState(value);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    useDidUpdate(() => {
        setProps({ value: val });
    }, [val]);

    const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.value === value) {
          setVal(null);
        }
      };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Chip.Group
            value={val}
            onChange={setVal}
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            <ChipGroupContext.Provider value={{ chipOnClick: deselectable ? handleChipClick : null }}>
                {children}
            </ChipGroupContext.Provider>
        </Chip.Group>
    );
};

ChipGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ChipGroup;
