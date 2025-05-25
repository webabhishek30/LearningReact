import Abhay from './abhay/Abhay';
import './App.css';
import Home from './components/Home/Home';
import State from './components/state/State';
import ReactMemo from './reactMemo/ReactMemo';

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
        {/* <State /> */}

        {/* EXPORT ABHAY COMPONENT */}
        {/* <Abhay /> */}

        {/* REACT MEMO */}
        <ReactMemo />
      </div>
      {/* <Footer /> */}
    </>
  );
}


export default App;
