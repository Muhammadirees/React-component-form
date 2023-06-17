import useInput from "../../hooks/form-input";

const Signup = (props) => {
   const isNotEmpty = value => value.trim() !== '';
   const isEmail = value => value.includes('@')
   const {
      value: firstName, inputChangeHandler: firstNameHandler,
      inputTouchHandler: firstNameTouchHandler,
      valueIsValid: firstNameIsValid,
      hasError: firstNameHasError,
      reset: firstNameReset,
   } = useInput(isNotEmpty)

   const {
      value: lastName, inputChangeHandler: lastNameHandler,
      inputTouchHandler: lastNameTouchHandler,
      valueIsValid: lastNameIsValid,
      hasError: lastNameHasError,
      reset: lastNameReset,
   } = useInput(isNotEmpty)

   const {
      value: enteredEmail, inputChangeHandler: emailHandler,
      inputTouchHandler: emailTouchHandler,
      valueIsValid: emailIsValid,
      hasError: emailHasError,
      reset: emailReset,
   } = useInput(isEmail)

   let formIsValid = false
   if (firstNameIsValid && lastNameIsValid && emailIsValid) {
      formIsValid = true
   }

   const formSubmissionHandler = event => {
      event.preventDefault()
      if (!formIsValid) {
         return;
      }
      console.log('Submit')
      console.log('FullName:', firstName, lastName, '\nemail:', enteredEmail)
      firstNameReset()
      lastNameReset()
      emailReset()
   }

   const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
   const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
   const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'

   return (
      <form onSubmit={formSubmissionHandler}>
         <div className='control-group'>
            <div className={firstNameInputClasses}>
               <label htmlFor='fname'>First Name</label>
               <input type='text' id='fname' onChange={firstNameHandler} value={firstName} onBlur={firstNameTouchHandler} />
               {firstNameHasError && <p className='error-text'>Please enter a first name</p>}
            </div>
            <div className={lastNameInputClasses}>
               <label htmlFor='lname'>last Name</label>
               <input type='text' id='lname' onChange={lastNameHandler} value={lastName} onBlur={lastNameTouchHandler} />
               {lastNameHasError && <p className='error-text'>Please enter a last name</p>}
            </div>
         </div>
         <div className={emailInputClasses}>
            <label htmlFor='email'>E-Mail Address</label>
            <input type='email' id='email' onChange={emailHandler} value={enteredEmail} onBlur={emailTouchHandler}
               placeholder="xxx@gmail.org" />
            {emailHasError && <p className='error-text'>Please enter a valid email</p>}
         </div>
         <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
         </div>
      </form>
   );
};

export default Signup;
