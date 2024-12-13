import * as Form from "@radix-ui/react-form";

import { useState } from "react";

const SignupForm = () => {
  const [inputValues, setInputValues] = useState({ fullname: "", password: "" });

  const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevstate) => ({...prevstate, [name]: value }))
  }

  const signUpUser = async(event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}users/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(inputValues)
      });
      if(response.ok) {
        console.log("user created")
      }
    } catch (error) {
      console.log(error)
    }
  } 




  return (
    <>
      <Form.Root onSubmit={ signUpUser } className="w-[280px] h-[300px] z-10 p-8 border border-radixgray-700 rounded-lg absolute left-1/2 bottom-1/2 bg-radixgray-200">
        <h2 className="text-center">Sign up</h2>
        <Form.Field name="fullname">
          <Form.Label>fullname</Form.Label>
          <Form.Control className="box-border texb border border-radixgray-700 inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-black hover:shadow-radixindigo-800 focus:shadow-[0_0_0_2px_black]"
            placeholder="Enter your fullname"
            required
            value={ inputValues.fullname }
            onChange={ handleInputValues }
          />
        </Form.Field>
        <Form.Field name="password">
          <Form.Label>password</Form.Label>
          <Form.Control className="box-border border border-radixgray-700 inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-black hover:shadow-radixindigo-800 focus:shadow-[0_0_0_2px_black]"
            placeholder="Enter your password"
            required
            value={ inputValues.password }
            onChange={ handleInputValues }
          />
        </Form.Field>
        <Form.Submit className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Create an account
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignupForm;
