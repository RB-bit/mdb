import React from 'react'

const Filter = ({handleSearchChange}) => {

return (
    <>
    <p>Filter shown with</p>
    <input type="text" onChange={handleSearchChange}/>
    </>
)
}

export default Filter