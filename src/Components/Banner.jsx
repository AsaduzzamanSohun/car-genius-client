import { ScrollRestoration } from 'react-router-dom'
import banner1 from '../assets/images/banner/1.jpg'
import banner2 from '../assets/images/banner/2.jpg'
import banner3 from '../assets/images/banner/3.jpg'
import banner4 from '../assets/images/banner/4.jpg'
import banner5 from '../assets/images/banner/5.jpg'
import banner6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    ScrollRestoration('/')
    return (
        <div className='my-12'>
            <div className="carousel w-full rounded-xl">

                {/* Slide - 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-xl" />

                    <div
                        className='absolute w-full h-full bg-opacity-80 text-white 
                        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] 
                        flex items-center rounded-xl'>
                        <div className='w-[522px] text-lg p-4 space-y-6 ml-32 leading-8'>
                            <h1 className='text-7xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button
                                    className='px-4 py-2 bg-[#FF3811] border border-[#FF3811] 
                                hover:bg-transparent  hover:border-white duration-500 mr-4 rounded-sm'>Discover More</button>
                                <button
                                    className='px-4 py-2 bg-transparent border border-white 
                                hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 rounded-sm'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute transform -translate-y-1/2 bottom-4 right-10 ">
                        <a href="#slide6" className="btn btn-circle mr-4 bg-opacity-35 text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white">❯</a>
                    </div>
                </div>

                {/* Slide - 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-xl" />

                    <div
                        className='absolute w-full h-full bg-opacity-80 text-white 
                        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] 
                        flex items-center'>
                        <div className='w-[522px] text-lg p-4 space-y-6 ml-32 leading-8'>
                            <h1 className='text-7xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button
                                    className='px-4 py-2 bg-[#FF3811] border border-[#FF3811] 
                                hover:bg-transparent  hover:border-white duration-500 mr-4 rounded-sm'>Discover More</button>
                                <button
                                    className='px-4 py-2 bg-transparent border border-white 
                                hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 rounded-sm'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute transform -translate-y-1/2 bottom-4 right-10 ">
                        <a href="#slide1" className="btn btn-circle mr-4 bg-opacity-35 text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white">❯</a>
                    </div>
                </div>

                {/* Slide - 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-xl" />

                    <div
                        className='absolute w-full h-full bg-opacity-80 text-white 
                        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] 
                        flex items-center'>
                        <div className='w-[522px] text-lg p-4 space-y-6 ml-32 leading-8'>
                            <h1 className='text-7xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button
                                    className='px-4 py-2 bg-[#FF3811] border border-[#FF3811] 
                                hover:bg-transparent  hover:border-white duration-500 mr-4 rounded-sm'>Discover More</button>
                                <button
                                    className='px-4 py-2 bg-transparent border border-white 
                                hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 rounded-sm'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute transform -translate-y-1/2 bottom-4 right-10 ">
                        <a href="#slide2" className="btn btn-circle mr-4 bg-opacity-35 text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white">❯</a>
                    </div>

                </div>

                {/* Slide - 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full rounded-xl" />

                    <div
                        className='absolute w-full h-full bg-opacity-80 text-white 
                        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] 
                        flex items-center'>
                        <div className='w-[522px] text-lg p-4 space-y-6 ml-32 leading-8'>
                            <h1 className='text-7xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button
                                    className='px-4 py-2 bg-[#FF3811] border border-[#FF3811] 
                                hover:bg-transparent  hover:border-white duration-500 mr-4 rounded-sm'>Discover More</button>
                                <button
                                    className='px-4 py-2 bg-transparent border border-white 
                                hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 rounded-sm'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute transform -translate-y-1/2 bottom-4 right-10 ">
                        <a href="#slide3" className="btn btn-circle mr-4 bg-opacity-35 text-white">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white">❯</a>
                    </div>
                </div>

                {/* Slide - 5 */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full rounded-xl" />

                    <div
                        className='absolute w-full h-full bg-opacity-80 text-white 
                        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] 
                        flex items-center'>
                        <div className='w-[522px] text-lg p-4 space-y-6 ml-32 leading-8'>
                            <h1 className='text-7xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button
                                    className='px-4 py-2 bg-[#FF3811] border border-[#FF3811] 
                                hover:bg-transparent  hover:border-white duration-500 mr-4 rounded-sm'>Discover More</button>
                                <button
                                    className='px-4 py-2 bg-transparent border border-white 
                                hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 rounded-sm'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute transform -translate-y-1/2 bottom-4 right-10 ">
                        <a href="#slide4" className="btn btn-circle mr-4 bg-opacity-35 text-white">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white">❯</a>
                    </div>
                </div>

                {/* Slide - 6 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full rounded-xl" />

                    <div
                        className='absolute w-full h-full bg-opacity-80 text-white 
                        bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] 
                        flex items-center'>
                        <div className='w-[522px] text-lg p-4 space-y-6 ml-32 leading-8'>
                            <h1 className='text-7xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button
                                    className='px-4 py-2 bg-[#FF3811] border border-[#FF3811] 
                                hover:bg-transparent  hover:border-white duration-500 mr-4 rounded-sm'>Discover More</button>
                                <button
                                    className='px-4 py-2 bg-transparent border border-white 
                                hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 rounded-sm'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute transform -translate-y-1/2 bottom-4 right-10 ">
                        <a href="#slide5" className="btn btn-circle mr-4 bg-opacity-35 text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;