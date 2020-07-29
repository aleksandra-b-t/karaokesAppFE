import React from 'react'

const Search = props => {
    return (
        <>
            <label>
                Search: 
                <input name="search" placeholder="Search song..." onChange={props.handleChange} value={props.search}/>
            </label>
        </>
    )
}

export default Search