import React, {useState} from 'react'
import { IValidator, useValidation } from './useValidation'


export const useInput = (initialValue: string, validators: IValidator) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isLeave, setIsLeave] = useState<boolean>(false)
    const valid = useValidation(value, validators)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = (e: React.SyntheticEvent) => {
        setIsLeave(true)
    }


 
    return {
        value,
        isLeave,
        onChange,
        onBlur, 
        ...valid
    }

}
