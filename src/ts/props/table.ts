import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";

export interface TableElementProps
    extends BoxProps,
        StylesApiProps,
        DashBaseProps {
    /** Content */
    children?: React.ReactNode;
    /* props passed to the table element */
    tableProps?: object;
}
