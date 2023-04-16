const queryScore = (s: string, query: string) => {
    const result = 2 * +s.startsWith(query) + +s.split("_").includes(query);
    return result;
};

export const snakeStringCompare = (
    a: string,
    b: string,
    query: string
): number => {
    const a_score = queryScore(a, query);
    const b_score = queryScore(b, query);
    if (a_score > b_score) {
        return -1;
    } else if (a_score < b_score) {
        return 1;
    }
    return +(a > b);
};

export const toArrayOfStrings = (
    inputValue: string[] | number[] | string | number
): string[] => {
    if (inputValue instanceof Array) {
        return inputValue.map(String);
    } else if (typeof inputValue == "undefined") {
        return [];
    }
    return [String(inputValue)];
};
