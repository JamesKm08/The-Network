import { Link } from "react-router-dom"
import "./Login.scss"

export default function Register(){
    return(
        <>
        <div id = "register">
            <div className="card">
                <div className="left">
                    <h1>Hello Friend!</h1>
                    <p>ks;ib;beiveriverbvieb
                        vlevjcvewglegfweiew,dubiuh
                        ewhfoewhfowejfweflkwnfowhfewfwuf,cbwibw
                        ebweibwecbwe;icwec.
                    </p>
                    <span>Do have an account?</span>
                    <Link to = "/Login">
                   <button>Login</button>
                   </Link>
                </div>

            <div className="right">
                <h1>Register</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Username'   
                    />
                    <input
                        type='email'
                        placeholder='Email'   
                    />
                    <input
                        type='password'
                        placeholder='Password'
                    />
                    <input
                        type='text'
                        placeholder='Name'   
                    />
                <button type='submit'>Register</button>
            </form>
        </div>
        </div>     
        </div>
        </>
    )
};
