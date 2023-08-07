import React, { useState } from 'react';


 const RegistrationForm=()  => {

  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName]=useState('');
  const [phoneNo , setPhoneNo]=useState('');
  const [emailId, setEmailId]=useState('');
  const [password, setPassword]=useState('');
  const [repassword, setrepassword]=useState('');
  const [dateOfBirth, setDateOfBirth]=useState('');
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Hello "+firstName)
    console.log("Hello"+lastname)
    console.log("PhoneNo:"+ phoneNo)
    console.log("Email-"+ emailId)
    console.log("password:"+ password)
    console.log("re-password:"+repassword)
    console.log("dateOfBirth:"+dateOfBirth)
  }
    return(
      <div>
        <form onSubmit={e =>{handleSubmit(e)}}>
            <div>
              <h1>RegistrationForm</h1>
            <label htmlFor="firstname">Firstname:</label>
        <input
          type="text" id="firstname" name="firstname" required onChange={(e) => setFirstName(e.target.value)}
          />
            </div>
            <div>
            <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          id="lastname"
          name="lastname" required onChange={(e) => setLastName(e.target.value)}
         
          />
          </div>
          <div>
            <label htmlFor="phone no">Phone no:</label>
        <input
          type="number"
          id="phone no"
          name="phone no" required onChange={(e) => setPhoneNo(e.target.value)}
   
          />
            </div>
            <div>
            <label htmlFor="email id">Email Id:</label>
        <input
          type="text"
          id="email"
          name="email"  required onChange={(e) => setEmailId(e.target.value)}
        
          />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password" required  onChange={(e) => setPassword(e.target.value)}
         
          />
            </div>
            <div>
            <label htmlFor="re-password">Re-Password:</label>
        <input
          type="password"
          id="re-password"
          name="re-password" required  onChange={(e) => setrepassword(e.target.value)}
          
          />
            </div>
            <div>
            <label htmlFor="date of birth">Date of Birth:</label>
        <input
          type="date"
          id="date of birth"
          name="date of birth"  onChange={(e) => setDateOfBirth(e.target.value)}
       
          />
            </div>

           <button type = 'submit' >Click here</button>
        </form>
        </div>
    )
    
}



export default RegistrationForm