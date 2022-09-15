import React, {useState} from 'react';
import SearchPageItem from "./SearchPageItem";
import './SearchPage.css'

const SearchPage = () => {

    const [searchResult, setSearchResult] = useState([])
    const [inputValue, setInputValue] = useState('')

    const getAnimeByQuery = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?page=1&q=${inputValue}`).then((res) => res.json())
        setSearchResult(temp.data)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        getAnimeByQuery(inputValue)
    }

    return (
        <div className='search-container container'>
            <div className="query-input">
                <form className='query-input__form' action="#" onSubmit={submitHandler}>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search for a serial...'/>
                </form>
            </div>
            <div className="query-result">
                {searchResult.length === 0 ? <div className='search-plug'>It seems to be nothing here</div> : searchResult.map( item => <SearchPageItem key={item.mal_id} anime={item}/>)}
            </div>
        </div>
    );
};

export default SearchPage;