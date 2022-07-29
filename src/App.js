import logo from './logo.svg';
import './App.css';
import {TaskListComponents} from './components/containers/task_list.jsx';
// import Archivoa from './componentes practicas/archivoa.JSX';
//import Greeting from './pure/greeting';
//import GreetingF from './pure/greetingF';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Greeting  name={"Juan"}/> desde un componente de clase */}
          {/* <GreetingF name = {"Juan"} /> */}          
          <TaskListComponents/>
          {/* <Archivoa/> */}
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
