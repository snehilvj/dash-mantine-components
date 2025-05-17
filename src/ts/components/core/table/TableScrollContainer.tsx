import { Table } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { ScrollAreaProps } from "props/scrollarea"
import React from "react";


interface Props extends BoxProps, DashBaseProps {
  /** `min-width` of the `Table` at which it should become scrollable */
  minWidth: React.CSSProperties['minWidth'];
  /** `max-height` of the `Table` at which it should become scrollable */
  maxHeight?: React.CSSProperties['maxHeight'];
  /** Type of the scroll container, `native` to use native scrollbars, `scrollarea` to use `ScrollArea` component, `scrollarea` by default */
  type?: 'native' | 'scrollarea';
  /** Props passed down to `ScrollArea` component, not applicable with `type="native"` */
  scrollAreaProps?: ScrollAreaProps;

  /** Content rendered inside the scroll container */
  children?: React.ReactNode;
}



/** Table ScrollArea */
const TableScrollContainer = (props: Props) => {
    const { setProps, children, ...others } = props;


  return (
    <Table.ScrollContainer
      {...others}
    >
      {children}
    </Table.ScrollContainer>
  );


};

export default TableScrollContainer;




