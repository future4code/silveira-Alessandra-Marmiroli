
export const goToLogin = (navigate) =>{
    navigate ("/")
}

export const goToCadastro = (navigate) =>{
    navigate ("/cadastro")
}

export const goToFeed = (navigate, id) =>{
    navigate (`/feed/${id}`)
}

export const goToPost = (navigate) =>{
    navigate ("/post")
}

export const voltar = (navigate) => {
    navigate(-1)
}

