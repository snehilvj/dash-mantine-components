import { Chip } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import React, { useState } from "react";

interface Props extends DashBaseProps, PersistenceProps {
    /** Determines whether it is allowed to select multiple values, `false` by default */
    multiple?: boolean;
    /** When using multiple=true, value must be a list */
    value?: string[] | string | null;
    /** `Chip` components and any other elements */
    children?: React.ReactNode;
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
        ...others
    } = props;
    const [val, setVal] = useState(value);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    useDidUpdate(() => {
        setProps({ value: val });
    }, [val]);

    return (
        <Chip.Group value={val} onChange={setVal} {...others}>
            {children}
        </Chip.Group>
    );
};

ChipGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default ChipGroup;
