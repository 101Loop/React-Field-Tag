/// <reference types="react" />
interface Props {
    tags: Array<string>;
    delimiter?: string;
    onAdd: (arg: string) => void;
    onDelete?: (arg: number) => void;
}
declare const ReactFieldTag: ({ tags, delimiter, onAdd, onDelete }: Props) => JSX.Element;
export default ReactFieldTag;
