//useCallback,useEffect,useRef ;
import {useState,useCallback, useEffect, useRef} from 'react';
import './App.css';
import "./index.css";
const App = ()=>{

let [length,setLength] = useState(10);
let [number,setNumber]  = useState(false);
let [char,setChar] = useState(false);
let [password,setPassword] = useState("");
const pwdGenerator = useCallback(()=>{
let pass= "";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
if (number) str += "0123456789";
if (char) str += "!@#$%^&*_~(){}[]=+-" ;
for (let i = 0 ; i < length; i++){
let index  = Math.floor(Math.random() * str.length + 1);
pass = pass + str.charAt(index);

}

setPassword(()=> pass);
},[length,number,char,setPassword]);
console.log(pwdGenerator);

useEffect(()=>{
  pwdGenerator();
},[length,number,char,pwdGenerator]);

const pwdRef = useRef(null);
const copyPassword =  useCallback(()=>{
pwdRef.current?.select()
pwdRef.current?.setSelectionRange(0,5);
 window.navigator.clipboard.writeText(password);
},[password])

return (
<>
<h1 className='text-white text-4xl text-center'>Password Generator</h1>
<br></br>
<div className='h-[100px] w-[500px] border border-red-500'>
<div className='w-full'><input type='text' value={password} readOnly  ref={pwdRef}/>
<button className='bg-green-500' onClick={copyPassword}>Copy</button>
</div>
<div> 
<span>
<input type="range" min={10} max={50} className="w-1/2 cursor-pointer" id='length' value={length}
onChange={(event)=>{setLength(()=> event.target.value)}}
/>
{/* <input type='checkbox' id='number'></input> */}
<label htmlfor="length">Length : {length}</label>
</span>
<span>
<input type='checkbox' id='number' onChange={()=>{setNumber((prevVal)=> prevVal ? false : true)}}></input>
<label htmmlfor="number">Number</label>
</span>
<span>
<input type='checkbox' id='char' onChange={()=>{setChar((prevVal)=>prevVal ? false : true)}}></input>
<label htmlFor='char'>Characters</label>
</span>
</div>
</div>
 </>
  );
}


export default App;