import React, {useCallback, useEffect, useState} from 'react'

function Crodify() {
    const [name, setName] = useState()
    const[author, setAuthor] = useState()
    const[genre, setGenre]  = useState()
    const[description, setDes] = useState()
    const[price, setPrice] = useState()
    const[stock, setStock] = useState()
    const CrodifyProduct = useCallback(async() => {
        try{
            console.log("B4 FETCH")
            const response = await fetch(`http://localhost:8080/products/${name}`)
            if (response.status === 404){

              const reqOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name" : `${name}`,
                    "author" : `${author}`,
                    "genre" : `${genre}`,
                    "description" : `${description}`,
                    "price" : Number(price),
                    "stock" : Number(stock)

                })
              }
              try{
                await fetch(`http://localhost:8080/products/`, reqOptions)
         }
         catch(err){
            console.log(err)
         }

        }
        else{
            console.log("patch")
            const reqOptions = {
              method: "PATCH",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  "name" : `${name}`,
                  "author" : `${author}`,
                  "genre" : `${genre}`,
                  "description" : `${description}`,
                  "price" : Number(price),
                  "stock" : Number(stock)
              })}
              try{
                await fetch(`http://localhost:8080/products/${name}`, reqOptions)
         }
         catch(err){
            console.log(err)
         }
    }}
              catch(ERR){
                console.log(ERR)
            }},[name, author, genre, description, price, stock]
    )


    return(
        <div>
        <label for="purge">Modify/Create a product</label>
          <input

            name="name"
            placeholder="Product Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input

            name="author"
            placeholder="Author Name"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <input

            name="genre"
            placeholder="Genre Name"
            value={genre}
            onChange={e => setGenre(e.target.value)}
          />
          <input

            name="desc"
            placeholder="Description"
            value={description}
            onChange={e => setDes(e.target.value)}
          />
          <input
            type="name"
            id="login"
            name="price"
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <input

            name="stock"
            placeholder="Stock"
            value={stock}
            onChange={e => setStock(e.target.value)}
          />
           <input type="submit" value="Submit" onClick={CrodifyProduct}
           />
          </div>
    )
}


export default Crodify;
