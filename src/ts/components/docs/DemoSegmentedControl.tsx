import React from "react";
import { Input, SegmentedControl } from "@mantine/core";
import { DefaultProps } from "../../props";

type Props = {
    /** Label for input wrapper */
    label?: string;
    /** Current value for controlled SegmentedControl */
    value: string;
    /** Available options */
    data: string[];
} & DefaultProps;

/**
 * Demo SegmentedControl for dmc docs. For more information look within.
 */
const DemoSegmentedControl = (props: Props) => {
    const { setProps, data, value } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <Input.Wrapper {...props}>
            <div>
                <SegmentedControl
                    onChange={onChange}
                    data={data}
                    value={value}
                    fullWidth
                />
            </div>
        </Input.Wrapper>
    );
};

DemoSegmentedControl.displayName = "DemoSegmentedControl";

DemoSegmentedControl.defaultProps = {};

export default DemoSegmentedControl;
