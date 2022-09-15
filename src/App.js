import './App.css';
import {useEffect, useState} from "react";
import Header from "./Components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AnimeList from "./Components/AnimeList/AnimeList.js";
import MangaList from "./Components/MangaList/MangaList.js";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
    const [topManga, setTopManga] = useState([])
    const [topAnime, setTopAnime] = useState([])


    const getTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) => res.json())
        setTopAnime(temp.data)
    }

    const getTopManga = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/manga`).then((res) => res.json())
        setTopManga(temp.data)
        debugger
    }

    useEffect(() => {
        //getTopAnime()
        //getTopManga()
        //getAnimeByQuery()
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/top_anime" element={<AnimeList anime={topAnime}/>}/>
                    {/*<Route path="/search" element={} />*/}
                    <Route path="/top_manga" element={<MangaList manga={topManga}/>}/>
                    {/*{<Route path="*" element={<NoPage/>}/>}*/}
                </Routes>
            </div>

        </BrowserRouter>

    );
}

export default App;
