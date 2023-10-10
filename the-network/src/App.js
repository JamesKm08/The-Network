import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import News from './News';

function App() {
  return (<>
  <div className="App">
    <NavBar/>
    <Routes>

    <Route path="/Login" element={<Login/>}/>
    <Route path="/News" element={<News/>}/>

    </Routes>
    </div>
    </>
  );
}

export default App;
