import React from "react"
import Cadastro from '../pages/CadastroPage/Cadastro'
import Post from '../pages/PostPage/Post'
import Feed from '../pages/FeedPage/Feed'
import Login from '../pages/LoginPage/Login'
import ErrorPage from "../pages/PaginaErro/ErrorPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"

const Router = ({buttonHeader, setButtonHeader}) =>{
    return (
        <BrowserRouter>
            <Header buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>
            <Routes>
                
                <Route index element = {<Login buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>} />
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/feed" element={<Feed buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>}/>
                <Route path="/post/:id" element={<Post />}/>
                <Route path="/erro" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router