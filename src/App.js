import './App.css';
import Header from "./Components/Header/Header";
import {HashRouter, Route, Routes} from "react-router-dom";
import AnimeList from "./Components/AnimeList/AnimeList.js";
import MangaList from "./Components/MangaList/MangaList.js";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {

    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/top_anime" element={<AnimeList anime={topAnime}/>}/>
                    <Route path="/top_manga" element={<MangaList manga={topManga}/>}/>
                </Routes>
            </div>

        </HashRouter>

    );
}

export default App;
