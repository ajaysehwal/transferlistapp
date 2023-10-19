import Items from "./Items";
const List=({items,handleToggle}:{items:Array<Number>,handleToggle:any})=>{

    return (
        <>
          <div className='box'>
              {items?.map((el)=>(
                 <Items key={el} items={el} handleToggle={handleToggle}/>
              ))}
            </div> 
        </>
    )
}

export default List;