import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <>
        <h1 className='text-center mt-5'>Sign Up</h1>
            <div className='w-25 m-auto p-5 border-top'>
                <form>
                    <div className="form-group">
                        <label for="Uname">UserId<small className='text-danger'> *</small></label>
                        <input type="text" className="form-control" id="Uname1"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="Upassword">Password<small className='text-danger'> *</small></label>
                        <input type="password" className="form-control" id="Upassword1" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="Cupassword">Confirm Password<small className='text-danger'> *</small></label>
                        <input type="password" className="form-control" id="Cupassword2" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="sorganization">Organization<small className='text-danger'> *</small></label>
                        <input type="text" className="form-control" id="sorganization"/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-sm btn-dark">Sign Up</button>&nbsp;
                    <div className='my-4 text-center'>
                        <span>Already a user?</span>&nbsp;
                        <Link className='text-decoration-none' to="/Login">Sign In</Link>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Signup
