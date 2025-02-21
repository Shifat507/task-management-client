import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../../assets/animation/login-animation.json'
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const { createUser } = useContext(AuthContext);
    const onSubmit = data => {
        console.log(data);
        const email = data.email
        const password = data.password
        createUser(email, password)
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
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-4xl font-bold mx-auto">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">Name</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: true })}
                                name='name'
                                placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                name='email'
                                placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
                                })}
                                name='password'
                                placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-sm text-red-600'>This field is required</span>}
                            {errors.password?.type === 'pattern' && <span className='text-sm text-red-600'>Password should have at least one uppercase, one lowercase and one special character</span>}
                            {errors.password?.type === 'minLength' && <span className='text-sm text-red-600'>Password must be at least 6 character</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-sm text-red-600'>Password must be less than 20 character</span>}
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account? <span className='text-blue-700 font-semibold'>Login Now</span></Link>
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

export default SignUp;