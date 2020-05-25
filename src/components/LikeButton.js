import React from 'react'
import './LikeButton.css'

const LikeButton = ({ count, liked, onClick }) => {    
    const buttonStyle = 'btn ' + (liked ? 'liked' : '')

    return (
        <button onClick={onClick} className={buttonStyle}>Like | <span>{count}</span></button>
    )
}

export default LikeButton