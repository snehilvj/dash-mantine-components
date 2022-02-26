import { Kbd as MantineKbd } from '@mantine/core';
import PropTypes from "prop-types";


const Kbd = (props) => {
    
    const {children} = props;

    return (
        <MantineKbd
        {...omit(["setProps", "children", "class_name"], props)}
        className={class_name}
        >
            {children}
        </MantineKbd>
    )

}

Kbd.displayName = "Kbd";

Kbd.defaultProps = {
};

Kbd.propTypes = {
    /**
    * Keyboard key
    */
    children: PropTypes.node,
    
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,
    
    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Kbd;
