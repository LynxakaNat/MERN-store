import { useState, useCallback, useEffect} from "react"
import ListItem from "./components/ListItem"
import './ViewScreen.css'
function ViewScreen() {
    const[prodArr, setprod] = useState()
    const[cost, setcost] = useState()
    const FetchAllProducts = useCallback(async() => {

        try{
            const response = await fetch(`http://localhost:8080/products`)
            const flesh_response = await response.json()
            setprod(flesh_response.map(item=> item.name))
            setcost(flesh_response.map(item=> item.price))
        }
        catch(err){
            console.log(err)
        }
    },[])
    useEffect(() => {
        FetchAllProducts(); // Initial fetch when the component mounts
      }, [FetchAllProducts]);
      // TODO: update the logic when admin things have been implemented
    return(
        <div className ="cont">
        {prodArr?.map(product => (
        <ListItem
          name= {product}
          className="listItem"/>)
          )
          }
          </div>
          )}


export default ViewScreen
