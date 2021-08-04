import React from 'react'

function UserCard(props) {

    
    return (

        <div className=' h-96 w-72  mt-10 ml-10 p-2 bg-gray-100 rounded-md max-w-md space-y-5'>
             <div className=" h-48 w-fill bg-green-300"><image></image></div>
            <div >Name : {props.name}</div>
            <div>UserName : {props.userName}</div>
            <div>zipCode : {props.zipCode}</div>


        </div>

    )
}

export default UserCard
