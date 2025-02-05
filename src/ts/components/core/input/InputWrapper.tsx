import { Input as MantineInput } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { InputWrapperProps } from "props/input";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends InputWrapperProps, DashBaseProps {
    /** Input wrapper content */
    children?: React.ReactNode;
    /** Id of associated input */
    htmlFor?: string;
}

/** InputWrapper */
const InputWrapper = (props: Props) => {
    const { setProps, loading_state, children, id, htmlFor, ...others } = props;

    return (
        <MantineInput.Wrapper
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            id={htmlFor}
            {...others}
        >
            {children}
        </MantineInput.Wrapper>
    );
};

InputWrapper.defaultProps = {};

export default InputWrapper;
