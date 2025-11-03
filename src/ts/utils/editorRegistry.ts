//
// export const editorInstances: Record<string, any> = {};
//
// export const getEditor = (id: string): any => (id) => {
//     // optional chaining so before the fragment exists it'll just return undefined
//     // which does the right thing because clearly no rte is initialized yet!
//     const api = editorInstances?.id;
//     if (api) {
//         return api;
//     }
//     throw new Error(
//         `no RichTextEditor found with id: ${id}, or it's not initialized yet.`
//     );
// };

export const editorInstances: Record<string, unknown> = {};
//
// export const getEditor = (id: string) => (id) => {
//     // optional chaining so before the fragment exists it'll just return undefined
//     // which does the right thing because clearly no rte is initialized yet!
//     const api = editorInstances?.id;
//     if (api) {
//         return api;
//     }
//     throw new Error(
//         `no rte found, or rte is not initialized yet, with id: ${id}`
//     );
// };

export const getEditor = (id: string): any => editorInstances?.id;
