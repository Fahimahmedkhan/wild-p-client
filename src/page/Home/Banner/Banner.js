import React from 'react';
import banner1 from '../../../assets/banner/banner (1).jpg';
import banner2 from '../../../assets/banner/banner (2).jpg';
import banner3 from '../../../assets/banner/banner (3).jpg';
import banner4 from '../../../assets/banner/banner (4).jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Banner = () => {
    return (
        <div className="carousel w-full rounded mb-10 mt-2">
            <div id="slide1" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src={banner1}>
                        <img src={banner1} style={{ objectFit: 'cover' }} alt="" className='w-full' />
                    </PhotoView>
                </PhotoProvider>
                {/* <img src={banner1} className="w-full" alt='' /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src={banner2}>
                        <img src={banner2} style={{ objectFit: 'cover' }} alt="" className='w-full' />
                    </PhotoView>
                </PhotoProvider>
                {/* <img src={banner2} className="w-full" alt='' /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src={banner3}>
                        <img src={banner3} style={{ objectFit: 'cover' }} alt="" className='w-full' />
                    </PhotoView>
                </PhotoProvider>
                {/* <img src={banner3} className="w-full" alt='' /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src={banner4}>
                        <img src={banner4} style={{ objectFit: 'cover' }} alt="" className='w-full' />
                    </PhotoView>
                </PhotoProvider>
                {/* <img src={banner4} className="w-full" alt='' /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;