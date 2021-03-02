import React, { useEffect, useState } from 'react';
import SongDetails from '../Components/SongDetails';

const MusicChartContainer = () => {

    const [songs, setSongs] = useState([])

    const getSongs = () => {
        console.log("Getting songs");
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry[0]))
    }

    useEffect(() => {
        console.log ("Use effect triggered")
        getSongs();
    }, [])

    return (
        <>
        <h2>Music chart container</h2>
        <SongDetails/>
    </>
    );
}

export default MusicChartContainer;