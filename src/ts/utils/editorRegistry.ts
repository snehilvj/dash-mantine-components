export const editorInstances: Record<string, any> = {};

export const getEditor = (id: string) => {
    // optional chaining so before the fragment exists it'll just return undefined
    // which does the right thing because clearly no rte is initialized yet!
    const api = editorInstances?.[id];
    if (api) {
        return api;
    }
    throw new Error(
        `no RichTextEditor found with id: ${id}, or it's not initialized yet.`
    );
};
