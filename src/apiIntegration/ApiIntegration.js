import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiIntegration() {

    const [data, setData] = useState([]);

    const [name, setName] = useState("Shiv");

    const [email, setEmail] = useState("Shiv@email.com");

    const [password, setPassword] = useState("12345");

    const fetchAPI = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response.data)
            setData(response.data)
        }).catch((e) => {
            console.log("Error", e)
        })
    }

    useEffect(() => {
        fetchAPI();
    },[name, email])


    return (
        <>
            <h1>Api Integration</h1>

            <h2>{name}</h2> 
            <h3>{email}</h3>
            <h4>{password}</h4> 

            <button onClick={() => {setName("Mohan")}}>change Name</button>
            <button onClick={() => {setEmail("Mohan@email.com")}}>change Email</button>
            <button onClick={() => {setPassword("Mohan")}}>change Password</button>

            <ul>
                {data.map((user) => {
                    return <li key={user.id}>{user.title}</li>
                } )}
            </ul>
        </>
    )
}

export default ApiIntegration