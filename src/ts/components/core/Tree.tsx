import {
    AccordionChevron,
    Checkbox,
    Group,
    Tree as MantineTree,
    RenderTreeNodePayload,
    TreeNodeData,
    getTreeExpandedState,
    useTree,
} from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether tree nodes range can be selected with click when Shift key is pressed, `true` by default */
    allowRangeSelection?: boolean;
    /** Determines if checkboxes should be rendered, `false` by default */
    checkboxes?: boolean;
    /** Determines checked nodes as a list of values (note that only leaves can be checked), `[]` by default */
    checked?: string[];
    /** Determines whether tree node should be checked on space key press, `false` by default */
    checkOnSpace?: boolean;
    /** Determines whether selection should be cleared when user clicks outside of the tree, `false` by default */
    clearSelectionOnOutsideClick?: boolean;
    /** Data used to render nodes */
    data: TreeNodeData[];
    /** Determines expanded nodes as a list of values or `'*'` for all, `[]` by default */
    expanded?: string[] | "*";
    /** Determines whether tree node with children should be expanded on click, `true` by default */
    expandOnClick?: boolean;
    /** Determines whether tree node with children should be expanded on space key press, `true` by default */
    expandOnSpace?: boolean;
    /** Horizontal padding of each subtree level, key of `theme.spacing` or any valid CSS value, `'lg'` by default */
    levelOffset?: string | number;
    /** Determines selected nodes as a list of values, `[]` by default */
    selected?: string[];
    /** Determines whether node should be selected on click, `false` by default */
    selectOnClick?: boolean;
}

const Leaf = ({
    node,
    expanded,
    hasChildren,
    elementProps,
    tree,
    checkboxes,
    expandOnClick,
}: RenderTreeNodePayload & { checkboxes: boolean; expandOnClick: boolean }) => {
    const checked = tree.isNodeChecked(node.value);
    const indeterminate = tree.isNodeIndeterminate(node.value);
    return (
        <Group gap="xs" {...elementProps}>
            {checkboxes && (
                <Checkbox.Indicator
                    checked={checked}
                    indeterminate={indeterminate}
                    onClick={() =>
                        !checked
                            ? tree.checkNode(node.value)
                            : tree.uncheckNode(node.value)
                    }
                />
            )}
            <Group
                gap={5}
                onClick={
                    expandOnClick
                        ? () => tree.toggleExpanded(node.value)
                        : undefined
                }
            >
                <span>{node.label}</span>
                {hasChildren && (
                    <AccordionChevron
                        style={{
                            transform: expanded
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                        }}
                    />
                )}
            </Group>
        </Group>
    );
};

const Tree = (props: Props) => {
    const {
        checkboxes,
        checked,
        data,
        expanded,
        expandOnClick,
        loading_state,
        selected,
        setProps,
        ...others
    } = props;

    const tree = useTree({
        initialExpandedState: getTreeExpandedState(data, expanded),
        initialCheckedState: checked,
    });

    useDidUpdate(() => {
        tree.setCheckedState(checked);
    }, [checked]);

    useDidUpdate(() => {
        setProps({ checked: tree.checkedState });
    }, [tree.checkedState]);

    useDidUpdate(() => {
        setProps({ selected: tree.selectedState });
    }, [tree.selectedState]);

    useDidUpdate(() => {
        tree.setSelectedState(selected);
    }, [selected]);

    useDidUpdate(() => {
        expanded === "*"
            ? tree.expandAllNodes()
            : tree.setExpandedState(
                  Object.fromEntries(expanded.map((x) => [x, true]))
              );
    }, [expanded]);

    useDidUpdate(() => {
        setProps({
            expanded: Object.entries(tree.expandedState)
                .filter(([k, v]) => v)
                .map(([k, v]) => k),
        });
    }, [tree.expandedState]);

    return (
        <MantineTree
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            data={data}
            tree={tree}
            expandOnClick={false}
            renderNode={(payload) => (
                <Leaf
                    checkboxes={checkboxes}
                    expandOnClick={expandOnClick}
                    {...payload}
                />
            )}
            {...others}
        />
    );
};

Tree.defaultProps = {
    expanded: [],
    expandOnClick: true,
};

export default Tree;
