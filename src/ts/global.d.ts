// global.d.ts
export {};

declare global {
    interface Window {
        dash_clientside: {
            get_layout: (componentPathOrId: string | string[]) => any;
        };
    }
}
