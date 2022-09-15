import React, {useEffect} from 'react';
import './MangaList.css'
import GridList from "../GridList/GridList";
import {useState} from "react";
import './MangaList.css'


const MangaList = () => {

    const [topManga, setTopManga] = useState([])

    const getTopManga = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/manga?limit=20`).then((res) => res.json())
        setTopManga(temp.data)
    }

    useEffect(() => {
        getTopManga()
    }, [])

    return (
        <div className='manga-list-wrapper'>
            <h2 className="manga-title">Popular Manga</h2>
            <GridList objects={topManga}/>
        </div>
    );
};

export default MangaList;