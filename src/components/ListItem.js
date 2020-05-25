import React from 'react'

const ListItem = ({ item, id, handleClick }) => {
    return (
        <div>
            <a id={`list-item-${id}`} className='list-item' onClick={() => handleClick(item)}>{item}</a>
        </div>
    )
}

export default ListItem