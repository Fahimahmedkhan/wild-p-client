import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import SecondSection from './SecondSection';

const CheckReview = () => {
    const { _id, title, rating, description, photoURL } = useLoaderData();
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    // console.log(_id)

    useEffect(() => {
        fetch(`https://wild-p-server.vercel.app/reviewCollection?email=${user?.email}`)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])



    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const photoURL = form.photoURL.value;

        const review = {
            myPhotoCollection: _id,
            reviewName: title,
            reviewer: name,
            email,
            description,
            photoURL
        }

        fetch('https://wild-p-server.vercel.app/reviewCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Reviewed successfully');
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className="flex flex-col w-full">
            <div className="grid card bg-base-300 rounded-box place-items-center">
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
                            <label htmlFor="my-modal-6" className="btn">Review</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Style review option  */}
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit} className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span className='border-2'>Your Email</span>
                                <input readOnly defaultValue={user.email} name='email' type="text" placeholder='Your Email' className="input input-bordered w-3/4" />
                            </label>

                            <label className="label">
                                <span className="label-text text-xl">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span className='border-2'>Your Name</span>
                                <input readOnly defaultValue={user.displayName} name='name' type="text" placeholder='Your Name' className="input input-bordered w-3/4" />
                            </label>


                            <label className="label">
                                <span className="label-text text-xl">Title</span>
                            </label>
                            <label className="input-group">
                                <span className='border-2'>Title</span>
                                <input readOnly defaultValue={title} name='title' type="text" placeholder='Your Title' className="input input-bordered w-full" />
                            </label>

                            <div className='hidden'>
                                <label className="label">
                                    <span className="label-text text-xl">PhotoURL</span>
                                </label>
                                <label className="input-group">
                                    <span className='border-2'>PhotoURL</span>
                                    <input readOnly defaultValue={user.photoURL} name='photoURL' type="text" placeholder='Your PhotoURL' className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-xl">Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description about the picture"></textarea>
                            </div>

                            <div className="modal-action">
                                <button type='submit'><label htmlFor="my-modal-6" className="btn">Add Review</label></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="grid card bg-base-300 rounded-box place-items-center p-4">
                <h1>Others Review</h1>
                <SecondSection
                    _id={_id}
                ></SecondSection>
            </div>
        </div>
    );
};

export default CheckReview;