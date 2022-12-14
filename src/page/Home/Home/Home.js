import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import picture1 from '../../../assets/image/image (1).jpg'
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MdCollectionsBookmark } from 'react-icons/md';
import { TabTitle } from '../../../utils/GeneralFunction';
import ThreeCollection from '../ThreeCollection/ThreeCollection';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    TabTitle('WildP');
    const [collections, setCollections] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://wild-p-server.vercel.app/collections')
            .then(res => res.json())
            .then(data => {
                setCollections(data);
            })
    }, []);

    const privilegeCondition = () => {
        if (user?.email === 'admin@gmail.com') {
            return <></>
        }
        else {
            return <div className='flex justify-center items-start mt-4 mb-4'>
                <Link to='/collections'><button className='btn'>See More...</button></Link>
            </div>
        }
    }

    return (
        <div className='mt-0'>
            <Banner></Banner>
            <div className="hero min-h-screen bg-base-200 rounded">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <PhotoProvider>
                        <PhotoView src={picture1}>
                            <img src={picture1} style={{ objectFit: 'cover' }} alt="" className='max-w-sm rounded-lg shadow-2xl' />
                        </PhotoView>
                    </PhotoProvider>
                    {/* <img src={picture1} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <div>
                        <h1 className="text-5xl font-bold">What to expect!</h1>
                        <p className="py-6">WildP is a website full of collection of wildlife photography all over the world.</p>
                        <Link to='/collections'><button className="btn btn-primary text-white text-xl"><MdCollectionsBookmark />Collections</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4 mt-10'>
                    {/* data from mongodb will be here  */}
                    {
                        collections.map(collection => <ThreeCollection
                            key={collection._id}
                            collection={collection}
                        ></ThreeCollection>
                        )
                    }
                </div>
                {
                    privilegeCondition()
                }
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                        <div className='w-96 h-96'>
                            <Map></Map>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">World!</h1>
                            <p className="py-6">Wildlife refers to undomesticated animal species, but has come to include all organisms that grow or live wild in an area without being introduced by humans. Wildlife was also synonymous to game: those birds and mammals that were hunted for sport.Wildlife can be found in all ecosystems.Deserts, plains, grasslands, woodlands, forests, and other areas, including the most developed urban areas, all have distinct forms of wildlife.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;