import React from 'react'
import GridListItem from "./GridListItem/GridListItem";
import './GridList.css'

function GridList(props) {
    return (
        <main className='anime-list__container container'>
            <div className="anime-list">
                {props.objects.map(item => (
                    <GridListItem
                        item={item}
                        key={item.mal_id}/>
                ))}
            </div>
        </main>
    )
}

export default GridList