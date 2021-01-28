import React from 'react'
import './SongRow.css'

const SongRow = ({song}) => {
    return (
        <div className="songRow">
            <img class="songRow__cover" src={song.album.images[0].url} alt=""/>
            <div class="songRow__info">
                <p>{song.name}</p>
                <p>
                    {song.artists.map(artist => artist.name).join(', ')}
                    {song.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
