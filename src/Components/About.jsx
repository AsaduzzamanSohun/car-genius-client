
const About = () => {
    return (
        <div className='my-32'>

            <div className='flex justify-between gap-28'>
                <div className='relative'>
                    <div className={`w-[480px] h-[472px] bg-cover bg-[url('https://i.ibb.co/j8LyQVM/person.jpg')]`}>
                    </div>
                    <div
                        className={`w-[327px] h-[332px] bg-cover border-8 border-white bg-[url('https://i.ibb.co/rx9DYvX/parts.jpg')] absolute -right-12 top-1/2 rounded-md`}>
                    </div>
                </div>
                <div className='flex flex-col justify-between space-y-6'>
                    <h4 className='text-[#FF3811] font-bold'>About Us</h4>
                    <h2 className='text-5xl font-bold'>
                        We are qualified <br /> & of experience <br /> in this field
                    </h2>
                    <p className='pr-24'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. <br /> <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>
                    <button
                        className='x-4 py-3 bg-[#FF3811] border border-[#FF3811] 
                        mr-4 w-[170px] text-white rounded-md'>
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;