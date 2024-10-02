import { Chip } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import React, { useState } from "react";

interface Props extends DashBaseProps, PersistenceProps {
    /** Controlled component value */
    value?: string[];
    /** `Chip` components and any other elements */
    children?: React.ReactNode;
}

/** ChipGroup */
const ChipGroup = (props: Props) => {
    const {
        children,
        value,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [val, setVal] = useState(value);

    // const onChange = (value: string[]) => {
    //     setVal(value);
    //     setProps({ value });
    // };

    // useEffect(() => {
    //     setVal(value);
    // }, [value]);

    return (
        <Chip.Group
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            multiple
            value={val}
            onChange={setVal}
            {...others}
        >
            {children}
        </Chip.Group>
    );
};

ChipGroup.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    value: [],
};

export default ChipGroup;
