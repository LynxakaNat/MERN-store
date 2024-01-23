import {Link, useNavigate} from 'react-router-dom'
import React, {useCallback, useEffect, useState} from 'react'
function SignScreen() {
  const [signup, setSign] = useState(false)
  const replace = useNavigate();
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [warning, setWarning] = useState('');
  const CreateAUser = useCallback(async() => {

    const reqOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "login" : `${login}`,
        "password":`${password}`,
        "admin" : false

    })
    }
    try{

      const response = await fetch(`http://localhost:8080/users`, reqOptions)
      if (response.status === 400) {
        setWarning('Login is already in use');
      }
      if (response.status === 201) {
        setSign(true)
        console.log(signup)
      }
      }

catch(error){
      console.error(error);
    };
  }, [login,password,replace])
  console.log(signup)
  if (signup === true){
    window.location.href=`http://localhost:3000/login`

  }

    return (
      <div>

        <h2 className="Sign Up">Signup!</h2>
        {warning && <p style={{ color: 'red' }}>{warning}</p>}
        <label for="login">Login</label>
          <input
            type="login"
            id="login"
            name="login"
            placeholder="Your login.."
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="lname"
            name="password"
            placeholder="Your Password.."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign up" onClick={CreateAUser}
           />
        </div>

    );
  }
export default SignScreen
