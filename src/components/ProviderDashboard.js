import React from 'react';
import { Link } from 'react-router-dom';

const ProviderDashboard = () => {
  /* const handleClick=(event)=>{
    event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude; */
    /* var locationInput = document.getElementById("locationInput");
    locationInput.value = latitude + ", " + longitude; */
    /* console.log(longitude);
    console.log(latitude);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
} */
const handleClick=(event)=>{
    event.preventDefault();
    let n=document.getElementById("PName").value;
    let m=document.getElementById("PNumber").value;
    let l=document.getElementById("PLocation").value;
    let obj={
        n:n,m:m,l:l
    }
    let s=JSON.stringify(obj);
    localStorage.setItem("s",s);
}
    return (
    <>
      <h1 className='text-center mt-5'>Fill this form</h1>
            <div className='w-25 m-auto p-5 border-top'>
                <form>
                    <div className="form-group">
                        <label htmlFor="PName">Name<small className='text-danger'> *</small></label>
                        <input type="text" className="form-control" id="PName"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="PNumber">Mobile Number<small className='text-danger'> *</small></label>
                        <input type="number" className="form-control" id="PNumber" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="PLocation">Location<small className='text-danger'> *</small></label>
                        <span>
                            <input type="text" className="form-control" id="PLocation" />
                            {/* <button onClick={handleClick}>current location</button> */}
                        </span>
                    </div>
                    <br />
                    <div>
                        <button type="submit" onClick={handleClick} className="btn btn-sm btn-dark">Donate</button>&nbsp;
                        <Link className="btn btn-sm btn-dark" to='/'>Home</Link>
                    </div>
                </form>
            </div>
    </>
  )
}

export default ProviderDashboard
