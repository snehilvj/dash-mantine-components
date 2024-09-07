export interface StylesAPIProps<
    stylesNames extends string,
    Variants extends string | never = never
> {
    /** Adds class names to Mantine components */
    classNames?: Partial<Record<stylesNames, string>>;
    /** Remove all Mantine styling from the component */
    unstyled?: boolean;
    /** variant */
    variant?: Variants extends never ? never : Variants;
    /** Mantine Styles API **/
    styles?: Partial<Record<stylesNames, object>>;
}

export interface StylesApiProps {}
