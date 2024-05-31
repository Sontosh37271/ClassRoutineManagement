import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Message from './components/message';


function App() {
  // const [users,setUsers]=useState([]);
  // const getAllusers = async () => {
  //   const response = await axios.get("http://localhost:3001/users");
  //   //console.log(response.data);
  //   setUsers(response.data);
  // }
  // useEffect(()=>{
  //   getAllusers();
  // },[])
  var [count,setCount]= useState(0);
  return (
    <div>
      {
        // users.map(user =>{
        //   return (
        //     <article key={user.id}>
        //       <h2>{user.name}</h2>
        //       <p>{user.email}</p>
        //     </article>
        //   )

        // })
       
      }
      {console.log("increment rendaring")}
       <h2>Count : {count}</h2>
        <button onClick ={()=>{setCount((count)=>count+1)}
        }>Increment</button>
        <Message />
    </div>
     
  );
 
}

export default App;
