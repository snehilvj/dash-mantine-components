const React = require('react');
const components = require('./index.ts');
const { selectComponentExports } = require('./reactCompatibility');

module.exports = selectComponentExports(React, components);
