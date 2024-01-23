import React, {useCallback, useEffect, useState} from 'react'

function Delete() {
    const [name, setName] = useState()
    const DeleteProduct = useCallback(async() => {
        const reqOptions = {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },


          }
        try{
            await fetch(`http://localhost:8080/products/${name}`, reqOptions)

        }
        catch(ERR){
            console.log(ERR)
        }})
    return(
        <div>
        <label for="purge">Purge me from existence</label>
          <input
            type="name"
            id="login"
            name="name"
            placeholder="Your victim"
            value={name}
            onChange={e => setName(e.target.value)}
          />
           <input type="submit" value="Purge" onClick={DeleteProduct}
           />
          </div>
    )
}

export default Delete;
