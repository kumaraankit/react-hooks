import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch() {
    // const [posts,setPosts]=useState([])
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)

    useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res=>{
    console.log(res)
    setPost(res.data)
}).catch(err=>{
    console.log(err)
})
    },[id])// to fetch depending on the id
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            {post.title}
          {/* {posts.map(post=><li key={post.id}>{post.title}</li>)}   */}
        </div>
    )
}

export default DataFetch
