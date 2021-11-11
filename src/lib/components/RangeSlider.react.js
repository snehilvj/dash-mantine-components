import React, {useState} from 'react';
import {RangeSlider as MantineRangeSlider} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/** Capture user feedback from a range of values */
const RangeSlider = (props) => {
    const {setProps, value} = props;
    const [state, setState] = useState(value);

    const updateProps = () => {
        setProps({value: state});
    };

    useDidUpdate(() => setState(value), [value]);

    return (
        <MantineRangeSlider
            onChange={(v) => setState(v)}
            onMouseUp={updateProps}
            {...omit(['setProps', 'value'], props)}
            value={state}
        />
    );
};

RangeSlider.displayName = 'RangeSlider';

RangeSlider.defaultProps = {};

RangeSlider.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Slider color */
    color: PropTypes.oneOf([
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
    ]),

    /**	If true label will be not be hidden when user stops dragging */
    labelAlwaysOn: PropTypes.bool,

    /** Marks which will be placed on the track */
    marks: PropTypes.arrayOf(
        PropTypes.exact({
            /** mark's label */
            label: PropTypes.string.isRequired,

            /** mark's value */
            value: PropTypes.number.isRequired,
        })
    ),

    /** Maximum possible value */
    max: PropTypes.number,

    /** Minimal possible value */
    min: PropTypes.number,

    /** Minimal range interval */
    minRange: PropTypes.number,

    /** Track border-radius from theme or number to set border-radius in px */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
        PropTypes.number,
    ]),

    /** Predefined track and thumb size, number to set sizes in px */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /** Number by which value will be incremented/decremented with thumb drag and arrows */
    step: PropTypes.number,

    /** Inline style override */
    style: PropTypes.object,

    /** Current value for controlled slider */
    value: PropTypes.arrayOf(PropTypes.number),
};

export default RangeSlider;
