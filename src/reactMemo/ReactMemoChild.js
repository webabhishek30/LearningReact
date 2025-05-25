import { useState } from "react";
import ReactMemoGrandChild from "./ReactMemoGrandChild";

const ReactMemoChild = ({name}) => {
    // COUNT STATE
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);



    console.log("React Memo Child - Rendered.")

    return<>
        <h2>React Memo Child - {name}</h2>
        <ReactMemoGrandChild count={count} count2={count2} count1={count1} />
        <button onClick={() => setCount(count + 1)}>Count Increment</button>
    </>;
}
export default ReactMemoChild;