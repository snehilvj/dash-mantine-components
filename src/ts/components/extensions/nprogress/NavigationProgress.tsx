import { nprogress } from "@mantine/nprogress";
import { useEffect } from "react";

interface Props {
    /** intent */
    intent:
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
    const { intent, value } = props;

    window["np"] = nprogress;

    useEffect(() => {
        switch (intent) {
            case "set":
                nprogress.set(value);
                break;

            default:
                nprogress[intent]();
                break;
        }
    }, [props]);
};

NavigationProgress.defaultProps = {};

export default NavigationProgress;
