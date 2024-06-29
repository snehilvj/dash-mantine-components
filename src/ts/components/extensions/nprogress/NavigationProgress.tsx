import { nprogress } from "@mantine/nprogress";
import { useEffect } from "react";

interface Props {
    /** action */
    action:
        | "start"
        | "stop"
        | "increment"
        | "decrement"
        | "set"
        | "reset"
        | "complete";
    /** value to set the progress bar to */
    value?: number;
}

/** NavigationProgress */
const NavigationProgress = (props: Props) => {
    const { action, value } = props;

    window["np"] = nprogress;

    useEffect(() => {
        switch (action) {
            case "set":
                nprogress.set(value);
                break;

            default:
                nprogress[action]();
                break;
        }
    }, [props]);
};

NavigationProgress.defaultProps = {};

export default NavigationProgress;
