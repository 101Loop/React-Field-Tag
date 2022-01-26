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
