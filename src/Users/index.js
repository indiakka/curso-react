import React from 'react'
import useRequest from '../hooks/useRequest';


const UserList = () =>
{
  const users = useRequest('https://jsonplaceholder.typicode.com/users')
 
  if ( !users ) return 'Loading...'  
        
  return (  
    <ul>  
      {users.map( user => (
        <li key={user.id}>{user.name}</li>  
      ))}    
    </ul>  
  );      
  
}

export default UserList;
