import React from 'react';

const SongDetails = ({artist, title, loaded, image}) => {

    if(!loaded){
        return <p>Loading ....</p>
    }   

    return (
        <>
        <div id="song">
        <img class='image' src={image} alt='Artist'></img> <li>{artist} {title} </li>
        </div>
        </>
    );
}

export default SongDetails;