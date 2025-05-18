import About from "./About/About";
import "./home.css";

// ARROW FUNCTION
const Home = ({name, designation}) => {  
  // props
  return (
    <>
      <h1>Hello</h1>
      <div>{name}</div>
      <div>{designation != null ? designation : <About />}</div>
    </>
  );
};


export default Home;

