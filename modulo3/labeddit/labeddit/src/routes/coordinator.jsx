
export const goToLogin = (navigate) =>{
    navigate ("/")
}

export const goToCadastro = (navigate) =>{
    navigate ("/cadastro")
}

export const goToFeed = (navigate) =>{
    navigate ("/feed")
}

export const goToPost = (navigate, id) =>{
    navigate (`/post/${id}`)
}

export const voltar = (navigate) => {
    navigate(-1)
}

