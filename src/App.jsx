
import { useState } from 'react';
import './App.css' ;
function App(){
let [name , setName]  = useState("");

     let onChange = (eventObj)=>{
      console.log(eventObj.target.value);
      setName(()=> eventObj.target.value);

}
// let onChange = (eventObj)=>{
//       console.log(eventObj.target.value);
//       setName(()=> eventObj.target.value);
// }
return (
<>
<form>
<input id='inp' placeholder='Enter Your Name' onChange={onChange}></input>
<button type='submit'>Submit Name</button>
</form>
<div><h1>Name:{name}</h1></div>
    </>
  )
}

export default App
