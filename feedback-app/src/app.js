import React from 'react'

// let App = ()=>{
// return (
//     React.createElement('div', {className:'container'},React.createElement('h2',{className:'myh2'},'This is my first h2'))
// )
// }

// let App = ()=>{
//     const title = 'Blogpost'
//     const Body = 'This is my BlogPost'
//     return (
//        <>
//        <h1>
//            {title.toUpperCase()}, {Body}
//        </h1>
//        </>
//     )
//     }


let App = ()=>{
    const title = 'Blog Post'
    const body = 'this is my blog post'
    const comments = [
        {id:1,text:'comment one'},
        {id:2,text:'comment two'},
        {id:3,text:'comment three'}
    ]

    return (
        <>
        <h1>{title.toUpperCase()}</h1>
        <h2>{body}</h2>
        <ul>
            {comments.map((comment,index)=>(
                <li key={index}> Id: {comment.id} , {comment.text}  </li>
            )
                
            )}
        </ul>
        </>
    )
}
export default App