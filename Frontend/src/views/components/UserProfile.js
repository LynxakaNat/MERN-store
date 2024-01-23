function UserProfile({login}){
    return(
        <div className='card'>
        <div className='card-content'>
        <div className = "CartItem">
            <p> {login} </p>
            </div>
        </div>
        </div>
    )
}
export default UserProfile
