import React, { useEffect, useState } from 'react';
import { FiDelete, FiEdit } from 'react-icons/fi';

const Row = ({ review, handleDelete }) => {
    const { _id, reviewName, description, reviewer, email, myPhotoCollection } = review;
    const [checkedReview, setCheckedReview] = useState({})

    useEffect(() => {
        fetch(`https://wild-p-server.vercel.app/myPhotoCollection/${myPhotoCollection}`)
            .then(res => res.json())
            .then(data => setCheckedReview(data));
    }, [myPhotoCollection])

    const handleEdit = id => {

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
                <label>
                    <button onClick={() => handleEdit(_id)} className='btn btn-ghost'><FiEdit /></button>
                </label>
            </th>
        </tr>
    );
};

export default Row;