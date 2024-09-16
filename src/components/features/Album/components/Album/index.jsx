import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
    album:PropTypes.object.isRequired
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album_img">
                <img src = {album.img} alt={album.img}></img>
            </div>
            <div className="album_name">
            <p>{album.name}</p>
            </div>
        </div>
    );
}

export default Album;