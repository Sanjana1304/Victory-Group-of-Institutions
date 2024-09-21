import React from "react";
// import "./styles.css";
import styled from "styled-components";
import AccountBox from "../components/accountBox/index";

const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function UserAuth() {
  return <AuthContainer>
    <AccountBox />
  </AuthContainer>
}