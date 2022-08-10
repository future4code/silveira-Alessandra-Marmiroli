import { useState } from "react"

const useForm = (initialState) => { 
    const [inputForm, setInputForm] = useState(initialState)

    const OnChangeInput = (event) => { 
        const { value, name} = event.target
        setInputForm({...inputForm, [name]:value})
    } 
    //
    const clear = () => { 
        setInputForm (initialState)
    }
    return { inputForm, OnChangeInput, clear, setInputForm}
}
export default useForm 

//Usando um Hook para guardar as informações recebidas do usuário em um estado, clear permite que este campo após o texto digitado fique sempre limpo. 
//O evento onChange é utilizado para que seja realizada determinada ação após alguma mudança.
//Onchange acontece a partir do clique do usuário dentro de um campo input. 
//Esse Hook UseForm é usado para pages com formulários. 