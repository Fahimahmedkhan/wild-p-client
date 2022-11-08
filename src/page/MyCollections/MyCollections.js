import React from 'react';
import { TabTitle } from '../../utils/GeneralFunction';
import PhotoGalary from './PhotoGalary';

const MyCollections = () => {
    TabTitle('MyCollections - WildP');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photoURL = form.photoURL.value;
        const photoFile = form.photoFile.value;

        const MyCollections = { title, rating, description, photoURL, photoFile };
        console.log(MyCollections);

        fetch('https://wild-p-server.vercel.app/myPhotoCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(MyCollections)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Article added successfully');
                form.reset();
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='mt-4 mb-4'>
            <div className="flex flex-col w-full">
                <div className="p-10 grid card bg-base-300 rounded-box place-items-center">
                    <div className="card bg-base-100 pl-12 pr-12 shadow-xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h2 className="card-title">Add Collection</h2>

                            <div className="flex w-full">
                                <div className="p-2 grid flex-grow card bg-base-100 rounded-box place-items-center">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl">Title</span>
                                        </label>
                                        <label className="input-group">
                                            <span>Title</span>
                                            <input type="text" name='title' className="input input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                <div className="divider divider-horizontal"></div>
                                <div className="p-2 grid flex-grow card bg-base-100 rounded-box place-items-center">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl">Rating</span>
                                        </label>
                                        <label className="input-group">
                                            <span>Rating</span>
                                            <input type="number" name='rating' className="input input-bordered" defaultValue={5} />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-xl">Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description about the picture"></textarea>
                            </div>

                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="p-8 grid flex-grow card bg-base-300 rounded-box place-items-center">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <label className="input-group">
                                            <span className='bg-base-100'>PhotoURL</span>
                                            <input type="text" name='photoURL' className="input input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                <div className="divider lg:divider-horizontal">OR</div>
                                <div className="p-8 grid flex-grow card bg-base-300 rounded-box place-items-center">
                                    {/* file upload option */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Pick a file</span>
                                        </label>
                                        <input type="file" name='photoFile' className="file-input file-input-bordered w-full max-w-xs" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn">Add New</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="divider"></div>
                <PhotoGalary></PhotoGalary>
            </div>
        </div>
    );
};

export default MyCollections;