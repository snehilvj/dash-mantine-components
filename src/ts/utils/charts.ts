export const getClickData = (ev) => {
    return ev.activePayload[0]['payload'];
};

export const getPieClickData = (ev) => {
    return ev.payload.payload;
};

export const getScatterClickData = (ev) => {
    return ev.payload;
};

export const isEventValid = (ev) => {
    return Object.keys(ev).length !== 0;
};
