import React from 'react'
import ListItem from './ListItem'
import './ListItemContainer.css'

const ListItemContainer = ({ items = [], handleClick }) => {
    if (items.length === 0)
        return null

    return (
        <div className="list is-hoverable">
            {
                items.map((item, id) =>
                    <ListItem key={`list-item-${id}`} id={id} item={item} handleClick={handleClick}></ListItem>
                )
            }
        </div>
    )
}

export default ListItemContainer