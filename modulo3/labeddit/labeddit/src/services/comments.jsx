import axios from "axios"
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const posts = () =>{
    axios.post (`${BASE_URL}posts`)
    .then((res)=>{
    // localStorage.setItem("token", res.data.token)
    clear()
    // goToFeed(navigate)   
    })
    .catch((err)=>{
        console.log(err)
    // alert(err.response.data.message)
    })
}

export const commentsPosts = (body, clear, navigate) =>{
    axios.post (`${BASE_URL}posts/:id/comments`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(navigate)   
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

export const creatPost = (body, clear, navigate) =>{
    axios.post (`${BASE_URL}posts`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(navigate)   
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

export const createComments = (body, clear, navigate) =>{
    axios.post (`${BASE_URL}posts/:id/comments`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(navigate)   
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}