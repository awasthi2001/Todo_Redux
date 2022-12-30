import './App.css';
import { Todo } from './Components/Todo';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
