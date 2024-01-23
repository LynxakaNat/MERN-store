import {Link, useNavigate} from 'react-router-dom'
import React, {useCallback, useEffect, useState} from 'react'
import {SetUser, SetOrder, SetAdmin, GetAdmin} from '../localstorage'
function LoginScreen() {
    const replace = useNavigate();
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const FetchUser = useCallback(async() => {
        try{

            const response = await fetch(`http://localhost:8080/users/${login}`)
            if (response.status === 200) {
            const userData = await response.json()
            if (userData.password == password){
                SetUser(userData)
                console.log(userData.admin)

                if (userData.admin === true){
                  SetAdmin(true)
                  console.log(GetAdmin())
                }
                else if (userData.admin === false) {
                SetAdmin(false)
                console.log(GetAdmin())
                const response2 = await fetch(`http://localhost:8080/orders/unplaced/${login}`)
                const respose2flesh = await response2.json()
                if (JSON.stringify(respose2flesh).length !==2){
                  SetOrder(respose2flesh[0]._id)}
                else if (JSON.stringify(respose2flesh).length ===2){
                  console.log('404 order not found')
                  const reqOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      "client_id" : `${login}`,
                      "products_id":[],
                      "prod_amount" : 0,
                      "total_price" : 0,
                      "placed" : 0

                  })}
                  try{

                    const response3 = await fetch(`http://localhost:8080/orders`, reqOptions)
                    const order_ = await response3.json()
                    if (response3.status === 201) {
                      console.log(order_._id)
                      SetOrder(order_._id)
                    }
                    }
                    catch(err){
                      console.error(err);
                  }
                }}

                // check if the unplaced order exists
                // yes -> set as curr order
                // no -> create a new order under the USERNAME
            }
            else{
                console.log('Incorrect Credentials')
            }
            }}

    catch(error){
            console.error(error);
          };
        }, [login,password,replace])
    return (
      <div>

        <h2 className="SignIN">Login</h2>
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
         <Link to="/signup" className="link">
            <p>Create a new account?</p>
          </Link>
          <input type="submit" value="Sign in" onClick={FetchUser}
           />
           </div>

    );
  }
export default LoginScreen
