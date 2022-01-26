# react-field-tag

> React library for tag inputs

[![NPM](https://img.shields.io/npm/v/react-field-tag.svg)](https://www.npmjs.com/package/react-field-tag) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-field-tag
```

## Usage

```tsx
import React from 'react'

import ReactFieldTag from 'react-field-tag'

/// add below line to use default styling
import 'react-field-tag/dist/index.css'

const App = () => {
  const [tags, setTags] = React.useState<Array<string>>([]);

  const onAdd = (tag: string) => {
    setTags([...tags, tag]);
  }

  const onDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  }

  return <ReactFieldTag tags={tags} onAdd={onAdd} onDelete={onDelete} />
}

export default App
```

## Table of contents

### Type aliases

- [StyleClasses](#StyleClasses)
- [ReactFieldTagProps](#ReactFieldTagProps)

## Type aliases

### StyleClasses

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `root?` | string | style class for the whole input and tag container |
| `input?` | string | style class for input |
| `tags?` | string | style class for tags container |
| `tag?` | string | style class for tag(s) |

___

### ReactFieldTagProps

#### Type declaration

| Name | Type | Description | Default |
| :------ | :------ | :------ | :------ |
| `tags` | Array of string | an array of tags, formed out of input text, or user-defined | - |
| `delimiter?` | string | determines a point at which the string separates into tags | `,` |
| `classes?` | [StyleClasses](#StyleClasses) | style classes for styling | - |
| `closeIcon?` | ReactElement | element to be used as close icon | `x` (close icon from icons8) |
| `onAdd` | function | a callback function called when a new tag is to be added | - |
| `onDelete` | function | a callback function called on deleting a tag | - |

## License

MIT © [iamdipanshusingh](https://github.com/iamdipanshusingh)
