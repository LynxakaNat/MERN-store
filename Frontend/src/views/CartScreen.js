import CartItem from "./components/CartItem";
import {GetAdmin,GetOrder, GetModified, SetModified, SetAdmin} from '../localstorage'
import React, {useCallback, useEffect, useState} from 'react'
function CartScreen() {
  const[order,setOrder] = useState();
  const[user,setUser] = useState();
  const[prod_list, setprod] = useState();
  const FetchOrder = useCallback(async() => {
    try{

        const order_id = GetOrder()
        const response = await fetch(`http://localhost:8080/orders/${order_id}`)
        const flesh_response = await response.json()
        setOrder(flesh_response)

        setUser(flesh_response.client_id)
        setprod(flesh_response.products_id)

    }
    catch(err){
      console.log(err)
    }},[])
    useEffect(() => {
      if (user !== "admin"){
      SetAdmin(false)
      FetchOrder();} // Initial fetch when the component mounts
    }, [FetchOrder]);
    useEffect(() => {
      if (GetModified() === true){
        FetchOrder()
        SetModified(false)
      }
    }, [order]);

    return (

      <div>

        <h2 className="homescreen_title">This is {user}'s cart</h2>
        {prod_list?.map(product => (
        <CartItem
          name= {product}/>)
          )
          }


      </div>
    );}

export default CartScreen
