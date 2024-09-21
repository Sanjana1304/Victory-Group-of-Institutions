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
//import { useNavigate } from "react-router-dom";
// import api from "../../api/axiosConfig";


export function LoginForm() {

  const { switchToSignup } = useContext(AccountContext);

  const [loginMail,setloginMail] = useState("");
  const [loginPassword,setloginPassword] = useState("");
  //const navig = useNavigate();

  // const signIntoMyAccount = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const authbody = {
  //       email:loginMail,
  //       password:loginPassword
  //     }
  //     const response = await api.post(`/api/auth/login`,authbody,{
  //       headers:{
  //         'Content-Type':'application/json'
  //       },
  //       withCredentials: true
  //     });
  //     if (response.status === 200) {
  //       const { token, user } = response.data;
  //       document.cookie = `auth_token=${token}; path=/`;
  //       navig("/home");
        
  //     }
  //   }
  //   catch (error) {
  //     if (error.response && error.response.data) {
  //       console.log(error.response.data.message); // Set error message from backend
  //     }
  //     else {
  //     console.log('An unexpected error occurred'); // Fallback error message
  //     }
  //   }
  // };

  return (
    <BoxContainer>
      <FormContainer>
        <Input 
          type="email" 
          value={loginMail}
          onChange={(e) => setloginMail(e.target.value)}
          placeholder="Email" 
          required
        />
        <Input 
          type="password" 
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setloginPassword(e.target.value)}
          required
        />

      <SubmitButton 
        type="submit">Signin
      </SubmitButton>

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" className="mb-4">Forgot your password?</MutedLink>
      <Marginer direction="vertical" />

      <Marginer direction="vertical" />
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup}>
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}