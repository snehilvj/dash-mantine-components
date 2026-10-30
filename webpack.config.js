const path = require("path");
const packagejson = require("./package.json");
const WebpackDashDynamicImport = require("@plotly/webpack-dash-dynamic-import");

const dashLibraryName = packagejson.name.replace(/-/g, "_");

// Externalized react/jsx-runtime.
// Newer Dash versions provide window.ReactJSXRuntime for React 19 compatability.
// The fallback keeps this bundle compatible with older Dash versions.
const jsxRuntimeExternal = `var (window.ReactJSXRuntime || (window.ReactJSXRuntime = (function (React) {
    function jsx(type, config, maybeKey) {
        var props = {};
        var children = null;

        if (config != null) {
            if (config.key !== undefined) {
                props.key = '' + config.key;
            }

            for (var propName in config) {
                if (
                    Object.prototype.hasOwnProperty.call(config, propName) &&
                    propName !== 'key' &&
                    propName !== '__self' &&
                    propName !== '__source'
                ) {
                    if (propName === 'children') {
                        children = config[propName];
                    } else {
                        props[propName] = config[propName];
                    }
                }
            }
        }

        if (maybeKey !== undefined) {
            props.key = '' + maybeKey;
        }

        if (children === null || children === undefined) {
            return React.createElement(type, props);
        }

        return Array.isArray(children)
            ? React.createElement.apply(React, [type, props].concat(children))
            : React.createElement(type, props, children);
    }

    return {
        jsx: jsx,
        jsxs: jsx,
        jsxDEV: jsx,
        Fragment: React.Fragment
    };
})(window.React)))`;

module.exports = function (env, argv) {
    const mode = (argv && argv.mode) || "production";

    const entry = [path.join(__dirname, "src/ts/index.ts")];

    const output = {
        path: path.join(__dirname, dashLibraryName),
        chunkFilename: "[name].js",
        filename: `${dashLibraryName}.js`,
        library: dashLibraryName,
        libraryTarget: "umd",
    };

    const externals = {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            umd: "react",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            umd: "react-dom",
            root: "ReactDOM",
        },
        "react/jsx-runtime": jsxRuntimeExternal,
        "react/jsx-dev-runtime": jsxRuntimeExternal,
    };

    return {
        output,
        mode,
        entry,
        target: ["web", "es5"],
        externals,

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                insert: function insertAtTop(element) {
                                    var parent = document.querySelector("head");
                                    var lastInsertedElement =
                                        window._lastElementInsertedByStyleLoader;

                                    if (!lastInsertedElement) {
                                        parent.insertBefore(
                                            element,
                                            parent.firstChild
                                        );
                                    } else if (
                                        lastInsertedElement.nextSibling
                                    ) {
                                        parent.insertBefore(
                                            element,
                                            lastInsertedElement.nextSibling
                                        );
                                    } else {
                                        parent.appendChild(element);
                                    }

                                    window._lastElementInsertedByStyleLoader =
                                        element;
                                },
                            },
                        },
                        {
                            loader: "css-loader",
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: "asset/inline",
                },
            ],
        },

        optimization: {
            splitChunks: {
                name: "[name].js",
                cacheGroups: {
                    async: {
                        chunks: "async",
                        minSize: 0,
                        name(module, chunks, cacheGroupKey) {
                            return `${cacheGroupKey}-${chunks[0].name}`;
                        },
                    },
                    charts: {
                        test(module, { chunkGraph }) {
                            const chunks = chunkGraph.getModuleChunks(module);
                            return Array.from(chunks).some((chunk) =>
                                /(?:Chart|Sparkline|Heatmap)$/.test(chunk.name)
                            );
                        },
                        chunks: "all",
                        minSize: 0,
                        minChunks: 2,
                        name: "dash_mantine_components-charts-shared",
                        priority: 20,
                    },
                },
            },
        },

        plugins: [new WebpackDashDynamicImport()],
    };
};