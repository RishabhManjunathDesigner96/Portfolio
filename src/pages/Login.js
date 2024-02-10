import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
const contries = [
    {
        name: 'India',
        value: 'IN',
        cities: ['Delhi', 'Mumbai']
    },
    {
        name: 'Pak',
        value: 'PK',
        cities: ['PAK_IND', 'PAK_Mumbai']
    },
    {
        name: 'Bangladesh',
        value: 'bg',
        cities: ['Bangladesh_Delhi', 'Bangladesh_Mumbai']
    },
];
function Login() {

    return (
        <Layout>
            <div className="row justify-content-md-center mt-5">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Sign In</h5>
                            <select onChange={(e)=>{
                                console.log(e.target.value);
                            }}>
                                {
                                    contries.map((item, index) => {
                                        return (<option value={item.value}>{item.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;