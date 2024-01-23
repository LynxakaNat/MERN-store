import { useState, useCallback, useEffect} from "react"
import UserProfile from "./components/UserProfile.js"
function Users() {
    const[userArr, setUsers] = useState()
    const FetchAllUsers = useCallback(async() => {

        try{
            const response = await fetch(`http://localhost:8080/users`)
            const flesh_response = await response.json()
            setUsers(flesh_response.map(item=> item.login))

        }
        catch(err){
            console.log(err)
        }
    },[])
    useEffect(() => {
        FetchAllUsers(); // Initial fetch when the component mounts
      }, [FetchAllUsers]);
    return(
        <div className ="cont">
        {userArr?.map(user => (
        <UserProfile
          login= {user}
          className="listItem"/>)
          )
          }
          </div>
          )}

export default Users
