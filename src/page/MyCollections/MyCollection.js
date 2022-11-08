import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MyCollection = ({ myCollection }) => {
    const { title, rating, description, photoURL } = myCollection;

    return (
        <div className="p-2 card bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={photoURL}>
                        <img src={photoURL} style={{ objectFit: 'cover' }} alt="" className='max-w-sm rounded-lg shadow-2xl' />
                    </PhotoView>
                </PhotoProvider>
                {/* <img src={photoURL} alt="Album" className='mt-2 w-96 h-96 rounded' /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='p-2'>{description}</p>
                <p className='flex justify-start items-center text-xl'><FaStar className='mr-2 text-2xl' />{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default MyCollection;