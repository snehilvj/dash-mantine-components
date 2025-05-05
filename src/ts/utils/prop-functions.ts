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

function getDescendantProp(obj, name) {
  if (name.includes(".")) {
    throw new Error(
      `Function name "${name}" is invalid. Dotted paths are not allowed. Only functions in the "dashMantineFunctions" namespace are supported.`
    );
  }

  const ns = obj.dashMantineFunctions;
  return ns ? ns[name] : undefined;
}

export function resolveProps(props, context = {}) {
  if (!props || typeof props !== 'object') return {};

  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, resolveProp(value, context)])
  );
}

