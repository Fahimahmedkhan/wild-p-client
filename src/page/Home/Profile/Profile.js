import React, { useContext, useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { TabTitle } from '../../../utils/GeneralFunction';


const auth = getAuth();

const Profile = () => {
    TabTitle('Profile - WildP');
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name, email, photoURL);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            });

    }

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handlePhotoURLChange = event => {
        setPhotoURL(event.target.value);
    }

    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-center'>User Profile:</h1>
            <div className='flex justify-center items-center m-10'>
                <div className="max-w-sm">
                    {/* <Card imgSrc={photoURL}>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            User Name: <span className='text-xl font-normal pl-2'>{name}</span>
                        </p>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            User Email: <span className='text-xl font-normal pl-2'>{email}</span>
                        </p>
                        <div className="flex justify-end items-end"> */}
                    {/* The button to open modal */}
                    {/* <label htmlFor="my-modal" className="btn modal-button text-white text-xl font-bold border-0 dark:text-black bg-blue-600 hover:bg-orange-500">Edit Profile</label> */}
                    {/* </div>
                    </Card> */}

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={photoURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">User Name: <span className='text-xl font-normal pl-2'>{name}</span></h2>
                            <p>User Email: <span className='text-xl font-normal pl-2'>{email}</span></p>
                            <div className="card-actions justify-end">
                                <label htmlFor="my-modal-6" className="btn">Edit Profile</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <input onChange={handleEmailChange} readOnly defaultValue={email} type="text" placeholder='Your Email' className="input input-bordered" />
                            </label>

                            <label className="label">
                                <span className="label-text text-xl">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span className='border-2'>Full Name</span>
                                <input type="text" onChange={handleNameChange} defaultValue={name} placeholder='Full Name' className="input input-bordered" />
                            </label>

                            <label className="label">
                                <span className="label-text text-xl">Your Photo URL</span>
                            </label>
                            <label className="input-group">
                                <span className='border-2'>Your Photo URL</span>
                                <input onChange={handlePhotoURLChange} type="text" defaultValue={photoURL} placeholder='Your Photo URL' className="input input-bordered" />
                            </label>
                            <div className="modal-action">
                                <button type='submit'><label htmlFor="my-modal-6" className="btn">Edit</label></button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box bg-white">
                        <form onSubmit={handleSubmit} className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span className='bg-white dark:bg-black border-2'>Your Email</span>
                                <input onChange={handleEmailChange} readOnly defaultValue={email} type="text" placeholder='Your Email' className="input input-bordered bg-white" />
                            </label>

                            <label className="label">
                                <span className="label-text text-xl">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span className='bg-white dark:bg-black border-2'>Full Name</span>
                                <input type="text" onChange={handleNameChange} defaultValue={name} placeholder='Full Name' className="input input-bordered bg-white" />
                            </label>

                            <label className="label">
                                <span className="label-text text-xl">Your Photo URL</span>
                            </label>
                            <label className="input-group">
                                <span className='bg-white dark:bg-black border-2'>Your Photo URL</span>
                                <input onChange={handlePhotoURLChange} type="text" defaultValue={photoURL} placeholder='Your Photo URL' className="input input-bordered bg-white" />
                            </label>
                            <div className="modal-action">
                                <button type='submit'><label htmlFor="my-modal" className="btn modal-button text-white text-xl font-bold border-0 dark:text-black bg-blue-600 hover:bg-orange-500">Edit</label></button>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default Profile;