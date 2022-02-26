import { Kbd as MantineKbd } from '@mantine/core';
import PropTypes from "prop-types";


const Kbd = (props) => {

    return (
        <MantineKbd>
            {props.children}
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
    children: PropTypes.node
};

export default Kbd;
