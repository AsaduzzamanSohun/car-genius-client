import { Link } from 'react-router-dom';
import register_img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const { user, createUser, setUser } = useContext(AuthContext);


    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const user = { name, email, photo, password };
        console.log('user: ', user);

        createUser(email, password)
            .then(res => {
                const currentUser = res.user;
                console.log('current user: ', currentUser);
                updateProfile(currentUser, {
                    displayName: name, 
                    photoURL: photo,
                    email: email
                })
                    .then(() => {
                        setUser({
                            displayName: name, photoURL: photo, email: email
                        })
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <div className="text-center lg:text-left">
                        <img src={register_img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-4xl font-bold text-center mb-6">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="name"
                                    name='name'
                                    placeholder="name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-url</span>
                                </label>
                                <input
                                    type="text"
                                    name='photo'
                                    placeholder="photo url"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                {
                                    user ? <button className="btn btn-primary hidden">Register</button>
                                        :
                                        <button className="btn btn-primary">Register</button>

                                }
                            </div>

                            <div className='my-4 text-center'>
                                <p>Already have an account? Please <Link className='text-red-500 font-semibold' to='/login'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;