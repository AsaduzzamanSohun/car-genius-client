import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CheckOut = () => {

    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    console.log('checkout: ', user);
    const { _id, title, price, img } = service

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: _id,
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })



    }

    return (
        <div>
            <h1>Fucking checkout page</h1>
            <h1>{title}</h1>
            <p>{price}</p>


            <div>
                <form onSubmit={handleOrder} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                defaultValue={user?.displayName}
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date"
                                name="date"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                defaultValue={user?.email}
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text"
                                name="price"
                                placeholder="password"
                                className="input input-bordered"
                                defaultValue={price}
                                required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>



        </div>
    );
};

export default CheckOut;