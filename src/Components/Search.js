import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(()=>{
        props.onSearch(searchText);
    },[searchText]);

    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" value={searchText} onChange={handleChange} placeholder='Search Country...' />
        </div>
    )
}

export default Search;

/* 
state lagbe jar maddome value store krbo

sate sate rendering hoye shey value jate pete pari tai useeffect krte hobe
useEffect use : jkn  render hobe immediate data kuje pabo

search value app.js e niye ashte hobe then filteredCountries e search krte parbo
*/