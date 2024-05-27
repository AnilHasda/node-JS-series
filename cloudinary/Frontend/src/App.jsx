import axios from 'axios';
import React, { useState } from 'react'
const App = () => {
  let [profile,setProfile]=useState("");
  const handleForm=async (e)=>{
    e.preventDefault();
    let formdata=new FormData();
    formdata.append("image",profile);
    try{
let {data}=await axios.post("http://localhost:4000/api/v1/upload/media",formdata,{withCredentials:true});
if(data){
  console.log("data inserted successfully");
}
    }catch(error){
      console.log({error});
    }
  }
  return (
    <div>
    <div className='h-10 w-full bg-[blueviolet] capitalize text-white flex items-center justify-center'>Cloundinary testing form</div>
    <form className='flex items-center mt-10 flex-col gap-5'onSubmit={handleForm}>
      <input type="file"name="image"onChange={e=>setProfile(e.target.files[0])}/>
    <button type="submit"className='h-[35px] w-[80px] bg-[blueviolet] text-white rounded-xl mr-[200px]'>submit</button>
    </form>
    </div>
  )
}

export default App