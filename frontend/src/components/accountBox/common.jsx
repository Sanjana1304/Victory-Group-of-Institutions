import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  background-color: rgba(0,0,0,1);
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(0,0,0,1);
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: purple;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(255,255,255,1);
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type || "text",  // Default type is "text"
}))`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid cyan;
  }
`;


export const SubmitButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  color: rgba(255,255,255,1);
  font-size: 15px;
  font-weight: 600;
  border: none;
  margin:auto;
  margin-top: 10px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: linear-gradient(
    58deg, purple 20%, cyan 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const LineText = styled.p`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
`;