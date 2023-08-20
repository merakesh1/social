import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './girl-2529907_1280.jpg';
import Alert from './Alert';
var localhost = "http://localhost:7000";

const UsersPage = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [error1, setError] = useState(null);
    const [a, setA] = useState({ v: "hidden" });
    const navigate = useNavigate();
    useEffect(() => {
        //api call
        async function fetchData() {
            try {
                const response = await fetch(`${localhost}/myapp/getData`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const fetched_data = await response.json();
                setFetchedData(fetched_data.documents);
                let message = fetched_data.message;
                setA({ message, color: "green", v: "visible" });

            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, [])
    if (error1) {
        return <p>Error: {error1.message}</p>
    }

    const removeItem = async (id) => {
        let result = await fetch(`${localhost}/myapp/deleteData/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        let res = await result.json();
        if (res.success === true) {
            setA({ message: res.message, color: "green", v: "visible" })
        }
        else {
            setA({ message: res.message, color: "red", v: "visible" })
        }
        window.location.reload();
    }
    return (
        <>
            <div className='container-fluid' style={{ background: "#22375e", padding: "10px", color: "white", display: "flex", justifyContent: "space-between" }}>
                <span>
                    <span style={{ marginLeft: "10px", marginRight: "2vw", fontFamily: "'Kranky', cursive", fontSize: "18px" }}>Timeless Care</span>
                    <span style={{ fontWeight: "300", fontSize: "20px" }}>|</span>
                    <span style={{ marginLeft: "2vw", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>A society is judged by how it treats its elderly.</span>
                </span>
                <span>
                    <i onClick={() => navigate('/', { replace: true })} className="fa-solid fa-arrow-left" style={{ color: "#ffffff", marginRight: "20px", cursor: "pointer" }} title='go back'></i>
                </span>
            </div>
            <div className='grid-container'>
                <div className="grid-item1">
                    <div style={{ minHeight: "70px" }}>
                        {a.v === "visible" ? <Alert val={a} setVal={setA} /> : <span style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>ようこそみなさん</span>}
                    </div>
                    <div>
                        <h3 style={{ color: "#22375e", fontFamily: "'Tilt Warp', cursive" }}>We&nbsp; need&nbsp; your&nbsp;  Love!</h3>
                        <div style={{ width: "1100px", textAlign: "justify", marginTop: "20px", fontFamily: "'Montserrat', sans-serif", color: "#22375e" }}>
                            It is a compassionate non-profitable online platform that connects generous individuals and businesses with orphanages in need of food supplies. Our mission is to ensure that no orphanage goes without nutritious meals, and every child has the opportunity to grow up with proper nourishment.
                        </div>
                        <div style={{ width: "800px", textAlign: "justify", marginTop: "30px", fontFamily: "'Montserrat', sans-serif", color: "#22375e", marginLeft: "13vw" }}>"It's not how much we give, but how much love we put into giving." - Mother Teresa</div>
                        <div style={{ textAlign: "justify", marginTop: "30px", fontFamily: "'Montserrat', sans-serif", color: "#22375e", marginLeft: "29vw", fontWeight: "bolder" }}>
                            Your Offerings&nbsp; <i className="fa-solid fa-bowl-food"></i>
                            <div style={{ textDecoration: "underline", marginTop: "0px", marginLeft: "8px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        </div>

                        <div className='grid-container1' style={{ marginTop: "40px" }}>
                            {
                                fetchedData.length !== 0 ? fetchedData.map((item) => (
                                    <div key={item._id} className='items'>
                                        <div className="card gridItem3" style={{ width: "12rem", minHeight: "17rem", maxHeight: "17rem", fontSize: "14px" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text"><i className="fa-solid fa-phone" style={{ marginTop: "10px" }}></i>&nbsp;&nbsp;{item.mobile_number}</p>
                                                <p className="card-text" style={{ minHeight: "30px" }}><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{item.location}</p>
                                                <p className="card-text"><i className="fa-regular fa-note-sticky"></i>&nbsp;&nbsp;{item.note}</p>
                                            </div>
                                            <div style={{ marginLeft: "15px" }}>
                                                <button className="btn btn-outline-dark btn-sm" onClick={() => removeItem(item._id)}>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                )) : <p style={{ marginLeft: "470px", width: "200px", textAlign: "center", fontFamily: "'Montserrat', sans-serif", color: "#22375e" }}>No&nbsp; offerings&nbsp; found!🥺</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="grid-item2">
                    <img src={backgroundImg} alt="Background" />
                </div>

            </div>
        </>
    )
}

export default UsersPage;
