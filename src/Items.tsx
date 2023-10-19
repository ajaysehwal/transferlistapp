const Items=({items,handleToggle})=>{
  return(
    <div>
       <input type="checkbox" onChange={()=>handleToggle(items)} />
      {items}
     </div>
  )
}
export default Items;