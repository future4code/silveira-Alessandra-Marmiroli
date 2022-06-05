import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    
    const onChangeInput = (event) =>{
        const {value, name} = event.target
        setForm({...form, [name]:value})
    }
    const clearState = () =>{
        setForm({initialState})
    }
    return [form, onChangeInput, clearState]
}

export default useForm