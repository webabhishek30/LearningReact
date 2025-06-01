import { useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

const ReactMemo = () => {
    // NAME STATE
    const [name, setName] = useState("Abhay");
    
    console.log("React Memo - Rendered.")

    return<>
        <h1>React Memo</h1>
        <ReactMemoChild name={name} />
        <button onClick={() => setName("Malviya")}>Change Name</button>
    </>;
}
export default ReactMemo;