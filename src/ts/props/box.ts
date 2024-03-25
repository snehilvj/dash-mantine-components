import { BoxProps as MantineBoxProps } from "@mantine/core";

export type BoxProps = Omit<MantineBoxProps, "__vars">;

export interface BoxComponentProps extends BoxProps {
    /** Variant passed from parent component, sets `data-variant` */
    variant?: string;
    /** Size passed from parent component, sets `data-size` if value is not number like */
    size?: string | number;
}
