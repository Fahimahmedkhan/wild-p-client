import React, { useEffect, useState } from 'react';
import MyCollection from './MyCollection';

const PhotoGalary = () => {
    const [myPhotoCollections, setMyPhotoCollections] = useState([]);
    
    useEffect(() => {
        fetch('https://wild-p-server.vercel.app/myPhotoCollection')
            .then(res => res.json())
            .then(data => {
                setMyPhotoCollections(data);
            })
    }, []);
    return (
        <div className="grid grid-cols-2 gap-4 p-8 card bg-base-300 rounded-box place-items-center">
            {
                myPhotoCollections.map(myCollection => <MyCollection
                    key={myCollection._id}
                    myCollection={myCollection}
                ></MyCollection>)
            }
        </div>
    );
};

export default PhotoGalary;