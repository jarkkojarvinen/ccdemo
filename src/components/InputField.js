import React from 'react'

const InputField = ({ handleChange, isLoading }) => {
    // isLoading can be used e.g. to change className of input
    return (
        <div className="control">            
            <input type="text" className="input" onChange={handleChange} disabled={isLoading} />
        </div>
    )
}

export default InputField