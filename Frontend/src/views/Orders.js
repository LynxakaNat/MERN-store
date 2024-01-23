import { useState, useCallback, useEffect} from "react"
import OrderProfile from "./components/OrderProfile.js"
function Orders() {
    const[OrderIds, setOrders] = useState()
    const[placed, setplaced] = useState()

    const FetchAllOrders = useCallback(async() => {

        try{
            const response = await fetch(`http://localhost:8080/orders`)
            const flesh_response = await response.json()
            setOrders(flesh_response.map(item=> item._id))
            setplaced(flesh_response.map(item=> `${item.placed}`))
            // issues arise if it is a booalean thats why we convert
            // it to a string

        }
        catch(err){
            console.log(err)
        }
    }, [])

    useEffect(() => {
        FetchAllOrders(); // Initial fetch when the component mounts
    },[FetchAllOrders])
    return(
        <div className ="cont">
        {OrderIds?.map((order,index) => (
        <OrderProfile
          id= {order}
          placed={placed[index]}
          className="listItem"/>)
          )
          }
          </div>
          )}

export default Orders
