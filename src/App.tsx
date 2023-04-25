import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

//user data api
const apiUserData = "https://randomuser.me/api";  
 
type User = {
  name?: string;
  email?:string;
  location?:string;
  picture?:string;
   
}
 
function App() {
  const [userData, setData]=useState<User[]>([]);

  const getUserData = async ()=> {
    const {data} = await axios.get(apiUserData);
    //console.log(data);

    const userData = data.results[0]; 
    setData(userData) 
   }

  useEffect(()=>{ 
     
     getUserData();
  },[])

  return (
    


<section   className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">

<section className="w-auto mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg text-center">
    
    <div className=" mt-6 w-fit mx-auto">
        <img src={userData.picture?.large} className="rounded-full w-28 " alt="profile picture"/>
    </div>

    <div className="mt-8 ">
        <h2 className="text-white font-bold text-2xl tracking-wide"> {userData.name?.title} {userData.name?.first} {userData.name?.last}</h2>
    </div>
    <p className="text-white  font-semibold mt-2.5" >
    Email : {userData.email}
    </p>

     
    <div className="mt-3 text-white text-sm">
    <p  >Address : {userData.location?.street?.name}, {userData.location?.city}, {userData.location?.country},  {userData.location?.postcode}.</p> 
       
    </div>
    <button className='bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={getUserData}>Get other user </button>
</section>

 


</section>
      
     
     
     

   

    
     
    
  );
}

export default App;
