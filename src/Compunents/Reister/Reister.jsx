import React from 'react';

const Reister = () => {

  const handleRegister = e =>{
    e.preventDefault();
    const email = e.taeget.email.value;
    const password = e.taeget.password.value
    console.log(email, password)
  }



    return (
        <div className='border p-4  text-center'>
          <div className='mx-auto '>
            <h2 className='text-3xl font-bold'>Please Register</h2>
            <form onClick={handleRegister} >
                <input className='border-2 rounded-lg mt-4 p-2 w-80' type="email" placeholder='Your Email' name="email" id="" />
                <br />
                <input  type="password" name="password" placeholder='Password' id="" className="mt-4 border-2  rounded-lg p-2 w-80" />
                <br />
             <input type="SUBMIT"className="mt-4 btn border-2  rounded-lg p-2 w-80" name="REGISTER" id="" />
            </form>
          </div>
        </div>
    );
};

export default Reister;