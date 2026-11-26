const assert = require('node:assert/strict');
const test = require('node:test');
const {
    isSupportedReactVersion,
    selectComponentExports,
} = require('../../src/ts/reactCompatibility');

const component = () => null;

test('supported React versions enforce the minimum version', () => {
    assert.equal(isSupportedReactVersion('19.2.4'), true);
    assert.equal(isSupportedReactVersion('19.2.5'), true);
    assert.equal(isSupportedReactVersion('19.3.0'), true);
    assert.equal(isSupportedReactVersion('19.2.3'), false);
    assert.equal(isSupportedReactVersion('18.3.1'), false);
    assert.equal(isSupportedReactVersion('unknown'), false);
});

test('supported exports are returned unchanged', () => {
    const lazyComponent = {
        $$typeof: Symbol.for('react.lazy'),
    };
    const components = {
        Button: component,
        AreaChart: lazyComponent,
        Select: Object.assign(() => null, {
            dashPersistence: {
                persisted_props: ['value'],
                persistence_type: 'local',
            },
        }),
        getEditor: () => null,
        appNotifications: {},
    };

    const selected = selectComponentExports({ version: '19.2.4' }, components);

    assert.equal(selected, components);
    assert.equal(selected.Button, components.Button);
    assert.equal(selected.AreaChart, components.AreaChart);
    assert.equal(selected.Select.dashPersistence, components.Select.dashPersistence);
    assert.equal(selected.getEditor, components.getEditor);
    assert.equal(selected.appNotifications, components.appNotifications);
});

test('unsupported exports only replace public component values', () => {
    const memoComponent = { $$typeof: Symbol.for('react.memo') };
    const helper = () => null;
    const state = {};
    const selected = selectComponentExports(
        { version: '18.3.1' },
        {
            Button: component,
            AreaChart: memoComponent,
            getEditor: helper,
            appNotifications: state,
        }
    );

    assert.equal(selected.getEditor, helper);
    assert.equal(selected.appNotifications, state);
    assert.notEqual(selected.Button, component);
    assert.equal(selected.Button, selected.AreaChart);
    assert.throws(() => selected.Button({}), {
        message:
            'Dash Mantine Components v3 requires React >=19.2.4; detected React 18.3.1. ' +
            'Use Dash >= 4.5 and select React 19.2.4 with ' +
            'dash._dash_renderer._set_react_version("19.2.4") before creating the Dash app. ' +
            'DMC components must also be wrapped in dmc.MantineProvider.',
    });
});
