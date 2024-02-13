import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstname : '',
    lastname: '',
    username : '', 
    password : '',
    confirmPassword : '',
    email : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className=" text-gray-900 flex justify-center mb-4  bg-white">
    <div className="max-w-screen-xl  m-0 sm:m-10 bg-white shadow sm:rounded-2xl flex justify-center  flex-row-reverse flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 animate-fade-left animate-once animate-ease-linear">
      <div className="text-3xl mb-4 text-center">Sign up </div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        

      <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className=" block text-gray-700">firstname</span>
          </div>
          <input
            type="text"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            name="firstname"
            placeholder="firstname"
            value={input.firstname}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className=" block text-gray-700">lastname</span>
          </div>
          <input
            type="text"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            name="lastname"
            placeholder="lastname"
            value={input.lastname}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className=" block text-gray-700">username</span>
          </div>
          <input
            type="text"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            name="username"
            placeholder="username"
            value={input.username}
            onChange={ hdlChange }
          />
          </label>
        
          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className=" block text-gray-700">E-mail</span>
          </div>
          <input
            type="text"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            name="email"
            placeholder="email"
            value={input.email}
            onChange={ hdlChange }
          />
          </label>
          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className=" block text-gray-700">password</span>
          </div>
          <input
            type="text"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            name="password"
            placeholder="password"
            value={input.password}
            onChange={ hdlChange }
          />
          </label>
          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className=" block text-gray-700">confirmPassword</span>
          </div>
          <input
            type="text"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            name="confirmPassword"
            placeholder="confirmPassword"
            value={input.confirmPassword}
            onChange={ hdlChange }
          />
          </label>
        <div className="flex gap-5 ">
        <button className="mt-5 tracking-wide font-semibold bg-purple-400 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                   
                   <span className="ml-3">Sign up</span>
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
