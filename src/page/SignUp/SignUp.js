import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import '../Shared/CustomAuthCss/CustomAuthCss.css';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { TabTitle } from '../../utils/GeneralFunction';

const SignUp = () => {
    TabTitle('SignUp - WildP');

    const { createUser, providerGmailLogin, providerGithubSignIn, providerFacebookSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                updateUserNameAndPhoto(name, photoURL);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const auth = getAuth(app);


    const updateUserNameAndPhoto = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                console.log('display name')
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        providerGmailLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerGithubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleFacebookSignIn = () => {
        providerFacebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='flex justify-center items-center base-100'>
            <div className=" m-12">
                <div className='box box2'>
                    <form onSubmit={handleSubmit} className="form">
                        <h2>Sign up</h2>
                        <div className="inputBox">
                            <input name='userName' type="text" required="required" />
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input name='photoURL' type="text" required="required" />
                            <span>PhotoURL</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input name='email' type="email" required="required" />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input name='password' type="password" required="required" />
                            <span>Password</span>
                            <i></i>
                        </div>
                        {
                            error && <p className='text-sm mx-4 my-4 text-red-800 dark:text-orange-600'>{error}</p>
                        }
                        {
                            success && <p className='text-2xl mx-4 my-4 text-lime-500 dark:text-green-100'>User Created Successfully.</p>
                        }
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
                        <button onClick={handleFacebookSignIn} className="icon icon--twitter"> <FaFacebook /></button>
                        <button onClick={handleGoogleSignIn} className="icon icon--google"> <FaGoogle /></button>
                        <button onClick={handleGithubSignIn} className="icon icon--github"> <FaGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;