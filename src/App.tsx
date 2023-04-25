import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

//user data api
const apiUserData = "https://randomuser.me/api";  
 
 
function App() {
  const [userFName, setFName]=useState([]);
  const [userLName, setLName]=useState([]);
  const [userEmail, setEmail]=useState([]);

  const getUserData = async ()=> {
    const {data} = await axios.get(apiUserData);
    //console.log(data);

    const userData = data.results[0]; 
     
    setEmail(userData.email) 
    setFName(userData.name?.first)
    setLName( userData.name?.last)

   }

  useEffect(()=>{ 
     
     getUserData();
  },[])

  return (
    


<section   className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">

<section className="w-auto mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg text-center">
    
     <div className="text-white mt-6 w-fit mx-auto">
       <p> User Details</p>
    </div>
 
    <div className="mt-8 ">
        <h2 className="text-white font-bold text-2xl tracking-wide">Name : {userFName} {userLName}</h2>
    </div>
    <p className="text-white  font-semibold mt-2.5" >
    Email : {userEmail}
    </p>

     
    
    <button className='bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={getUserData}>Get other user </button>
</section>

 


</section>
      
     
     
     

   

    
     
    
  );
}

export default App;
