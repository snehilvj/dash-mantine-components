import { path } from 'ramda';

/**
 * Utility to allow passing a function as a prop from a dash app.
 * Must  be a dict with a key of "function"
      label={'function': 'functionName'}

  Handles nested functions:
      label={"content": {"function": "functionName"}}

  Can pass additional arg with the options key
      label={"function": "functionName", "options": {"suffix": " °F"}}),

 * where 'functionName' is a function defined in the dashMantineFunctions namespace in a .js file in /assets
 *
 * Based on https://github.com/emilhe/dash-extensions-js
 */

const funcPropsMap = {
    Slider: ['label', 'scale'],
    RangeSlider: ['label', 'scale'],
    Select: ['renderOption', 'filter'],
    MultiSelect: ['renderOption', 'filter'],
    TagsInput: ['renderOption', 'filter'],
    Autocomplete: ['renderOption', 'filter'],
};

// parses functon as props from other props
export function parseFuncProps(
    comp: string,
    props: Record<string, any>,
    context: Record<string, any> = {}
): { [x: string]: any } {
    const funcProps: Record<string, any> = { ...props }; // Create a shallow copy to avoid mutation

    if (funcPropsMap[comp]) {
        funcPropsMap[comp].forEach((v) => {
            if (path([v.split('.')], funcProps)) {
                funcProps[v] = resolveProp(funcProps[v], context);
            }
        });
    }

    return funcProps; // Return as an object
}

function isPlainObject(o: unknown): o is Record<string, unknown> {
    return (
        typeof o === 'object' &&
        o !== null &&
        !Array.isArray(o) &&
        !(o instanceof Date)
    );
}

function isFunction(value: unknown): value is (...args: any[]) => any {
    return typeof value === 'function';
}

function getDescendantProp(obj: any, desc: string): any {
    const root = obj.dashMantineFunctions;
    if (!root || typeof desc !== 'string') return undefined;
    return desc
        .split('.')
        .reduce((current, segment) => current?.[segment], root);
}

function resolveFunctionName(
    prop: any,
    context: Record<string, any> = {}
): any {
    const options = prop.options || {};
    const functionName = getDescendantProp(window, prop.function);

    if (functionName === undefined) {
        throw new Error(
            `No match for [${prop.function}] in window.dashMantineFunctions.`
        );
    }
    if (isFunction(functionName) && context) {
        return (...args: any[]) => functionName(...args, options, context);
    }
    return functionName;
}

/**
 * Resolves a prop or props object recursively.
 */
export function resolveProp(prop: any, context: Record<string, any> = {}): any {
    // If it's a function reference object
    if (isPlainObject(prop) && 'function' in prop) {
        return resolveFunctionName(prop, context);
    }
    // If it's a plain object, recurse into its properties
    if (isPlainObject(prop)) {
        return Object.fromEntries(
            Object.entries(prop).map(([key, value]) => [
                key,
                resolveProp(value, context),
            ])
        );
    }
    // Otherwise, return as-is (primitive, array, etc.)
    return prop;
}
