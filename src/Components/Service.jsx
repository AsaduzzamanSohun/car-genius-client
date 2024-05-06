import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                // console.log('data: ', data);
            })
    }, [])

    return (
        <div>
            <div className="space-y-8 text-center">
                <h4 className='text-[#FF3811] font-bold'>Service</h4>
                <h2 className='text-5xl font-bold'>
                    Our Service Area
                </h2>
                <p className=''>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)
                }

            </div>
        </div>
    );
};

export default Service;