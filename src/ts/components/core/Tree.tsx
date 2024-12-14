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
    data: TreeNodeData[];
    expanded?: string[] | "*";
    checked?: string[];
    checkboxes?: boolean;
    levelOffset?: string | number;
}

const Leaf = ({
    node,
    expanded,
    hasChildren,
    elementProps,
    tree,
    checkboxes,
}: RenderTreeNodePayload & { checkboxes: boolean }) => {
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
            <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
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
        loading_state,
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
                <Leaf checkboxes={checkboxes} {...payload} />
            )}
            {...others}
        />
    );
};

Tree.defaultProps = {
    expanded: [],
};

export default Tree;
