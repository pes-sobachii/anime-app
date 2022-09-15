import React from 'react';
import {Link} from "react-router-dom";
import './SearchPage.css'

const SearchPageItem = ({anime}) => {
    console.log(anime)
    return (
    <div className='searched-item'>
        <div className='searched-item__row'>
            <div className='searched-item__poster-wrapper'>
                <Link to={`/movie/${anime.id}`} className='searched-item__poster'>
                    <img src={anime.images.jpg.image_url} alt="" />
                </Link>
            </div>
            <div className='searched-item__info'>
                <Link to={`/movie/${anime.id}`} className='searched-item__title'>{anime.title}</Link>
                <p>{anime.synopsis}</p>
            </div>
        </div>
    </div>
    );
};

export default SearchPageItem;