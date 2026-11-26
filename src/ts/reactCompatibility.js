function isSupportedReactVersion(version) {
    const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);

    if (!match) {
        return false;
    }

    const [major, minor, patch] = match.slice(1, 4).map(Number);

    return (
        major > 19 ||
        (major === 19 && (minor > 2 || (minor === 2 && patch >= 4)))
    );
}

function isComponentExport(name, value) {
    if (!/^[A-Z]/.test(name)) {
        return false;
    }

    if (typeof value === 'function') {
        return true;
    }

    if (!value || typeof value !== 'object') {
        return false;
    }

    return [
        Symbol.for('react.memo'),
        Symbol.for('react.forward_ref'),
        Symbol.for('react.lazy'),
    ].includes(value.$$typeof);
}

function createCompatibilityError(detectedVersion) {
    return new Error(
        `Dash Mantine Components v3 requires React >=19.2.4; detected React ${detectedVersion}. ` +
            'Use Dash >= 4.5 and select React 19.2.4 with ' +
            'dash._dash_renderer._set_react_version("19.2.4") before creating the Dash app. ' +
            'DMC components must also be wrapped in dmc.MantineProvider.'
    );
}

function selectComponentExports(React, components) {
    const detectedVersion = React.version || 'unknown';

    if (isSupportedReactVersion(detectedVersion)) {
        return components;
    }

    const error = createCompatibilityError(detectedVersion);
    const UnsupportedReactComponent = () => {
        throw error;
    };
    const selectedComponents = { ...components };

    Object.keys(selectedComponents).forEach((name) => {
        if (isComponentExport(name, selectedComponents[name])) {
            selectedComponents[name] = UnsupportedReactComponent;
        }
    });

    return selectedComponents;
}

module.exports = {
    isSupportedReactVersion,
    selectComponentExports,
};
