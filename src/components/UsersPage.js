import React, { useEffect, useState } from 'react'

const UsersPage = () => {
    const [val, setVal] = useState("");
    useEffect(() => {
        if (localStorage.getItem("s")) {
            let s = localStorage.getItem("s");
            s = JSON.parse(s);
            setVal(s);
            console.log(s);
        }
        else{
            console.log("no value found");
        }
    }, []);
    return (
        <>
            <h1 className='text-center mt-5'>Food Availability</h1>
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="col-sm"><div className="card" style={{ width: "16rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{val.n}</h5>
                            <p className="card-text">{val.m}</p>
                            <p className="card-text">{val.l}</p>
                            <p>i am in kurnool and i want to donate food</p>
                            <button className='btn btn-sm btn-dark'>Accept</button>&nbsp;
                            <button className='btn btn-sm btn-dark'>Decline</button>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top" src="..." alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-sm btn-dark'>Accept</button>&nbsp;
                                <button className='btn btn-sm btn-dark'>Decline</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "16rem" }}>
                            <img className="card-img-top" src="..." alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-sm btn-dark'>Accept</button>&nbsp;
                                <button className='btn btn-sm btn-dark'>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersPage;
