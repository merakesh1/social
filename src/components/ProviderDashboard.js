import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import backgroundImg from './social.jpeg';
var localhost = "http://localhost:7000";

const ProviderDashboard = () => {
    const [a, setA] = useState({ v: "hidden" });
    const handleClick = async (event) => {
        event.preventDefault();
        let n = document.getElementById("PName").value;
        let m = document.getElementById("PNumber").value;
        let l = document.getElementById("PLocation").value;
        let note = document.getElementById("PNote").value;
        if (note.length !== 0) {
            if (note.length > 35) {
                note = String(note).substring(0, 35) + "......";
            }
        }
        let data = {
            name: n,
            mobile_number: m,
            location: l,
            note: note.length !== 0 ? note : "Compassion Changes Lives."
        }
        const res = await fetch(`${localhost}/myapp/PostData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        var result = await res.json();
        if (result.success) {
            setA({ message: result.message, color: "green", v: "visible" })
            document.getElementById("PName").value="";
            document.getElementById("PNumber").value="";
            document.getElementById("PLocation").value="";
            document.getElementById("PNote").value="";
        }
        else {
            setA({ message: result.message, color: "red", v: "visible" })
        }
    }
    return (
        <>
            <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
                <div style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(10px)', 
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: -1, 
                }}>
                </div>
                <div>
                    <div style={{ minHeight: "150px" }}>
                        {a.v === 'visible' ? <Alert val={a} setVal={setA} /> : <span></span>}
                    </div>
                    <div className='w-25 p-5 m-auto border-top' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)',borderRadius:"10px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
                    <h1 className='text-center' style={{fontFamily: "'Montserrat', sans-serif"}}>Fill this form</h1>
                    <hr  style={{color:"black"}}/>
                        <form style={{fontFamily:"'Cagliostro', sans-serif",fontWeight:"590",fontSize:"16   px"}}>
                            <div className="form-group">
                                <label htmlFor="PName">Name<small className='text-danger'> *</small></label>
                                <input type="text" className="form-control" id="PName" />
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
                                </span>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="PNote">Note<em style={{ fontSize: "14px", color: "#646464" }}>&nbsp;(Optional)</em></label>
                                <span>
                                    <input type="text" className="form-control" id="PNote" />
                                </span>
                            </div>
                            <br />
                            <div>
                                <button type="submit" onClick={handleClick} className="btn btn-sm btn-dark">Donate</button>&nbsp;
                                <Link className="btn btn-sm btn-dark" to='/'>Home</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProviderDashboard
