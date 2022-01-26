import { ReactElement } from "react";
import StyleClasses from "./styleClasses";

/**
 * @typedef {Object} ReactFieldTagProps
 * @property {Array<string>} tags - an array of tags, formed out of input text, or user-defined
 * @property {string} delimiter - an optional string, to determine a point at which the string separates
 * @property {StyleClasses} classes - an optional style classes for styling
 * @property {ReactElement} closeIcon - an optional element to be used as close icon
 * @property {function} onAdd - a callback function called when a new tag is to be added
 * @property {function} onDelete - a callback function called on deleting a tag
 */
interface ReactFieldTagProps {
    tags: Array<string>,
    delimiter?: string,
    classes?: StyleClasses,
    closeIcon?: ReactElement,
    onAdd: (arg: string) => void,
    onDelete: (arg: number) => void,
}

export default ReactFieldTagProps;
