import {Link, useNavigate} from 'react-router-dom'
import './ListItem.css'
import { GetOrder, SetModified} from '../../localstorage';
import React, {useCallback, useEffect, useState} from 'react'

function ListItem({name, price}) {
    const AddToCart  = useCallback(async() => {

        const order_id = GetOrder();
        const response = await fetch(`http://localhost:8080/orders/${order_id}`)
        const flesh_response = await response.json()
        console.log(flesh_response.products_id  )
        const products = flesh_response.products_id
        products.push(name)
        console.log("macerated the array")
        const reqOptions = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "products_id": products

          })
    }
    try{
        console.log("fetching")
        SetModified(true)
        await fetch(`http://localhost:8080/orders/${order_id}`, reqOptions)

    }
    catch(err){
        console.error(err)
    }})

    return (
        <div className='card'>
        <div className='card-content'>
        <div className = "CartItem">
            <p><Link to={`/product/${name}`}> {name} </Link></p>
            <p> {price}</p>
            <button onClick={AddToCart}> Add me to cart</button>
            </div>
        </div>
        </div>
     );
}
export default ListItem
