import { Link, useParams } from 'react-router-dom';
import './ProductScreen.css'
import { useState,useEffect , useCallback} from 'react';
import { GetOrder,SetModified} from '../localstorage';
function ProductScreen() {
    const { id, setID } = useParams();
    const [prod, setProd] = useState(null);
    console.log(id)
    useEffect(()=>{
      const fetchProd = async () =>{

        try{
          console.log("id is" + id)
          const response = await fetch(`http://localhost:8080/products/${id}`)
          if (response.status === 200) {
            const productData = await response.json()
            console.log(productData)
            setProd(productData)
        }
        else{
          throw new Error('Sth wrong')
        }
      } catch(error){
        console.error(error);
      };
    }
      fetchProd();}, [id]);
      console.log(prod)
      const AddToCart  = useCallback(async() => {
        console.log(id)
        const order_id = GetOrder();
        const response = await fetch(`http://localhost:8080/orders/${order_id}`)
        const flesh_response = await response.json()
        console.log(flesh_response.products_id  )
        const products = flesh_response.products_id
        products.push(id)
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
      <div>
        <h2 className="product_tit">{id }</h2>
        {prod? (<ul className='props'>
          <li>Author: {prod && prod.author}</li>
          <li>Genre: {prod && prod.genre}</li>
          <li>Description: {prod && prod.description}</li>
          <li>Price: {prod && prod.price}</li>
          <li>Stock:{prod && prod.stock}</li>
        </ul>):(<p>Product not found</p>)}
        <button onClick={AddToCart}> Add to your cart</button>
        </div>


    );
  }
export default ProductScreen
