import React from "react";
import { TransferList as MantineTransferList } from "@mantine/core";
import { TransferListData } from "@mantine/core/lib/TransferList/types";
import {
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps, PersistenceProps } from "props/dash";

type Props = {
    /** Current value */
    value: any;
    /** Initial items selection */
    initialSelection?: [string[], string[]];
    /** Controlled search queries */ searchValues?: [string, string];
    /** Search fields placeholder */
    searchPlaceholder?: string | [string, string];
    /** Nothing found message */
    nothingFound?: any;
    /** Displayed when a list is empty and there is no search query */
    placeholder?: any;
    /** Lists titles */
    titles?: [string, string];
    /** List items height */
    listHeight?: number;
    /** Breakpoint at which list will collapse to single column layout */
    breakpoint?: MantineNumberSize;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Whether to hide the transfer all button */
    showTransferAll?: boolean;
    /** Limit amount of items showed at a time */
    limit?: number;
    /** Whether to transfer only items matching the filter when clicking the transfer all control */
    transferAllMatchingFilter?: boolean;
} & PersistenceProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Move items between two lists */
const TransferList = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: TransferListData) => {
        setProps({ value });
    };

    const onSearch = (value: [string, string]) => {
        setProps({ searchValues: value });
    };

    return (
        <MantineTransferList
            onChange={onChange}
            onSearch={onSearch}
            {...other}
        />
    );
};

TransferList.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default TransferList;
