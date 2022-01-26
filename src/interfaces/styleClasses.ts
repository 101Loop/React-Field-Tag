/**
 * @typedef {Object} StyleClasses - a custom object for styles
 * @property {string} root - an optional style class for the whole input and tag container
 * @property {string} input - an optional style class for input
 * @property {string} tags - an optional style class for tags container
 * @property {string} tag - an optional style class for tag(s)
 *  */
interface StyleClasses {
    root?: string,
    input?: string,
    tags?: string,
    tag?: string,
}

export default StyleClasses;
