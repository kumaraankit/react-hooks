import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("updating document titile")
        document.title=`clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name.value} onChange={(e)=>setName(e.target.value)}/>
          <button onClick={()=>setCount(count+1)}>click {count} times</button>  
        </div>
    )
}

export default UseEffect
