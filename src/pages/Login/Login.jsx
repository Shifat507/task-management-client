import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../../assets/animation/login-animation.json'
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse md:px-24">
                <div className="">
                    <Lottie className='' animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold mx-auto">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name='email'
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password'
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/signUp" className="label-text-alt link link-hover">Do not have account? <span className='text-blue-700 font-semibold'>Signup Now</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-lg" type="submit" value={'Login'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;