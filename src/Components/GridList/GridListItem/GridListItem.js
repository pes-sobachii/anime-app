import '../GridList.css'
import React from 'react'

function GridListItem({item}) {
    return (
        <article className="anime-card">
            <a
                href={item.url}
                target="_blank"
                rel="noreferrer">
                <figure>
                    <img
                        src={item.images.jpg.image_url}
                        alt="Anime Image" />
                </figure>
                <h3>{ item.title }</h3>
            </a>
        </article>
    )
}

export default GridListItem