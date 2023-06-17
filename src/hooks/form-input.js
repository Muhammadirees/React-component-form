import { useState } from "react"

// with useState
const useInput = (validate) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [isTouched, setIsTouched] = useState(false)

   const valueIsValid = validate(enteredValue)
   const hasError = isTouched && !valueIsValid

   const valueChangeHandler = event => {
      setEnteredValue(event.target.value)
   }

   const inputBlurHandler = event => {
      setIsTouched(true)
   }

   const reset = () => {
      setEnteredValue('')
      setIsTouched(false)
   }

   return {
      value: enteredValue,
      valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
      reset
   }
}

export default useInput