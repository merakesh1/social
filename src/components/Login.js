import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1 className='text-center mt-5'>Login</h1>
            <div className='w-25 m-auto p-5 border-top'>
                <form>
                    <div className="form-group">
                        <label for="Uname">UserId</label>
                        <input type="text" className="form-control" id="Uname"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="Upassword">Password</label>
                        <input type="password" className="form-control" id="Upassword" />
                    </div>
                    <br />
                    <span>
                        <button type="submit" className="btn btn-sm btn-dark">Sign in</button>&nbsp;
                        <a className="text-decoration-none" href='/'> forgot password?</a>
                    </span>
                    <br />
                    <div className='my-4 text-center'>
                        <span>not a user?</span>&nbsp;
                        <Link className='text-decoration-none' to="/SignUp">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
