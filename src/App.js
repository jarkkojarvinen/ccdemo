import './App.css';
import React, { useState } from 'react'
import _ from 'lodash'
import SearchField from './components/SearchField'
import ListItemContainer from './components/ListItemContainer'
import autocompleteService from './services/autocompleteService'
import LikeButton from './components/LikeButton'

const App = () => {
  const DEBOUNCE_DELAY = 500
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [count, setCount] = useState(100)
  const [liked, toggleLike] = useState(false)

  const searchWords = query => {
    setLoading(true)

    autocompleteService
      .getAutocomplete(query)
      .then(result => {
        //console.log(`query ${query} result`, result)
        setItems(result)
      })
      .catch(() => {
        setItems([])
      })
      .then(() => {
        setLoading(false)
      })
  }

  const loadItems = _.debounce(query => searchWords(query), DEBOUNCE_DELAY)

  const handleChange = (event) => {
    event.preventDefault()
    const q = event.target.value
    // Prevent loading if short word
    if(q.length > 2) {
      loadItems(q)
    } else {
      setItems([])
    }
  }

  const onClick = id => {
    alert(id)
  }
  
  const onLikeClick = () => {    
    const newCount = liked ? count - 1 : count + 1
    setCount(newCount)
    toggleLike(!liked)
  }

  return (
    <div className="wrapper">
      <LikeButton count={count} liked={liked} onClick={() => onLikeClick()} />
      <SearchField handleChange={handleChange} isLoading={isLoading} />
      <ListItemContainer items={items} handleClick={onClick} />
    </div>
  );
}

export default App
