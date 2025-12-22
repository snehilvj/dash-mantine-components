export interface StylesApiProps {
    /**  Adds custom CSS class names to inner elements of a component.  See Styles API docs */
    classNames?: object;
    /** Adds inline styles directly to inner elements of a component.  See Styles API docs  */
    styles?: any;
    /** Remove all Mantine styling from the component */
    unstyled?: boolean;
    /** variant */
    variant?: string;
    /**  Passes attributes to inner elements of a component.  See Styles API docs. */
    attributes?: any;
}
