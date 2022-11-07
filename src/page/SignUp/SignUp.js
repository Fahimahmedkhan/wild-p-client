import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Shared/CustomAuthCss/CustomAuthCss.css';

const SignUp = () => {
    return (
        <div className='flex justify-center items-center base-100'>
            <div className=" m-12">
                <div className='box box2'>
                    <form className="form">
                        <h2>Sign up</h2>
                        <div className="inputBox">
                            <input type="text" required="required" />
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="email" required="required" />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required="required" />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <Link to='/auth/login'>Already have an Account?</Link>
                        </div>
                        <div className='flex justify-between items-center'>
                            <input type="submit" value="Register" />
                            <Link className='links text-white mt-4 hover:text-orange-600' to='/'>Go to Home</Link>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center mt-8 mb-8 space-x-4'>
                    <hr className='border-2 bg-black border-black w-36 dark:bg-white dark:border-white' />
                    <h1 className='text-4xl font-semibold text-white'>OR</h1>
                    <hr className='border-2 bg-black border-black w-36 dark:bg-white dark:border-white' />
                </div>
                <div className="md:place-self-center md:justify-self-end pl-10">
                    <div className="grid grid-flow-col gap-12">
                        <button className="icon icon--twitter"> <FaFacebook /></button>
                        <button className="icon icon--google"> <FaGoogle /></button>
                        <button className="icon icon--github"> <FaGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;