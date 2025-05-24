import GreatGrandChild from "./greatGrandChild/GreatGrandChild";

// const GrandChild = ({imly}) => {
//     return <>
//         <h4>{imly} - Grand Child</h4>
//         <GreatGrandChild baigan={imly} />
//     </>
// }

const GrandChild = () => {
    return <>
        <h4>Without Props - Grand Child</h4>
        <GreatGrandChild/>
    </>
}
export default GrandChild;