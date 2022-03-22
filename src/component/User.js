import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Users = ({user}) => {
   
    return (
        <div>
            <Card style={{ width: '18rem', minHeight:"470px", margin:"5px"  }}>
  <Card.Img variant="top" src="https://natarajanlab.mgh.harvard.edu/wp-content/uploads/2021/04/Headspace-Icon.png" />
  <Card.Body>
    <Card.Title>{user.name+" "+ user.username}</Card.Title>
    <Card.Text>
      {user.email}
    </Card.Text>
    
    <Button variant="primary">
    <Link to={`/users/${user.id}`}style={{textDecoration:"none", color:"rgba(255,255,255,.55)"}} >
      User Details   
    </Link>
    </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Users