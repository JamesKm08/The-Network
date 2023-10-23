import './App.css';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Home from './Home';

function App() {

  //Set user to false
  const currentUser = true;

  //Redirecting unautheniticated users to login page
  const protectedRouter = () => {
    if (!currentUser){
      return <Navigate to = "/Login"/>
    }
    return <Layout />;
  }

  // Create the Layout for the Homepage
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
  
    
{/* Use Routes for navigation in the webapp */}
  <Routes>
      <Route path="/" element={protectedRouter()}>
        <Route index element={<Home />} />
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
