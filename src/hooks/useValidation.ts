import React, { useState, useEffect } from 'react'


export interface IValidator {
    maxLength?: number,
    minLength?: number,
    pattern?: RegExp,
    isEmpty?: boolean
}

export interface IErrorMessage {
    maxLength?: string,
    minLength?: string,
    pattern?: string,
    isEmpty?: string
}

export const useValidation = (value: string, validators: IValidator) => {
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);
    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [patternError, setPatternError] = useState<boolean>(false);
    const [isEmptyError, setIsEmptyError] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<IErrorMessage | null>({})

    useEffect(() => {
        const state = { ...errorMessage };
        for (let validator in validators) {
            switch (validator) {
                case 'maxLength':
                    if (value.length > validators[validator]!) {
                        setMaxLengthError(true)
                        state[validator] = `Maximum ${validators[validator]} characters`;
                    } else {
                        setMaxLengthError(false)
                        delete state[validator]
                    }
                    break;
                case 'minLength':
                    if (value.length < validators[validator]!) {
                        setMinLengthError(true)
                        state[validator] = `Minimum ${validators[validator]} characters`;
                    } else {
                        setMinLengthError(false)
                        delete state[validator]

                    }
                    break;
                case 'pattern':
                    if (!isEmptyError && !validators[validator]!.test(value.toString())) {
                        setPatternError(true)
                        state[validator] = 'Invalid Input'
                    } else {
                        setPatternError(false)
                        delete state[validator]
                    }
                    break;
                case 'isEmpty':
                    if (!value) {
                        setIsEmptyError(true)
                        state[validator] = 'Field cannot be empty'
                    } else {
                        setIsEmptyError(false)
                        delete state[validator]
                    }
                    break;
            }
            console.log(state)
            setErrorMessage(state)
        }
    }, [value])

    useEffect(() => {
        if (maxLengthError || minLengthError || patternError || isEmptyError) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }

    }, [maxLengthError, minLengthError, patternError, isEmptyError])

    return {
        errorMessage,
        isValid
    }

}
