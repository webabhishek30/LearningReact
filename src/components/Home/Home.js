import { useNameHook } from "../../context/context";
import About from "./About/About";
import "./home.css";

// ARROW FUNCTION
const Home = () => {  
  const {name, address} = useNameHook();
  // props
  return (
    <>
      <h1>Hello</h1>
      <div>{name}</div>
      {/* <div>{designation != null ? designation : <About />}</div> */}
      Address:- {address != "" ? address : "Not found"}
    </>
  );
};


export default Home;

