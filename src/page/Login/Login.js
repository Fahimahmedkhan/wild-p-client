import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { TabTitle } from '../../utils/GeneralFunction';
import '../Shared/CustomAuthCss/CustomAuthCss.css';

const Login = () => {
    TabTitle('Login - WildP');

    const { signIn, providerGmailLogin, providerGithubSignIn, providerFacebookSignIn, resetPassword } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [userProfile, setUserProfile] = useState({});
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setUserProfile(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handelEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handelForgetPassword = () => {
        resetPassword(userEmail)
            .then(() => {
                alert('Password Reset Email Sent. Please Check Your Email in spam folder');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        providerGmailLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserProfile(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerGithubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserProfile(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleFacebookSignIn = () => {
        providerFacebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserProfile(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex justify-center items-center base-100'>
            <div className=" m-12">
                <div className='box'>
                    <form onSubmit={handleSubmit} className="form">
                        <h2>Sign in</h2>
                        <div className="inputBox">
                            <input onBlur={handelEmailBlur} name='email' type="email" required="required" />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input name='password' type="password" required="required" />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <p className='text-2xl mx-4 my-4 text-red-800 dark:text-orange-600'>{error}</p>
                        <div className="links">
                            <button onClick={handelForgetPassword}>
                                <p>Forgot Password?</p>
                            </button>
                            <Link to='/auth/register'>Sign Up</Link>
                        </div>
                        <div className='flex justify-between items-center'>
                            <input type="submit" value="Login" />
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

export default Login;