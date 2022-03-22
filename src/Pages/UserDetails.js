
import axios from "axios"
import React, {useEffect, useState} from 'react'
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";


const UserDetails = (props) => {
    const [user,setUser] = useState({});
    const [loadUser, setLoadUser]=useState(true);
    

    const {id} = useParams()
    console.log(id)
    

    const getUser = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            setUser(res.data)
            setLoadUser(false)
        })
        .catch((err)=>console.log(err))
    }
    const getUserPosts = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((res)=>{
            setPost(res.data)
            setLoadUser(false)
        })
        .catch((err)=>console.log(err))
    }
    console.log(user)
    useEffect(()=>{
        getUser()
        getUserPosts();
        //esline-disable-next-line
    },[])

console.log(post)
  return (
    <div>
      <h1>
      UserDetails
      </h1>
{loadUser ? (<h1>loading.........</h1>):(  
    <div> 
    <Card style={{ width: '18rem' }}>
    <Card.header>{user.name}</Card.header>
    <ListGroup variant="flush">
    <ListGroup.Item> {user.phone} </ListGroup.Item>
    <ListGroup.Item> {user.email} </ListGroup.Item>
    <ListGroup.Item> {user.adress.city} </ListGroup.Item>
    <ListGroup.Item> {user.adress.suite} </ListGroup.Item>
    <ListGroup.Item> {user.website} </ListGroup.Item>
    <ListGroup.Item> {user.company.nabe} </ListGroup.Item>
    <ListGroup.Item> {user.company.catchPhrase} </ListGroup.Item>
    </ListGroup>
    </Card>

  
     {post.map(((el)=>(   
    <div>
        <h2>{el.title}</h2>
        <h5>{el.body}</h5>
      </div>  
         
     )))}</div>
)}
    </div>
  )
}

export default UserDetails