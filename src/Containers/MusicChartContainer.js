import React, { useEffect, useState } from 'react';
import SongDetails from '../Components/SongDetails';

const MusicChartContainer = () => {

    const [songs, setSongs] = useState([])

    const [loaded, setLoaded] = useState(false)

    const songsNodes = songs.map(song => {
        return (
            <SongDetails artist={song['im:artist'].label} title={song['im:name'].label} image={song["im:image"][2].label} key={song.id.attributes['im:id']} loaded={loaded}/>

        )
    })

    const getSongs = () => {
        console.log("Getting songs");
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        console.log ("Use effect triggered")
        getSongs();
    }, [])

    return (
        <>
        <div id="header">
        <h2>Music chart container</h2>
        </div>
        <ul>{songsNodes}</ul>
    </>
    );
}

export default MusicChartContainer;