import React, { useState } from "react";
import { DefaultProps } from "../../props";
import { TransferList as MantineTransferList } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";
import {
    TransferListItem,
    TransferListData,
} from "@mantine/core/lib/TransferList/types";

type Props = {
    /** Current value */
    value: any;
    /** Initial items selection */
    initialSelection?: [string[], string[]];
    /** Controlled search queries */
    searchValues?: [string, string];
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
} & DefaultProps;

/**
 * Navigation link. For more information, see: https://mantine.dev/core/nav-link/
 */
const TransferList = (props: Props) => {
    const {
        setProps,
        ...other
    } = props;

    const onChange = (value: TransferListData) => {
        setProps({ value })
    }

    const onSearch = (value: [string, string]) => {
        setProps({ searchValues: value });
    };

    return <MantineTransferList onChange={onChange} onSearch={onSearch} {...other} />;
};

TransferList.defaultProps = {};

export default TransferList;
