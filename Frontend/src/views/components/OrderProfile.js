function OrderProfile({id, placed}){
    return(
        <div className='card'>
        <div className='card-content'>
        <div>
            <p> id: {id} </p>
            <p> placed: {placed} </p>
            </div>
        </div>
        </div>
    )
}
export default OrderProfile
