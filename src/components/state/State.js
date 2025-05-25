import { useState } from "react";
import ChildState from "./childState/ChildState";
import { useNameHook } from "../../context/context";


const State = () => {

    // PROBLEM STATEMENT
    // var name = "Devki";

    // function updateName() {
    //     name = "Abhay";
    //     console.log("Hello" + name)
    // }

    // SOLUTION FOR THE ABOVE PROBLEM
    // const [name, setName] = useState("Devki");

    // SOLUTION 1
    // const updateName = () => {
    //     setName("Abhay");
    // }

    // STEP 5 : CONTEXT API VALUE FETCHED
    const {name, setName} = useNameHook();

    return <>
        
        <h2>{name} - Parent</h2>
        {/* <button onClick={updateName}>Change name</button> */}

        {/* CHILD STATE */}
        {/* <ChildState aam={name} /> */}
        {/* <button onClick={() => setName("Abhay")}>Change name</button> */}

        {/* WITH CONTEXT API */}
        <ChildState />
        <button onClick={() => setName("Abhay")}>Change name</button>
    </>
}

export default State;