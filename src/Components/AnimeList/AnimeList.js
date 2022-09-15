import React, {useEffect} from 'react';
import './AnimeList.css'
import GridList from "../GridList/GridList";
import {useState} from "react";
import './AnimeList.css'



const AnimeList = () => {

    const [topAnime, setTopAnime] = useState([])


    const getTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime?limit=20`).then((res) => res.json())
        setTopAnime(temp.data)
    }

    useEffect(() => {
        getTopAnime()
    }, [])

    return (
        <div className='anime-list-wrapper'>
            <h2 className="anime-title">Popular Anime</h2>
            <GridList objects={topAnime}/>
        </div>
    );
};

export default AnimeList;