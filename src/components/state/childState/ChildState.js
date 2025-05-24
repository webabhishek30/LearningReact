import GrandChild from "./grandChild/GrandChild";

// const ChildState = ({aam}) => {
//     return <>
//         <h3>{aam} - Child</h3>
//         {/* GRAND CHILD */}
//         <GrandChild imly={aam} />
//     </>
// }

const ChildState = () => {
    return <>
        <h3>Without props - Child</h3>
        {/* GRAND CHILD */}
        <GrandChild/>
    </>
}

export default ChildState;