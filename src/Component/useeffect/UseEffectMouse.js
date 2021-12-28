import React, { useEffect, useState } from 'react'

function UseEffectMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const mouselogposition=(event)=>{
      console.log("position of the mouse")
      setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        console.log("useaffect called")
        window.addEventListener('mousemove',mouselogposition)

        return ()=>{
            console.log("cleanup is happening, component unmounting")
            window.removeEventListener('mouseover',mouselogposition); //Once the unmounting is done 
                                                                      //it wont call useeffect again
        }
        
    },[]) //Empty array also called as dependency array and it will restrict to run useeffect once
    return (
        <div>
          X coordinates {x} 
          Y cordinates  {y}  
        </div>
    )
}

export default UseEffectMouse

// arrow function return another function in useeffect and all the cleanup code will be present there
// Once the cleanup is done(componentwillunmount) we cannot perform anything on that