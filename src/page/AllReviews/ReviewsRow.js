import React from 'react';

const ReviewsRow = ({ review }) => {
    const { reviewName, description, reviewer, email, photoURL } = review;

    return (
        <tr>
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
        </tr>
    );
};

export default ReviewsRow;