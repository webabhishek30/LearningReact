import { useNameHook } from "../../../../../context/context";

// const GreatGrandChild = ({baigan}) => {
//     return <h6>{baigan} - GREAT GRAND CHILD</h6>
// }

const GreatGrandChild = () => {
    const {name, setAddress} = useNameHook();
    
    return <>
        <h6>{name} - GREAT GRAND CHILD - Without prop drilling</h6>
        <button onClick={() => setAddress("Noida")}>Set Address</button>
    </>
}

export default GreatGrandChild;