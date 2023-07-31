import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"300px"}}>
        <Link className='btn btn-sm btn-dark' to='/Login'>I'm user</Link>&nbsp;
        <Link className='btn btn-sm btn-dark' to='/ProviderDashboard'>I'm provider</Link>
      </div>
    </>
  )
}

export default HomePage;
