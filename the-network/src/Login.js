import { Link } from "react-router-dom"
import "./Login.scss"

export default function Login(){
    return(
        <>
        <div id = "login">
            <div className="card">
                <div className="left">
                    <h1>Hello Friend!</h1>
                    <p>ks;ib;beiveriverbvieb
                        vlevjcvewglegfweiew,dubiuh
                        ewhfoewhfowejfweflkwnfowhfewfwuf,cbwibw
                        ebweibwecbwe;icwec.
                    </p>
                    <span>Don't have an account?</span>
                    
                    <Link to = "/Register">
                   <button>Register</button>
                   </Link>

                </div>

            <div className="right">
                <h1>Login</h1>
                <form>
                    <input
                        type='email'
                        placeholder='Email'   
                    />
                    <input
                        type='password'
                        placeholder='Password'
                    />
                <button type='submit'>Login</button>
            </form>
        </div>
        </div>     
        </div>
        </>
    )
}