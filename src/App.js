import Abhay from './abhay/Abhay';
import ApiIntegration from './apiIntegration/ApiIntegration';
import './App.css';
import Home from './components/Home/Home';
import State from './components/state/State';
import Controlled from './controlled/Controlled';
import ReactMemo from './reactMemo/ReactMemo';
import Reducer from './reducer/Reducer';
import Ref from './ref/Ref';

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="App">
        {/* COMPONENT REUSABILITY */}
        {/* <Home name="Devaki Nandan" designation="Lead" />
        <Home name="Shiv" designation="Developer" />
        <Home name="Abhay" designation="Developer" />
        <Home name="Abhishek"/> */}

        {/* STATE MANAGEMENT */}
        {/* <State />
        <Home /> */}

        {/* EXPORT ABHAY COMPONENT */}
        {/* <Abhay /> */}

        {/* REACT MEMO */}
        {/* <ReactMemo /> */}

        {/* REACT USEREF */}
        {/* <Ref/> */}

        {/* REACT REDUCER */}
        {/* <Reducer /> */}

        {/* REACT CONTROLLED INPUT */}
        {/* <Controlled /> */}

        {/* REACT API INTEGRATION */}
        <ApiIntegration />
      </div>
      {/* <Footer /> */}
    </>
  );
}


export default App;
