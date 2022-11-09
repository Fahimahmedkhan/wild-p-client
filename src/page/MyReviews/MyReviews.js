import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { TabTitle } from '../../utils/GeneralFunction';
import Row from './Row';

const MyReviews = () => {
    TabTitle('MyReviews - WildP');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://wild-p-server.vercel.app/reviewCollection?email=${user?.email}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            fetch(`https://wild-p-server.vercel.app/reviewCollection/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    

    return (
        <div className="grid card bg-base-300 rounded-box place-items-center p-4">
            <h1>My Reviews</h1>
            <div className="overflow-x-auto w-full m-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name & Email</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            reviews.map(review => <Row
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                
                            ></Row>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;