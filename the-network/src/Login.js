

export default function Login(){
    return(
        <>
        <div id = "login-container">
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
        </>
    )
}