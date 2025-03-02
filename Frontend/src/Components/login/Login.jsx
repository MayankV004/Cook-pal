import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try{
      const response = await axios.post("http://localhost:3001/login", { email, password } , {
        headers : {
          "Content-Type": "application/json",
        },
        withCredentials:true, // Important for cookies
      });

      if (response.data.message === "Login Successful")
      {
        navigate("/home");
      }
      else {
        setError(response.data.error || "Login failed")
        alert(error)
      }

    }
    catch(err){
      if (error.response) {
        // Server responded with an error
        setError(error.response.data.error || "Login failed");
      } else if (error.request) {
        // Request was made but no response
        setError("No response from server");
      } else {
        // Something else went wrong
        setError("An error occurred");
      }
      console.error("Login error:", error);
    }

  };
  return (
    <>
      <div className="login w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="border-[1px] border-zinc-400 rounded-md p-8 shrink-0 shadow-lg max-h-full overflow-auto">
          <div className="text-center mb-8">
            <h1> <span className="text-3xl font-light text-[#509E2F]">Login</span></h1>
          </div>
          <form action="" className="flex flex-col gap-4 w-72 mx-auto" onSubmit={handleSubmit}>
            <input
              className="w-full px-3 py-2 bg-transparent border-[1px] border-zinc-500 rounded-md outline-none leading-4"
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full px-3 py-2 bg-transparent border-[1px] border-zinc-500 rounded-md outline-none leading-4"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className="w-full px-3 py-2 border-2 bg-[#509E2F] hover:bg-[#4a922b] cursor-pointer text-white rounded-md" type="submit" value="Login" />
          </form>
          <div>
            <p className="text-center mt-4">
              Don't have an account? <NavLink to="/signup" className="text-[#509E2F]">Sign Up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
