import React from 'react'

import ReactFieldTag from 'react-field-tag'
import 'react-field-tag/dist/index.css'

const App = () => {
  const [tags, setTags] = React.useState<Array<string>>([]);

  const onAdd = (tag: string) => {
    setTags([...tags, tag]);
  }

  return <ReactFieldTag tags={tags} onAdd={onAdd} delimiter=':' />
}

export default App
