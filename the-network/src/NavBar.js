import { Link } from 'react-router-dom';


export default function NavBar(){
    return(
  <>
  <ul>
  <li>Home</li>

  <Link to = "/Login">
    <h4>Login</h4>
  </Link>

  <Link to = "/News">
    <h4>News</h4>
  </Link>
    
  <li></li>
  <li>Profiles</li>
  </ul>
  </>
    )
}