import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FiDelete, FiEdit } from 'react-icons/fi';

const Row = ({ review, handleDelete }) => {
    const { _id, reviewName, description, reviewer, email, myPhotoCollection, photoURL } = review;
    const [checkedReview, setCheckedReview] = useState({})
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://wild-p-server.vercel.app/myPhotoCollection/${myPhotoCollection}`)
            .then(res => res.json())
            .then(data => setCheckedReview(data));
    }, [myPhotoCollection])

    const handleEdit = event => {
        event.preventDefault();
        const form = event.target;
        const description = form.description.value;
        console.log(description);
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                checkedReview?.photoURL &&
                                <img src={checkedReview.photoURL} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {reviewName}
            </td>
            <td>{description}</td>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><FiDelete /></button>
                </label>
            </th>
            <th>
                <div className="card-actions justify-end">
                    <label htmlFor="my-modal-6" className="btn btn-ghost"><FiEdit /></label>
                </div>
                {/* Modal Style review option  */}
                <div>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleEdit} className="form-control">
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
                                    <input readOnly defaultValue={reviewName} name='title' type="text" placeholder='Your Title' className="input input-bordered w-full" />
                                </label>

                                <div className='hidden'>
                                    <label className="label">
                                        <span className="label-text text-xl">PhotoURL</span>
                                    </label>
                                    <label className="input-group">
                                        <span className='border-2'>PhotoURL</span>
                                        <input readOnly defaultValue={photoURL} name='photoURL' type="text" placeholder='Your PhotoURL' className="input input-bordered w-full" />
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
            </th>
        </tr>
    );
};

export default Row;