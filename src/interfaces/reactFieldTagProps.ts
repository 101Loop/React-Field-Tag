import StyleClasses from "./styleClasses";

interface ReactFieldTagProps {
    tags: Array<string>,
    delimiter?: string,
    classes?: StyleClasses,
    closeIcon?: React.ReactElement,
    onAdd: (arg: string) => void,
    onDelete: (arg: number) => void,
}

export default ReactFieldTagProps;
