import { Link, useLocation, useNavigate } from 'react-router-dom';
import login_img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { user, login } = useContext(AuthContext)

    

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        const user = { email }
        console.log(user);

        login(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                
                axios.post('http://localhost:5000/jwt', 
                user, {withCredentials: true}
                )
                    .then(res => {
                        console.log(res.data);
                        if(res.data.success){
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
            })
            .catch(error => console.log(error.data));

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <div className="text-center lg:text-left">
                        <img src={login_img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl font-bold text-center mb-6">Login now!</h1>

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
                                    user ? <input className="btn btn-secondary" type="submit" value="Logout" />
                                        :
                                        <input className="btn btn-secondary" type="submit" value="Login" />
                                }

                            </div>
                            <div className='my-4 text-center'>
                                <p>New here? Please <Link className='text-blue-500 font-semibold' to='/register'>Signup</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;