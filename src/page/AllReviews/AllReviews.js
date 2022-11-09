import React, { useEffect, useState } from 'react';
import { TabTitle } from '../../utils/GeneralFunction';
import ReviewsRow from './ReviewsRow';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://wild-p-server.vercel.app/reviewCollection')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [])
    TabTitle('AllReviews - WildP');
    return (
        <div className="grid card bg-base-300 rounded-box place-items-center p-4">
            <h1>All Reviews</h1>
            <div className="overflow-x-auto w-full m-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name & Email</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            reviews.map(review => <ReviewsRow
                                key={review._id}
                                review={review}
                            ></ReviewsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReviews;