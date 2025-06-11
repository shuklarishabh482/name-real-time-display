import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import "./index.css";
function App() {
let [totLikes , setTotLikes] = useState(0);
let [cityLike , setCityLike] = useState({
    bangloreLikes : 0 ,
    puneLikes : 0 ,
    hyderabadLikes : 0 ,
});

let [noneOf,setNoneOf] = useState(0); 

let bangLike = ()=>{
if (totLikes < 100){
    totLikes =  cityLike.bangloreLikes  + cityLike.puneLikes + cityLike.hyderabadLikes + noneOf 
    setTotLikes(prevTotLikes => prevTotLikes + 1);
    cityLike.bangloreLikes = cityLike.bangloreLikes + 1 ;
    setCityLike(prevCityLike => ({...prevCityLike}));
 }
}
let puneLike = ()=>{
   if (totLikes <= 100){
// totLikes =  cityLike.bangloreLikes  + cityLike.puneLikes + cityLike.hyderabadLikes + noneOf 
      cityLike.puneLikes = cityLike.puneLikes + 1 ;
      setCityLike(prevCityLike =>({...prevCityLike}));
      totLikes =  cityLike.bangloreLikes  + cityLike.puneLikes + cityLike.hyderabadLikes + noneOf 
      setTotLikes(prevTotLikes => prevTotLikes + 1)
 }

}

let hydLike = ()=>{
if (totLikes <= 100){
// setCityLike(prevTotLikes => prevTotLikes + 1);

cityLike.hyderabadLikes = cityLike.hyderabadLikes + 1;
setCityLike(prevCityLike =>({...prevCityLike}));
 totLikes =  cityLike.bangloreLikes  + cityLike.puneLikes + cityLike.hyderabadLikes + noneOf 
setTotLikes(prevTotLikes => prevTotLikes + 1)

 }
}

let noneOfThese = ()=>{
    if (totLikes < 100){
        totLikes =  cityLike.bangloreLikes  + cityLike.puneLikes + cityLike.hyderabadLikes + noneOf 
        setTotLikes(prevTotLikes => prevTotLikes + 1)
        setNoneOf(prevNoneof =>  prevNoneof + 1)
    }
}

return (  
<>
<h1>Voting System : {totLikes}</h1>
<br></br>
<br/>
<button onClick={bangLike}>Banglore Likes Percent :{cityLike.bangloreLikes}%</button>
<br/>
<br></br>
<button onClick={puneLike}>Pune Likes Percent : {cityLike.puneLikes}%</button>
<br/>
<br></br>
<button onClick={hydLike}>Hyderabad Likes Percent:{cityLike.hyderabadLikes}%</button>
<br></br>
<button onClick={noneOfThese}>None of These :{noneOf}%</button>

    </>
  );
}

export default App;