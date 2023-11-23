import React, { useState } from 'react';
import auth from '../firbases/firbaese.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Reister = () => {
  const [registerError, setRegisterError] = useState('')
  const [sucsses, setSucsses] = useState('')

  const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

       // reset error
       setRegisterError('');
       setSucsses('');
       
    //error massegs
    if(password.length < 6){
      setRegisterError('Password should be at least 6 characters is longer ')
      return;
    } 

 
    /*
    create user
    */ 
     createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result.user);
      setSucsses('your register is sucsses')

    })
    .catch(error =>{
     console.log(error);
     setRegisterError(error.message);
    })
  }



    return (
        <div className='border p-4  text-center'>
          <div className='mx-auto '>
            <h2 className='text-3xl font-bold'>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input className='border-2 rounded-lg mt-4 p-2 w-80' type="email" placeholder='Your Email' name="email" id="" />
                <br />
                <input  type="password" name="password" placeholder='Password' required id="" className="mt-4 border-2  rounded-lg p-2 w-80" />
                <br />
             <input type="submit"className="mt-4 btn btn-primary border-2  rounded-lg p-2 w-80" required value="REGISTER" id="" />
            </form>
           {
            registerError && <p className='text-red-500 mt-6'>{registerError}</p>
           }
           {
            sucsses && <p className='text-green-600 mt-6'>{sucsses}</p>
           }
          </div>
        </div>
    );
};

export default Reister;