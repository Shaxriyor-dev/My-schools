import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import logins from "../assets/login.svg";
import { useNavigate } from "react-router-dom";

function Login() {
   const navigator = useNavigate()
   const [login , setLogin] = useState("");
   const [password , setPassword] = useState("");
   const [err , setErr] = useState('');
   const [color , setColor] = useState('color');

   

   const onclicks = ()=> {
     if(login === "admin@gmail.com" && password === "0000"){
        setTimeout(()=>{
          navigator("/admin")
        } , 1000)
         setErr("Sizning loginingiz tog'ri server ...")
         setColor('lime')
     }else{
        setErr("Sizning loginingiz xato")
        setColor("red")
     }
   }
    
  return (
    <div className="h-screen font-[Merriweather_Sans] flex gap-10 items-center justify-center">
      <div>
        <img className="h-[600px]" src={logins} alt="" />
      </div>
      <div className="w-[450px]">
        <p className="text-3xl font-[Merriweather_Sans] font-bold">Sign in</p>
        <Box sx={{ width: 500, marginTop: "20px", maxWidth: "100%" }}>
          <TextField style={{color : color}} onChange={(e)=> setLogin(e.target.value)} fullWidth label="Login kiriting :" />
        </Box>
        <Box sx={{ width: 500, marginTop: "20px", maxWidth: "100%" }}>
          <TextField style={{color : color}} onChange={(e)=> setPassword(e.target.value)} fullWidth label="Password kiriting :"  />
        </Box>
        {
          err && 
          <p className="text-sm py-2 p-1" style={{color : color}}>{err}</p>
        }
          <button onClick={onclicks} className="h-[55px] text-teal-500  border-2 w-full rounded-sm outline-none border-teal-500 mt-7 ">Sumbit</button>
      </div>
    </div>
  );
}

export default Login;
