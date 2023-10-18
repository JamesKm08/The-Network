import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Home from './Home';

function App() {

  const Layout = () =>{
    return(<>
      <div>
        <NavBar/>
        <div style ={{display: 'flex'}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
      </div>
      </>)
  }
  return (<>
  <div className="App">
    

  <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
  </Routes>
    </div>
    </>
  );
}

export default App;
