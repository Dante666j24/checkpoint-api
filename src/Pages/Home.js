import React from 'react'
import UserList from '../component/UserList'

const Home = ({users,loading}) => {
  return (
    <div>
      <h1> Welcome to Home Page </h1>
      <UserList users={users} loading={loading} />
    </div>
  )
}

export default Home