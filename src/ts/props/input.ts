import { MantineSize } from "@mantine/core";
import { BoxProps } from "./box";
import { StylesApiProps } from "./styles";

export interface InputWrapperProps extends BoxProps, StylesApiProps {
    /** Contents of `Input.Label` component. If not set, label is not rendered. */
    label?: React.ReactNode;
    /** Contents of `Input.Description` component. If not set, description is not rendered. */
    description?: React.ReactNode;
    /** Contents of `Input.Error` component. If not set, error is not rendered. */
    error?: React.ReactNode;
    /** Adds required attribute to the input and a red asterisk on the right side of label, `false` by default */
    required?: boolean;
    /** Determines whether the required asterisk should be displayed. Overrides `required` prop. Does not add required attribute to the input. `false` by default */
    withAsterisk?: boolean;
    /** Props passed down to the `Input.Label` component */
    labelProps?: Record<string, any>;
    /** Props passed down to the `Input.Description` component */
    descriptionProps?: Record<string, any>;
    /** Props passed down to the `Input.Error` component */
    errorProps?: Record<string, any>;
    /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
    /** Static id used as base to generate `aria-` attributes, by default generates random id */
    id?: string;
    /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
    size?: MantineSize | (string & {});
    /** `Input.Label` root element, `'label'` by default */
    labelElement?: "label" | "div";
}
