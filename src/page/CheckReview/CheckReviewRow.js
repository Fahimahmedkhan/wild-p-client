import React from 'react';

const CheckReviewRow = ({ _id, review }) => {
    const { myPhotoCollection, reviewName, description, reviewer, email, photoURL } = review;
    const verify = () => {
        if (myPhotoCollection === _id) {
            return <>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
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
            </>
        }
    }
    return (
        <tr>
            {
                verify()
            }
        </tr>
    );
};

export default CheckReviewRow;