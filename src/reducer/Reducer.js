import React, { useReducer } from 'react'
import { EmployeeInitialValue, employeeReducer } from './EmployeeReducer';

const Reducer = () => {

    // STEP 3
    const [state, dispatch] = useReducer(employeeReducer, EmployeeInitialValue);

    return (
        <>
            <h1>{state.name}</h1>
            {state.visible ? <h2>{state.age}</h2> : "Not found"}
            <h3>{state.education}</h3>

            <button onClick={() => {dispatch({type:"CHANGE_NAME", updateValue:"Nandan"})}}>Change Name</button>
            <button onClick={() => {dispatch({type:"CHANGE_AGE", updateValue: 40})}}>Change Age</button>
            <button onClick={() => {dispatch({type:"CHANGE_EDUCATION", updateValue: "PHD"})}}>Change Education</button>
        </>
    )
}

export default Reducer;