import axios from 'axios';
import { useState } from "react";
import useAuth from '../hooks/useAuth';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // การตรวจสอบความถูกต้อง
      const response = await axios.post('http://localhost:8889/auth/login', input);
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      const userResponse = await axios.get('http://localhost:8889/auth/me', {
        headers: { Authorization: `Bearer ${response.data.token}` }
      });
      console.log(userResponse.data);
      setUser(userResponse.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="max-w-screen-xl  m-0 sm:m-10 bg-white shadow sm:rounded-2xl flex justify-center  flex-row-reverse flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 animate-fade-left animate-once animate-ease-linear">
        <h2 className="text-3xl mb-4 text-center">sing in</h2>
       
       
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">usrename</label>
            <input
              type="text"
              id="username"
              name="username"
              value={input.username}
              onChange={handleChange}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col items-center">
          <button className="mt-5 tracking-wide font-semibold bg-purple-400 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                   
                      <span className="ml-3">Sign in</span>
                    </button>

          <div className="divider divider-neutral ">OR</div>
                  <button className="w-full  font-bold shadow-sm rounded-lg py-3 bg-zinc-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path>
                                    <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path>
                                    <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path>
                                    <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path>
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign in with Google
                            </span>
                        </button>
                       
          </div>
          
        </form>
        </div>
      </div>
    </div>
  );
}
