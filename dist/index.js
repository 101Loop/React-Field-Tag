var React = require('react');

var styles = {"container":"_1Lxpd","tags":"_33Uz_","tag":"_kR9pS"};

var ReactFieldTag = function ReactFieldTag(_ref) {
  var tags = _ref.tags,
      _ref$delimiter = _ref.delimiter,
      delimiter = _ref$delimiter === void 0 ? ',' : _ref$delimiter,
      onAdd = _ref.onAdd,
      onDelete = _ref.onDelete;
  console.log(onDelete);

  var _React$useState = React.useState(''),
      val = _React$useState[0],
      setVal = _React$useState[1];

  var changeHandler = function changeHandler(e) {
    var value = e.target.value;

    if (value.length > 1 && value.includes(delimiter)) {
      var arr = value.split(delimiter);
      var first = arr[0];

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
    tags: tags
  });
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("input", {
    value: val,
    onChange: changeHandler
  }), React.createElement("div", {
    className: styles.tags
  }, tags.map(function (tag) {
    return React.createElement("span", {
      className: styles.tag,
      key: tag
    }, tag, React.createElement("button", null, React.createElement("img", {
      height: 10,
      src: "https://img.icons8.com/ios/50/000000/delete-sign--v1.png"
    })));
  })));
};

module.exports = ReactFieldTag;
//# sourceMappingURL=index.js.map
