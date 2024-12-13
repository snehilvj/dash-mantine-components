export {};

declare global {
    interface Window {
        dash_clientside: {
            get_props: (
                componentPathOrId: string | string[],
                ...propPath: string[]
            ) => any;
        };
    }
}
