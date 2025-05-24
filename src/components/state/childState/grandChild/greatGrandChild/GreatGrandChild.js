import { useNameHook } from "../../../../../context/context";

// const GreatGrandChild = ({baigan}) => {
//     return <h6>{baigan} - GREAT GRAND CHILD</h6>
// }

const GreatGrandChild = () => {
    const {name} = useNameHook();
    
    return <h6>{name} - GREAT GRAND CHILD - Without prop drilling</h6>
}

export default GreatGrandChild;