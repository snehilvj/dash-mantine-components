
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyInlineCodeHighlight = React.lazy(() => import(/* webpackChunkName: "InlineCodeHighlight" */ './fragments/InlineCodeHighlight'));

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Code to highlight */
    code: string;
    /** Code language, `'tsx'` by default */
    language?: string;
}

/** InlineCodeHighlight */
const InlineCodeHighlight = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyInlineCodeHighlight {...props} />
      </Suspense>
    );
}


export default InlineCodeHighlight;
