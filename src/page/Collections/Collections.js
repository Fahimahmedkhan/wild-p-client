import React, { useEffect, useState } from 'react';
import { TabTitle } from '../../utils/GeneralFunction';
import SingleCollection from './SingleCollection';

const Collections = () => {
    TabTitle('Collections - WildP');
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch('https://wild-p-server.vercel.app/collection')
            .then(res => res.json())
            .then(data => {
                setCollections(data);
            })
    }, []);
    return (
        <div className="m-10 grid grid-cols-2 gap-5">
            {
                collections.map(collection => <SingleCollection
                    key={collection._id}
                    collection={collection}
                ></SingleCollection>)
            }
        </div>
    );
};

export default Collections;