import React, { useEffect, useState } from 'react';
import MyCollection from './MyCollection';

const PhotoGalary = () => {
    const [myPhotoCollections, setMyPhotoCollections] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`https://wild-p-server.vercel.app/myPhotoCollection?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setMyPhotoCollections(data.photo);
            })
    }, [page, size]);
    const pages = Math.ceil(count / size);
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 p-8 card bg-base-300 rounded-box place-items-center">
                {
                    myPhotoCollections.map(myCollection => <MyCollection
                        key={myCollection._id}
                        myCollection={myCollection}
                    ></MyCollection>)
                }
            </div>

            <div className="flex justify-center items-center p-8">
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        // className={'btn ml-1 mr-1' || (page === number && 'selected')}
                        className={'btn btn-outline m-1' || (page === number && 'btn btn-active')}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                <div className="form-control ml-4 max-w-xs text-center">
                    <select onChange={event => setSize(event.target.value)} className="select select-bordered ">
                        <option value="2" selected>2</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PhotoGalary;