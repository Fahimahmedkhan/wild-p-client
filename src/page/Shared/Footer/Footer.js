import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../CustomIconCss/CustomIconCss.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-800 text-white">
                <div>
                    <span className="footer-title">ADDRESS</span>
                    <span className='font-semibold text-sm'>Uposhohor, Rajshahi</span>
                </div>
                <div>
                    <span className="footer-title">Mail</span>
                    <span className='font-semibold text-sm'>fahimkhangorbo@yahoo.com</span>
                </div>
                <div>
                    <span className="footer-title">Phone</span>
                    <span className='font-semibold text-sm'>+8801788******</span>
                </div>
            </footer>
            <footer className="footer p-10 bg-gray-800 text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className='hover:text-orange-600' to='/'>Home</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className='hover:text-orange-600' to='/'>About Us</Link>
                    <Link className='hover:text-orange-600' to='/blogs'>Blogs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className='hover:text-orange-600' to='/'>Terms of use</Link>
                    <Link className='hover:text-orange-600' to='/'>Privacy policy</Link>
                    <Link className='hover:text-orange-600' to='/'>Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">GET UPDATES</span>
                        </label>
                        <div className="relative text-black">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-gray-800 text-white border-base-300">
                <div className="items-center grid-flow-col">
                    <div className='fill-current w-28'>
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <p><span className='font-bold text-xl'>WildP</span> <br />Providing reliable tech since 2022</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.instagram.com/fahim_ahmed_khan_gorbo/" className="icon icon--instagram" target="_blank" rel='noreferrer'>
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/Fahim_Gorbo" className="icon icon--twitter" target="_blank" rel='noreferrer'>
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/" className="icon icon--linkedin" target="_blank" rel='noreferrer'>
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/Fahimahmedkhan" className="icon icon--github" target="_blank" rel='noreferrer'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </footer>
            <footer className='px-10 py-4 border-t bg-gray-800 text-white border-base-300 text-center'>
                <p>Copyright © 2022 - All right reserved by <span className='font-bold text-xl'>WildP</span></p>
            </footer>
        </div>
    );
};

export default Footer;