
import {useState} from 'react';
import './App.css' ;
function App(){
let isShow = true ;
let [showMore,setShowMore] = useState(isShow);
let onClickHandler = ()=>{
       setShowMore((prevShow)=> prevShow ? false:true);
}
return (
<>
<div>
{ showMore ? <div> <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Voluptatibus velit magni quis assumenda totam consequatur 
  </p>
 <p>  
  explicabo expedita ab. Rem unde illo quidem corrupti maiores? Officia modi aliquam dolorum exercitationem laudantium?
</p></div> : <p>  
  explicabo expedita ab. Rem unde illo quidem corrupti maiores? Officia modi aliquam dolorum exercitationem laudantium?
</p>}
</div>
{
showMore ? <button onClick={onClickHandler}>
    Show Less
  </button > : <button onClick={onClickHandler}> Show More</button>
}
</>
)

}
export default App
