import * as Form from "@radix-ui/react-form"
import React, { useState } from "react"
import { useNavigate } from "react-router"
import * as Toggle from "@radix-ui/react-toggle"
import { Cross1Icon } from "@radix-ui/react-icons"


interface LoginFormProps {
  toggle: () => void ;
}


const LoginForm = ({toggle}: LoginFormProps ) => {
  const [inputValues, setInputValues] = useState({ username: "", password: "" })
  const navigate = useNavigate()


  const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevstate) => ({ ...prevstate, [name]: value }))
 
  }

  const handleDemo = async(e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}users/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "demo", password: "demopassword"})
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

  const handleLogin =  async(e: React.FormEvent) => {
    e.preventDefault();
   try {
     const response = await fetch(`${import.meta.env.VITE_BASE_URL}users/login`, {
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
      <Form.Root  className="w-[280px] h-[360px] z-10 px-8 pb-8 pt-4 border border-radixgray-700 rounded-lg absolute left-1/2 bottom-[41%] bg-radixindigo-200">
        <div className="flex justify-end">
          <Toggle.Root onClick={toggle} className="flex border size-[35px] items-center justify-center rounded bg-white leading-4 text-mauve11  hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=on]:bg-violet6 data-[state=on]:text-violet12">
            <Cross1Icon/>
          </Toggle.Root>
        </div>

        <h2 className="text-center font-bold text-black">Log in</h2>
        <Form.Field className="mb-2.5 grid" name="username">
          <div className="flex items-baseline flex-col justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Username</Form.Label>
            <Form.Control placeholder="Enter your username" value={inputValues.username} onChange={ handleInputValues } className="border box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-radixindigo-800 focus:shadow-radixindigo-800"/>
          </div>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="password">
          <div className="flex items-baseline flex-col justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Password</Form.Label>
            <Form.Control placeholder="Enter your password" onChange={ handleInputValues } value={inputValues.password} className="border box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-radixindigo-800 focus:shadow-radixindigo-800"/>
          </div>
        </Form.Field>
        <Form.Submit onClick={ handleLogin } className="flex w-full mt-5 justify-center text-sm text-white items-center bg-radixindigo-900 hover:bg-radixindigo-1000 px-2 py-1.5 rounded">
          Log in
        </Form.Submit>
        <p className="text-center">or</p>
        <Form.Submit onClick={ handleDemo } className="flex w-full justify-center text-sm text-white items-center bg-[#30A46C] hover:bg-[#2B9A66] px-2 py-1.5 rounded">
          Log in with demo account
        </Form.Submit>
      </Form.Root>
    </>
  )
}

export default LoginForm