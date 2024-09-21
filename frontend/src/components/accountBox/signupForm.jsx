import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';

export function SignupForm() {

  const { switchToSignin } = useContext(AccountContext);

  const [signUpFullName,setSignUpFullName] = useState("");
  const [signUpMail,setSignUpMail] = useState("");
  const [signUpPassword,setSignUpPassword] = useState("");
  const [signUpConfirmPassword,setSignUpConfirmPassword] = useState("");


  // const signUpMyAccount = async(e) => {
  //   e.preventDefault();
  //   if (signUpPassword !== signUpConfirmPassword) {
  //     alert("Passwords do not match");
  //   }
  //   else{
  //     try {
  //       let res = await register(signUpMail, signUpFullName, signUpPassword);
        
  //       if(res === "success"){
  //         alert("Woohoo! Account created successfully. Use your email and password to login.");
  //         setSignUpFullName("");
  //         setSignUpMail("");
  //         setSignUpPassword("");
  //         setSignUpConfirmPassword("");
  //       }
  //       else{
  //         alert("Error creating account");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }
  return (
    <BoxContainer>
      <FormContainer>
        <Input 
          type="text" 
          placeholder="Full name"
          value={signUpFullName}
          onChange={(e) => setSignUpFullName(e.target.value)}
          required
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={signUpMail}
          onChange={(e) => setSignUpMail(e.target.value)}
          required 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
          required/>

        <Input 
          type="password" 
          placeholder="Confirm password" 
          value={signUpConfirmPassword}
          onChange={(e) => setSignUpConfirmPassword(e.target.value)}
          required />
        
        <SubmitButton type="submit">Signup</SubmitButton>

      </FormContainer>
      <Marginer direction="vertical" />
      
      <Marginer direction="vertical" />
      <LineText className="mt-2">
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>

    </BoxContainer>
  );
}