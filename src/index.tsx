import * as React from 'react'
import styles from './styles.module.css';

interface Props {
  tags: Array<string>,
  delimiter?: string,
  onAdd: (arg: string) => void,
  onDelete?: (arg: number) => void,
}

const ReactFieldTag = ({ tags, delimiter = ',', onAdd, onDelete }: Props) => {
  const [val, setVal] = React.useState('');

  const changeHandler = (e: any) => {
    const value = e.target.value;

    if (value.length > 1 && value.includes(delimiter)) {
      const arr = value.split(delimiter);

      const first = arr[0];
      if (!first) {
        setVal('');
        return;
      }
      onAdd(first);

      if (arr.length > 1) {
        setVal(arr[1]);
      } else {
        setVal('');
      }
    } else {
      setVal(value);
    }
  }

  console.log({ tags });

  return (
    <div className={styles.container}>
      <input value={val} onChange={changeHandler} />
      <div className={styles.tags}>
        {tags.map((tag) => {
          return (
            <span className={styles.tag} key={tag}>
              {tag}
              <button>
                <img height={10} src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png" />
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ReactFieldTag;
