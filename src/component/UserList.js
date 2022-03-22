import { Spinner } from 'react-bootstrap'
import React from 'react'
import User from "./User"

const UserList = ({users , loading}) => {

    return (
        <div style={{display:"flex", flexWrap:"wrap"}} >
            {
                loading? (
                    <>
                    <Spinner animation="grow" variant="info" />
                    <h3> loading users ... </h3>
                    </>
                ) :(
                    users.map((el)=> <User user={el} key={el.id} /> )
                )
            }
        </div>
    )
    }

    export default UserList
