"use client"

import { UseFormRegister, RegisterOptions } from "react-hook-form"

interface InputProps{
    type: string
    placeholder: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
}

export function Input({name, placeholder, type, register, error, rules}: InputProps){
    return(
        <>
            <input 
                className="w-full border-1 border-gray-400 rounded-md h-11 px-2"
                placeholder={placeholder}
                type={type}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className="text-red-500 my-1">{error}</p>}
        </>
    )
}