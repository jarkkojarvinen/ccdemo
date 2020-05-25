import './App.css';
import React, { useState } from 'react'
import _ from 'lodash'
import InputField from './components/InputField'
import ListItemContainer from './components/ListItemContainer'
import autocompleteService from './services/autocompleteService'

const App = () => {
  const DEBOUNCE_DELAY = 500
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(false)

  const searchWords = query => {
    setLoading(true)

    autocompleteService
      .getAutocomplete(query)
      .then(result => {
        //console.log(`query ${query} result`, result)
        setItems(result)
      })
      .then(() => {
        setLoading(false)
      })
  }

  const loadItems = _.debounce(query => searchWords(query), DEBOUNCE_DELAY)

  const handleChange = (event) => {
    event.preventDefault()
    const q = event.target.value
    loadItems(q)
  }

  const onClick = id => {
    alert(id)
  }

  return (
    <div className="wrapper">
      <InputField handleChange={handleChange} isLoading={isLoading} />
      <ListItemContainer items={items} handleClick={onClick} />
    </div>
  );
}

export default App
