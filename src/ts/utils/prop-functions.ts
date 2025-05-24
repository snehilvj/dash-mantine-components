import {path} from 'ramda';

/**
 * Utility to allow passing a function as a prop from a dash app.
 * For example label={'function': 'myLabel'}
 * where 'myLabel' is a function defined in .js file in /assets
 *
 * Based on https://github.com/emilhe/dash-extensions-js
 */

const funcPropsMap = {
    Slider: ['label', 'scale'],
    RangeSlider: ['label', 'scale']
}

export function parseFuncProps(comp: string, props: Record<string, any>, context: Record<string, any> = {}): { [x: string]: any; } {
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

function isPlainObject(o) {
   return (o === null || o === undefined || Array.isArray(o) || typeof o == 'function' || o.constructor === Date ) ?
           false
          :(typeof o == 'object');
}

function isFunction(functionToCheck) {
   return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}


export function resolveProp(prop, context = {}) {
    // If it's not an object, just return.
    if (!isPlainObject(prop)){
        return prop
    }
    // Check if the prop should be resolved a variable.
    if (prop.function){
        return resolveVariable(prop, context)
    }
    // If none of the special properties are present, do nothing.
    return prop
}

function resolveVariable(prop, context){
    const options = prop.options || {};
    const variable = getDescendantProp(window, prop.function)

    // If it's not there, raise an error.
    if(variable === undefined){
        throw new Error("No match for [" + prop.function + "] in window.dashMantineFunctions.")
    }
    // If it's a function, add context.
    if(isFunction(variable) && context){
        return (...args) => variable(...args, options, context)
    }
    // Otherwise, use the variable as-is.
    return variable
}

function getDescendantProp(obj, desc) {
  // Ensure all lookups stay within dashMantineFunctions
  const root = obj.dashMantineFunctions;
  if (!root || typeof desc !== "string") return undefined;

  const path = desc.split(".");
  let current = root;

  for (const segment of path) {
    if (!Object.prototype.hasOwnProperty.call(current, segment)) return undefined;
    current = current[segment];
  }

  return current;
}


export function resolveProps(props, context = {}) {
  if (!props || typeof props !== 'object') return {};

  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, resolveProp(value, context)])
  );
}

