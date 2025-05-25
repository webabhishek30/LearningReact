import { useState } from "react";
import Malviya from "./malviya/Malviya";

function Abhay() {

    const [surname, setSurname] = useState("Malviya - 3 - From State");

    function handleSurname(){
        return setSurname("Malviya");
    }

    return(
        <>
            {/* <h1>Abhay</h1>
            <Malviya surname="Malviya - 3" />
            */}

            <h1>Abhay</h1>
            <Malviya surname={surname} />
            <button onClick={handleSurname}>Change Name</button>
        </>
    )
}

export default Abhay;