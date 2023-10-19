import "./App.css";

import Actions from "./Actions";
import List from "./List";
import {useState} from "react";
import {intersection,not} from "./utils";
function App() {
   const items:Array<Number>=[1,2,3,4]
  const [Leftitems,setLeftitems]=useState(items);
  const [Rightitems,setRightitems]=useState([]);
  const [checkedItems,setCheckedItems]=useState([]);
  const leftCheckedItems=intersection(Leftitems,checkedItems);
  const RightCheckedItems=intersection(Rightitems,checkedItems);
  const handleToggle=(item:never)=>{
     const CurrentIndex=checkedItems.indexOf(item);
     const newCheckedItems=[...checkedItems];
     if(CurrentIndex===-1){
      newCheckedItems.push(item);
     }else{
      newCheckedItems.splice(CurrentIndex,1);
     }
     setCheckedItems(newCheckedItems);
  }

  
  const moveLeft=()=>{
    setLeftitems(Leftitems.concat(RightCheckedItems));
    setRightitems(not(Rightitems,RightCheckedItems));
    setCheckedItems(not(checkedItems,RightCheckedItems))
  }
 
  const moveRight=()=>{
    setRightitems(Rightitems.concat(leftCheckedItems));
    setLeftitems(not(Leftitems,leftCheckedItems));
    setCheckedItems(not(checkedItems,leftCheckedItems));
    console.log("MoveRight")
  }
 console.log(checkedItems)
  return (
    <div className="App">
    <List items={Leftitems} handleToggle={handleToggle}/>
      <Actions  moveLeft={moveLeft} moveRight={moveRight}/>
    <List items={Rightitems}  handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
