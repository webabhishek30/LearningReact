import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="App">
        {/* COMPONENT REUSABILITY */}
        <Home name="Devaki Nandan" designation="Lead" />
        <Home name="Shiv" designation="Developer" />
        <Home name="Abhay" designation="Developer" />
        <Home name="Abhishek"/>
      </div>
      {/* <Footer /> */}
    </>
  );
}


export default App;
