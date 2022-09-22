import logo from './logo.svg';
import './App.css';
// import Clock from './components/pure/Clock';
// import Father from './components/containers/Father';
// import Cuadrado from './components/containers/Cuadrado';
//import ContactList from './components/containers/contact_list.jsx'
//import GreetingStyle from './components/pure/GreetingStyle';
//import TaskListComponents from './components/containers/task_list.jsx'; 
//import Greeting from './pure/greeting';
//import GreetingF from './pure/greetingF';
import Fetchexample from '../src/components/pure/Fetchexample'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Greeting  name={"Juan"}/> desde un componente de clase */}
          {/* <GreetingF name = {"Juan"} /> */}          
          {/* <TaskListComponents/> */}          
          {/* <ContactList/>          */}
          {/* <GreetingStyle name = 'Juanito'></GreetingStyle> */}
          {/* <Clock></Clock> */}
          {/* <Father></Father> */}
          {/* <Cuadrado></Cuadrado> */}
          <Fetchexample></Fetchexample>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
