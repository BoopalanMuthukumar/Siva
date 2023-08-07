import React,{use,state, useState} from 'react';

const RegistrationForm=()  => {
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        phonenumber:"",
        email:"",
        password:"",
        re_password:"",
        dateofbirth:""
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="firstname">Firstname:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          />
            </div>
            <div>
            <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          />
          </div>
          <div>
            <label htmlFor="phone no">Phone no:</label>
        <input
          type="number"
          id="phone no"
          name="phone no"
        //   value={formData.phone no}
          onChange={handleChange}
          />
            </div>
            <div>
            <label htmlFor="email id">Email Id:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
        <input
          type="pwd"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
            </div>
            <div>
            <label htmlFor="re-password">Re-Password:</label>
        <input
          type="pwd"
          id="re-password"
          name="re-password"
          value={formData.re-password}
          onChange={handleChange}
          />
            </div>
            <div>
            <label htmlFor="date of birth">Date of Birth:</label>
        <input
          type="date"
          id="date of birth"
          name="date of birth"
          value={formData.email}
          onChange={handleChange}
          />
            </div>
        </form>
    )
}