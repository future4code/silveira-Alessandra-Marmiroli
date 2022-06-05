import axios from "axios"
import { BASE_URL } from "../constants/urls";
import { goTo } from "../routes/coordinator";

export const createCommentVote = (id) =>{
//     HEADERS
// Authorization
// {{token}}
// BODYraw
// {
// 	"direction": 1
// }
    axios.post (`${BASE_URL}comments/:id/votes`, body)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

export const changeCommentVote = (id) =>{
//     HEADERS
// Authorization {{token}}
// BODYraw
// {
// 	"direction": -1
// }
    axios.put (`${BASE_URL}comments/:id/votes`, body)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

export const deletePostVote = (id) =>{
    // HEADERS
    // Authorization {{token}}
    axios.del (`${BASE_URL}posts/:id/votes`, body)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err)
    alert(err.response.data.message)
    })
}

