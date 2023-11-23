import React from 'react';
import auth from '../firbases/firbaese.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Reister = () => {

  const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    /*
    create user
    */ 
     createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
     console.log(error)
    })
  }



    return (
        <div className='border p-4  text-center'>
          <div className='mx-auto '>
            <h2 className='text-3xl font-bold'>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input className='border-2 rounded-lg mt-4 p-2 w-80' type="email" placeholder='Your Email' name="email" id="" />
                <br />
                <input  type="password" name="password" placeholder='Password' id="" className="mt-4 border-2  rounded-lg p-2 w-80" />
                <br />
             <input type="submit"className="mt-4 btn btn-primary border-2  rounded-lg p-2 w-80" value="REGISTER" id="" />
            </form>
          </div>
        </div>
    );
};

export default Reister;