import { useNameHook } from "../../../context/context";
import GrandChild from "./grandChild/GrandChild";

// const ChildState = ({aam}) => {
//     return <>
//         <h3>{aam} - Child</h3>
//         {/* GRAND CHILD */}
//         <GrandChild imly={aam} />
//     </>
// }

const ChildState = () => {
    const {address} = useNameHook();
    return <>
        <h3>Without props - Child</h3>
        {address != "" ? address : "Not Found"}
        {/* GRAND CHILD */}
        <GrandChild/>
    </>
}

export default ChildState;