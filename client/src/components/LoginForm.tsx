import * as Form from "@radix-ui/react-form"
import React, { useState } from "react"
import { useNavigate } from "react-router"


const LoginForm = () => {
  const [inputValues, setInputValues] = useState({ username: "", password: "" })
  const navigate = useNavigate()


  const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevstate) => ({ ...prevstate, [name]: value }))
 
  }

  const handleLogin =  async(e: React.FormEvent) => {
    e.preventDefault();
   try {
     const response = await fetch("http://localhost:4001/users/login", {
       method: "POST",
       mode: "cors",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(inputValues)
     });
     if(response.ok) {
       console.log("i got the response")
       const data = await response.json();
       if(data) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
        
       }
     }
   } catch (error) {
    console.log(error)
   }
  }





  return (
    <>
      <Form.Root onSubmit={ handleLogin } className="w-[280px] h-[300px] z-10 p-8 border border-radixgray-700 rounded-lg absolute left-1/2 bottom-1/2 bg-radixgray-200">
        <h2 className="text-center">Log in</h2>
        <Form.Field className="mb-2.5 grid" name="username">
          <div className="flex items-baseline flex-col justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Username</Form.Label>
            <Form.Control placeholder="Enter your username" value={inputValues.username} onChange={ handleInputValues } className="border box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_#53D2EC] focus:shadow-[0_0_0_2px_#53D2EC]"/>
          </div>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="password">
          <div className="flex items-baseline flex-col justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Password</Form.Label>
            <Form.Control placeholder="Enter your password" onChange={ handleInputValues } value={inputValues.password} className="border box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_#53D2EC] focus:shadow-[0_0_0_2px_#53D2EC]"/>
          </div>
        </Form.Field>
        <Form.Submit className="mt-2.5 box-border text-white inline-flex h-[35px] w-full items-center justify-center rounded bg-radixcyan-800 px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Log in
        </Form.Submit>
      </Form.Root>
    </>
  )
}

export default LoginForm