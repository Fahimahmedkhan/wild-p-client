import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleCollection = ({ collection }) => {
    const { title, rating, description, photoURL } = collection;
    return (
        <div className="card bg-base-100 pt-2 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={photoURL}>
                        <img src={photoURL} style={{ objectFit: 'cover' }} alt="" className='max-w-sm rounded-lg shadow-2xl' />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='p-2'>{description.slice(0, 100)} ...</p>
                <p className='flex justify-start items-center text-xl'><FaStar className='mr-2 text-2xl' />{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCollection;