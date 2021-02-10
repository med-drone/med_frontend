


import React from 'react'


function Login() {
    return (
        <div className='login'>
       

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text'
                //  value={email} onChange={e => setEmail(e.target.value)} 
                 />

                <h5>Password</h5>
                <input type='password' 
                // value={password} onChange={e => setPassword(e.target.value)} 
                />

                
            </form>
<div>
            <button type='submit' >
                {/* onClick={signIn} className='login__signInButton'> */}
                    Sign In
                    </button>
                    </div>

            <button >
            {/* // onClick={register} className='login__registerButton'> */}
            Sign-Up
                </button>
        </div>
    </div>
    )
}

export default Login
