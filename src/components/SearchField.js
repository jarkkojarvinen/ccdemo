import React from 'react'

const SearchField = ({ ref, handleChange, isLoading }) => {
    // isLoading can be used e.g. to change className of input
    return (
        <div className="control">            
            <input ref={ref} type="search" className="input" placeholder='Search' onChange={handleChange} disabled={isLoading} />
        </div>
    )
}

export default SearchField