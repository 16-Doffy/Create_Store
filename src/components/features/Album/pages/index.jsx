import React from 'react';
import AlbumList from '../components/AlbumList';

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
    const albumList = [
        {
            id:1 ,
            name: 'Dien thoai SamSung',
            img:'https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg'
        },
        {
            id:2 ,
            name: 'Dien thoai SamSung',
            img:'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-xam-thumbn-600x600.jpg'
        },
        {
            id:3 ,
            name: 'Dien thoai Iphone',
            img:'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg'
        },
    ]
    return (
        <div>
            <h3>Maybe U Like</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeatures;