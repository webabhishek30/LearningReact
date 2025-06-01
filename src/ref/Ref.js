import React, { useRef } from 'react'

const Ref = () => {
        
    // USEREF
    const changeName = useRef();

    const handleChangeName = () => {
        changeName.current.innerText = "Mohan"
    }

    return (
        <>
            <h1 ref={changeName}>Shiv</h1>
            <button onClick={handleChangeName}>Change Name</button>
        </>
    )
}

export default Ref;
