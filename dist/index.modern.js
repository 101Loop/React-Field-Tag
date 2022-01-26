import { useState, createElement } from 'react';

var styles = {"container":"_styles-module__container__1Lxpd","tags":"_styles-module__tags__33Uz_","tag":"_styles-module__tag__kR9pS"};

const ReactFieldTag = ({
  tags,
  delimiter: _delimiter = ',',
  onAdd,
  onDelete
}) => {
  const [val, setVal] = useState('');

  const changeHandler = e => {
    const value = e.target.value;

    if (value.length > 1 && value.includes(_delimiter)) {
      const arr = value.split(_delimiter);
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
  };

  console.log({
    tags
  });
  return createElement("div", {
    className: styles.container
  }, createElement("input", {
    value: val,
    onChange: changeHandler
  }), createElement("div", {
    className: styles.tags
  }, tags.map((tag, index) => {
    return createElement("span", {
      className: styles.tag,
      key: tag
    }, tag, createElement("button", {
      onClick: () => {
        onDelete(index);
      }
    }, createElement("img", {
      height: 10,
      src: "https://img.icons8.com/ios/50/000000/delete-sign--v1.png"
    })));
  })));
};

export default ReactFieldTag;
//# sourceMappingURL=index.modern.js.map
