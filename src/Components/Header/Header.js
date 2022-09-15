import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header sticky sticky--top js-header">

            <div className="grid">

                <nav className="navigation">
                    <div className="navigation__logo">MyAnimeApp</div>
                    <ul className="navigation__list navigation__list--inline">
                        <li className="navigation__item"><NavLink to="/top_anime"
                                                            className="navigation__link">Anime</NavLink>
                        </li>
                        <li className="navigation__item"><NavLink to="/top_manga" className="navigation__link">Manga</NavLink></li>
                        <li className="navigation__item"><NavLink to="/" className="navigation__link">Search</NavLink></li>
                    </ul>
                </nav>

            </div>

        </header>
    );
};

export default Header;