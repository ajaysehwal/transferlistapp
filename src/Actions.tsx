const Actions=({moveLeft,moveRight})=>{
    return(
        <>
           <div>
            <button onClick={moveLeft} >Send to Left</button>
            <button onClick={moveRight}>Send to Right</button>
           </div>
     </>
    )
}

export default Actions