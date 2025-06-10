
import { useState } from 'react';
import './App.css' ;
function App(){
let obj = {
  name : "" ,
  email : "" 
}
let [userDetail , setUserDetail] = useState(obj);

let onSubmitHandler = (e)=>{
e.preventDefault();
console.log(e);
console.log(e.target);
let formList = e.target ;
let name = formList[0].value;
let email  = formList[1].value;
console.log(name,email);
userDetail.name = name ;
userDetail.email = email ;
 userDetail = {...userDetail}
setUserDetail(()=> userDetail)
}
console.log(userDetail);

return (
<>
<form onSubmit={onSubmitHandler}>
  <input type='text' placeholder='name'></input>
  <br></br>
  <input type='email' placeholder='email'></input>
  <br></br>
  <input type='password' placeholder='password'></input>
  <br></br>
  <button type='submit' onSubmit={onSubmitHandler}>Submit Details</button>
</form>
<h5>Name : {userDetail.name}</h5>
<h5>Email : {userDetail.email}</h5>

</>
)

}
export default App
