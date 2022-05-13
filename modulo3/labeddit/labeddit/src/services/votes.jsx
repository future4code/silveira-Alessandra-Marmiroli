import axios from "axios"
import { BASE_URL } from "../constants/urls";


export const changePosteVote = (id) =>{
    axios.put (`${BASE_URL}posts/:id/votes`, body)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

export const postVote = (id) =>{
    axios.post (`${BASE_URL}posts/:id/votes`, body)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

export const deletePostVote = (id) =>{
    axios.del (`${BASE_URL}posts/:id/votes`, body)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}





