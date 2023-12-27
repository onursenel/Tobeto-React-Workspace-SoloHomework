import './App.css';
import Dashboard from './layouts/Dashboard';
import "bootstrap/dist/css/bootstrap.css"
import Navi from './layouts/Navi';


function App() {
  return (
    <div className="App">
      <Navi />
      <div className='main'>
        <Dashboard />
      </div>

    </div>
  );
}

export default App;
