import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const Post = ()=>{
    useProtectedPage()
    return (
        <div>
            <h1>Sou a página de Post</h1>
        </div>
    )
}

export default Post 