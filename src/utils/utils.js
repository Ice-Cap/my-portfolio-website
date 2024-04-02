export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const cloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}
