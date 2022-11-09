import React, { useEffect, useState } from 'react';
import CheckReviewRow from './CheckReviewRow';

const SecondSection = ({ _id }) => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://wild-p-server.vercel.app/reviewCollection')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setAllReviews(data);
            })
    }, []);

    return (
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
                        allReviews.map(review => <CheckReviewRow
                            _id={_id}
                            key={review._id}
                            review={review}
                        ></CheckReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SecondSection;