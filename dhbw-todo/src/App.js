import './App.css';
import Home from './components/Home';
import List from './components/List';
import Task from './components/Task';


// alle Compnents werden gerendert
function App() {
  return (
    [<Task/>,
    <Home/>,
    <List/>]
    
    
  );
}

export default App;
