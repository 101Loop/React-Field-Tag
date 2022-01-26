import * as React from 'react'
import ReactFieldTagProps from './interfaces/reactFieldTagProps';
import styles from './styles.module.css';

const ReactFieldTag = ({ tags, delimiter = ',', onAdd, onDelete, closeIcon, classes }: ReactFieldTagProps) => {
  const [val, setVal] = React.useState('');

  const changeHandler = (e: any) => {
    const value = e.target.value;

    /// enters only if the value includes delimiter, and must have at least 2 characters
    if (value.length > 1 && value.includes(delimiter)) {
      const arr = value.split(delimiter);

      /// first item after splitting
      const first = arr[0];

      if (!first) { /// if it's empty ignore it
        setVal('');
        return;
      } else if (tags.includes(first)) { /// if the tag is already there, ignore it
        setVal(first);
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

  return (
    <div className={classes?.root ?? styles.container}>
      <input className={styles.input} value={val} onChange={changeHandler} />
      <div className={classes?.tags ?? styles.tags}>
        {tags.map((tag, index) => {
          return (
            <span className={classes?.tag ?? styles.tag} key={tag}>
              {tag}
              <button onClick={() => {
                onDelete(index);
              }}>
                {closeIcon ?? <img height={10} src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png" />}
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ReactFieldTag;
