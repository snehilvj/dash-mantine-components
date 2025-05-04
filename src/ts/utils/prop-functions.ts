/**
 * Utility to allow passing a function as a prop from a dash app.
 * For example label={'function': 'myLabel'}
 * where 'myLabel' is a function defined in .js file in /assets
 *
 * Based on https://github.com/emilhe/dash-extensions-js
 */


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
    // Check if the prop should be resolved as an arrow function.
    if (prop.arrow){
        return (...args) => prop.arrow
    }
    // If none of the special properties are present, do nothing.
    return prop
}

function resolveVariable(prop, context){
    const variable = getDescendantProp(window, prop.function)

    // If it's not there, raise an error.
    if(variable === undefined){
        throw new Error("No match for [" + prop.function + "] in the global window object.")
    }
    // If it's a function, add context.
    if(isFunction(variable) && context){
        return (...args) => variable(...args, context)
    }
    // Otherwise, use the variable as-is.
    return variable
}

function getDescendantProp(obj, desc, defaultPath = "dashMantineFunctions") {
    // Use the default path if the provided desc does not contain a dot
    const path = desc.includes(".") ? desc : `${defaultPath}.${desc}`;

    // allows for nested paths  for example "myNamespace.mySubNamespace.myFunction"
    const arr = path.split(".");
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
}

export function resolveProps(props, context = {}) {
  if (!props || typeof props !== 'object') return {};

  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, resolveProp(value, context)])
  );
}

